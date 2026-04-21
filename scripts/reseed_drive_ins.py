#!/usr/bin/env python3
"""
Reseed driveintonight.com from OpenStreetMap Overpass API.

Pulls only properly-tagged drive-in theaters (amenity=cinema AND
cinema:type=drive_in OR drive_in=yes OR leisure=drive_in_theater).
Replaces src/data/locations.json — original was bloated with indoor
auditoriums (Bama Theatre, Callaway Auditorium, etc.) that aren't
drive-ins at all.

Source: 2026-04-19 directory rationalization audit. WS4 D2 ruling: re-seed.

Coverage caveat: OSM is community-edited; coverage in the US is
incomplete relative to UDITOA's ~248 active drive-ins. Expect this
script to return 100-200 drive-ins. Document it as v1 baseline;
plan a manual curation v2 against UDITOA member list later.
"""
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

OVERPASS_URL = "https://overpass-api.de/api/interpreter"

QUERY = """
[out:json][timeout:180];
area["ISO3166-1"="US"][admin_level=2]->.us;
(
  node["amenity"="cinema"]["cinema:type"="drive_in"](area.us);
  way["amenity"="cinema"]["cinema:type"="drive_in"](area.us);
  relation["amenity"="cinema"]["cinema:type"="drive_in"](area.us);
  node["amenity"="cinema"]["drive_in"="yes"](area.us);
  way["amenity"="cinema"]["drive_in"="yes"](area.us);
  node["leisure"="drive_in_theater"](area.us);
  way["leisure"="drive_in_theater"](area.us);
);
out center tags;
"""

STATE_ABBR_TO_NAME = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii",
    "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine",
    "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota",
    "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska",
    "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico",
    "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
    "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island",
    "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas",
    "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington",
    "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
}


def slugify(text):
    s = text.lower()
    s = re.sub(r"['\u2019]", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s


def query_overpass():
    print("Querying OpenStreetMap Overpass API...")
    payload = urllib.parse.urlencode({"data": QUERY}).encode()
    req = urllib.request.Request(
        OVERPASS_URL,
        data=payload,
        headers={"User-Agent": "driveintonight-reseed/1.0 (raiderj77)"},
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        return json.load(resp)


def get_coords(element):
    if element["type"] == "node":
        return element.get("lat"), element.get("lon")
    center = element.get("center")
    if center:
        return center.get("lat"), center.get("lon")
    return None, None


def normalize_state(tags):
    raw = tags.get("addr:state") or tags.get("is_in:state") or ""
    raw = raw.strip()
    if not raw:
        return ""
    if raw in STATE_ABBR_TO_NAME:
        return STATE_ABBR_TO_NAME[raw]
    if raw.upper() in STATE_ABBR_TO_NAME:
        return STATE_ABBR_TO_NAME[raw.upper()]
    # Already a full name?
    if raw in STATE_ABBR_TO_NAME.values():
        return raw
    return raw  # best effort, may be unusual format


def transform(osm_data):
    elements = osm_data.get("elements", [])
    print(f"OSM returned {len(elements)} elements")

    locations = []
    seen_slugs = set()
    skipped_no_name = 0
    skipped_no_coords = 0
    skipped_dup_slug = 0

    for el in elements:
        tags = el.get("tags", {})
        name = (tags.get("name") or "").strip()
        if not name:
            skipped_no_name += 1
            continue
        lat, lng = get_coords(el)
        if lat is None or lng is None:
            skipped_no_coords += 1
            continue
        state = normalize_state(tags)
        city = (tags.get("addr:city") or "").strip()
        slug = slugify(name)
        if slug in seen_slugs:
            slug = f"{slug}-{el.get('id', 'x')}"
        if slug in seen_slugs:
            skipped_dup_slug += 1
            continue
        seen_slugs.add(slug)

        descr_state = state if state else "the United States"
        descr_city = f"{city}, " if city else ""
        location = {
            "name": name,
            "slug": slug,
            "state": state,
            "stateSlug": slugify(state) if state else "",
            "city": city,
            "lat": round(lat, 6),
            "lng": round(lng, 6),
            "description": f"{name} is a drive-in movie theater in {descr_city}{descr_state}.",
            "amenities": ["Drive-in movies", "Concessions"],
        }
        locations.append(location)

    print(f"  kept: {len(locations)}")
    print(f"  skipped (no name): {skipped_no_name}")
    print(f"  skipped (no coords): {skipped_no_coords}")
    print(f"  skipped (dup slug): {skipped_dup_slug}")

    # Sort: state, then name
    locations.sort(key=lambda x: (x["state"] or "zz", x["name"]))
    return locations


def state_breakdown(locations):
    counts = {}
    for loc in locations:
        s = loc["state"] or "(unknown)"
        counts[s] = counts.get(s, 0) + 1
    print("\nState breakdown:")
    for state in sorted(counts.keys()):
        print(f"  {state:<25} {counts[state]:>3}")
    print(f"\nTotal: {len(locations)} drive-ins across {len(counts)} state buckets")


def main():
    repo = Path("/home/rex/driveintonight")
    if not repo.is_dir():
        print(f"ERROR: repo not found at {repo}", file=sys.stderr)
        return 1

    out_path = repo / "src" / "data" / "locations.json"

    osm = query_overpass()
    locations = transform(osm)
    state_breakdown(locations)

    print(f"\nWriting {len(locations)} locations to {out_path}")
    out_path.write_text(json.dumps(locations, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())

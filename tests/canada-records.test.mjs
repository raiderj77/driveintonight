import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const locations = JSON.parse(read('src/data/locations.json'));

// Simplified Ontario boundary polygon ([lng, lat] pairs). The southern edge
// traces the Great Lakes / St. Lawrence shore; the northern and western
// edges are a generous envelope. Verified against the full catalog on
// 2026-11-02: exactly the Canadian records fall inside, all US records
// (including every US Great Lakes shoreline record) fall outside.
const ONTARIO_POLYGON = [
  [-95.2, 49.4], [-94.6, 52.0], [-92.0, 54.5], [-89.0, 55.8], [-86.0, 55.3],
  [-83.5, 55.0], [-81.5, 54.2], [-79.8, 51.6], [-79.6, 49.0], [-79.55, 47.6],
  [-78.9, 46.8], [-77.9, 46.3], [-76.8, 45.9], [-75.6, 45.65], [-74.9, 45.6],
  [-75.0, 45.0], [-75.7, 44.9], [-76.5, 44.15], [-77.6, 43.95], [-78.3, 43.85],
  [-78.9, 43.72], [-79.1, 43.68], [-79.3, 43.62], [-79.55, 43.56],
  [-79.7, 43.45], [-79.85, 43.3], [-79.55, 43.22], [-79.07, 43.25],
  [-78.93, 42.95], [-79.3, 42.85], [-80.4, 42.65], [-81.5, 42.3],
  [-82.3, 41.95], [-82.55, 42.25], [-83.05, 42.28], [-83.12, 42.6],
  [-82.68, 42.95], [-82.45, 43.05], [-82.42, 43.6], [-82.0, 44.05],
  [-81.55, 44.55], [-81.18, 44.95], [-81.75, 45.45], [-82.5, 45.75],
  [-83.4, 46.05], [-84.05, 46.4], [-84.55, 46.52], [-84.8, 46.95],
  [-85.9, 47.6], [-87.4, 48.35], [-88.4, 48.75], [-89.25, 48.4],
  [-89.6, 48.05], [-90.4, 48.0], [-91.5, 48.1], [-92.6, 48.55], [-94.6, 49.35],
];

function insideOntario(lng, lat) {
  let inside = false;
  for (let i = 0, j = ONTARIO_POLYGON.length - 1; i < ONTARIO_POLYGON.length; j = i++) {
    const [xi, yi] = ONTARIO_POLYGON[i];
    const [xj, yj] = ONTARIO_POLYGON[j];
    if ((yi > lat) !== (yj > lat) && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

const EXPECTED_CANADIAN = new Map([
  ['5-drive-in', 'Oakville'],
  ['muskoka-drive-in-cinema', 'Gravenhurst'],
  ['canview-drive-in', 'Fonthill'],
]);

test('every record carries an explicit country, US by default', () => {
  for (const location of locations) {
    assert.ok(Object.hasOwn(location, 'country'), `${location.slug} is missing a country field`);
    assert.ok(location.country === 'US' || location.country === 'CA', `${location.slug} has unexpected country ${location.country}`);
    if (location.country === 'US') {
      assert.notEqual(location.stateSlug, 'ontario', `${location.slug} is a US record filed under Ontario`);
    }
  }
  assert.equal(locations.filter((location) => location.country === 'US').length, 284);
});

test('the Canadian records resolve to Ontario routes with corrected fields', () => {
  const canadian = locations.filter((location) => location.country === 'CA');
  assert.deepEqual(
    canadian.map((location) => location.slug).sort(),
    [...EXPECTED_CANADIAN.keys()].sort(),
  );
  for (const location of canadian) {
    assert.equal(location.state, 'Ontario', `${location.slug} region is not Ontario`);
    assert.equal(location.stateSlug, 'ontario', `${location.slug} does not route under /ontario`);
    assert.equal(location.city, EXPECTED_CANADIAN.get(location.slug), `${location.slug} city is wrong`);
    assert.match(location.description, /Ontario/, `${location.slug} description does not name Ontario`);
    assert.doesNotMatch(location.description, /New York/, `${location.slug} description still names New York`);
  }
});

test('no record coordinates disagree with the filed country or region', () => {
  for (const location of locations) {
    assert.equal(
      insideOntario(location.lng, location.lat),
      location.country === 'CA',
      `${location.slug} (${location.state}) coordinates ${location.lat},${location.lng} disagree with country ${location.country}`,
    );
  }
  // The defunct Toronto pop-up venue is excluded from the catalog entirely;
  // it must not reappear filed under any region.
  assert.equal(locations.some((location) => location.slug === 'city-view-drive-in'), false);
});

test('region counts reconcile with the catalog total', () => {
  const byRegion = new Map();
  for (const location of locations) {
    byRegion.set(location.stateSlug, (byRegion.get(location.stateSlug) ?? 0) + 1);
  }
  const total = [...byRegion.values()].reduce((sum, count) => sum + count, 0);
  assert.equal(total, locations.length);
  assert.equal(byRegion.get('ontario'), EXPECTED_CANADIAN.size);
  // 25 after the coordinate-audited state corrections (PR #13) moved
  // Warwick Drive-In Theatre from New Jersey into New York.
  assert.equal(byRegion.get('new-york'), 25);
});

test('Canadian regions are labeled with their country in the UI sources', () => {
  assert.match(read('src/lib/regions.ts'), /country === 'CA' \? `\$\{state\}, Canada`/);
  assert.match(read('src/app/[state]/page.tsx'), /Back to all states and provinces/);
  assert.match(read('src/app/page.tsx'), /represented states and provinces/);
});

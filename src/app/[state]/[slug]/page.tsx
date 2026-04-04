import type { Metadata } from "next";
import Link from "next/link";
import locations from "@/data/locations.json";

export const revalidate = 86400;

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const stateSlug = (state: string) => state.toLowerCase().replace(/\s+/g, "-");

export async function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}): Promise<Metadata> {
  const { state, slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Drive-In Not Found | Drive-In Tonight",
      description: "The drive-in theater you are looking for was not found.",
    };
  }

  return {
    title: `${location.name} | Drive-In Theaters in ${location.state}`,
    description: `${location.name} in ${location.city}, ${location.state}. ${location.description} Find amenities, directions, and more.`,
    openGraph: {
      title: location.name,
      description: location.description,
      type: "website",
      url: `https://driveintonight.com/${state}/${slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    return (
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1>Drive-In Theater Not Found</h1>
        <p>The drive-in theater you are looking for does not exist.</p>
        <Link
          href="/"
          style={{
            backgroundColor: "#1a0d3d",
            color: "#fff",
            padding: "0.8rem 1.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const brandColor = "#1a0d3d";
  const accentColor = "#ffcc00";

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "2rem", fontSize: "0.95rem" }}>
          <Link
            href="/"
            style={{ color: brandColor, textDecoration: "none" }}
          >
            Home
          </Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <Link
            href={`/${location.stateSlug}`}
            style={{ color: brandColor, textDecoration: "none" }}
          >
            {location.state}
          </Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <span style={{ color: "#666" }}>{location.name}</span>
        </nav>

        {/* Header */}
        <h1 style={{ fontSize: "2.5rem", color: brandColor, marginBottom: "0.5rem" }}>
          {location.name}
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666", margin: "0 0 2rem 0" }}>
          {location.city}, {location.state}
        </p>

        {/* Main Content */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
          {/* Left Column */}
          <div>
            <section
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "8px",
                marginBottom: "2rem",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", color: brandColor, marginTop: 0 }}>
                About
              </h2>
              <p style={{ lineHeight: "1.8", color: "#555" }}>
                {location.description}
              </p>
            </section>

            <section
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "8px",
                marginBottom: "2rem",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", color: brandColor, marginTop: 0 }}>
                Amenities
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                {location.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    style={{
                      padding: "0.8rem",
                      backgroundColor: accentColor,
                      color: brandColor,
                      borderRadius: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            <section
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "8px",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", color: brandColor, marginTop: 0 }}>
                Important Disclaimer
              </h2>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>
                The information provided on this page is for informational purposes
                only. We make every effort to keep our directory accurate and
                up-to-date, but we cannot guarantee the accuracy, completeness, or
                timeliness of all information. Operating hours, amenities, and
                pricing may change without notice. Please contact the drive-in
                directly to verify current information before planning your visit.
              </p>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <section
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "8px",
                marginBottom: "2rem",
                border: `2px solid ${accentColor}`,
              }}
            >
              <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: 0 }}>
                Location Info
              </h2>
              <div style={{ fontSize: "0.95rem", color: "#555" }}>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>City:</strong> {location.city}
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>State:</strong> {location.state}
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Coordinates:</strong>
                  <br />
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
                <a
                  href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "1rem",
                    padding: "0.8rem 1.5rem",
                    backgroundColor: brandColor,
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontWeight: "bold",
                  }}
                >
                  View on Maps
                </a>
              </div>
            </section>

            {/* Nearby Listings */}
            <section
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "8px",
              }}
            >
              <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: 0 }}>
                Other Drive-Ins in {location.state}
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                {locations
                  .filter(
                    (l) =>
                      l.state === location.state && l.slug !== location.slug
                  )
                  .slice(0, 5)
                  .map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        href={`/${loc.stateSlug}/${loc.slug}`}
                        style={{
                          color: brandColor,
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        {loc.name}
                      </Link>
                      <p style={{ margin: "0.3rem 0 0 0", color: "#666", fontSize: "0.9rem" }}>
                        {loc.city}
                      </p>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Place Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: location.name,
            description: location.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.city,
              addressRegion: location.state,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: location.lat,
              longitude: location.lng,
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://driveintonight.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: location.state,
                item: `https://driveintonight.com/${location.stateSlug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: location.name,
                item: `https://driveintonight.com/${location.stateSlug}/${location.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}

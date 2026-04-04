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
const slugToState = (slug: string) =>
  states.find((s) => stateSlug(s) === slug) || "Unknown";

export async function generateStaticParams() {
  return states.map((state) => ({
    state: stateSlug(state),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const stateName = slugToState(state);
  const stateLocations = locations.filter(
    (loc) => stateSlug(loc.state) === state
  );

  return {
    title: `Drive-In Theaters in ${stateName} | Drive-In Tonight`,
    description: `Find ${stateLocations.length || "drive-in"} drive-in theaters in ${stateName}. Browse locations, amenities, and directions to the best drive-ins in ${stateName}.`,
    openGraph: {
      title: `Drive-In Theaters in ${stateName}`,
      description: `Find drive-in theaters across ${stateName}`,
      type: "website",
      url: `https://driveintonight.com/${state}`,
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateName = slugToState(state);
  const stateLocations = locations.filter(
    (loc) => stateSlug(loc.state) === state
  );

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
        <nav style={{ marginBottom: "2rem" }}>
          <Link
            href="/"
            style={{ color: brandColor, textDecoration: "none" }}
          >
            Home
          </Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <span style={{ color: "#666" }}>{stateName}</span>
        </nav>

        <h1
          style={{
            fontSize: "2.5rem",
            color: brandColor,
            marginBottom: "1rem",
          }}
        >
          Drive-In Theaters in {stateName}
        </h1>

        {stateLocations.length > 0 ? (
          <>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                marginBottom: "2rem",
              }}
            >
              Found {stateLocations.length} drive-in
              {stateLocations.length !== 1 ? "s" : ""} in {stateName}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              {stateLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${location.stateSlug}/${location.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${brandColor}`,
                      borderRadius: "8px",
                      padding: "1.5rem",
                      cursor: "pointer",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 0.5rem 0",
                        color: brandColor,
                        fontSize: "1.3rem",
                      }}
                    >
                      {location.name}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 0.5rem 0",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      {location.city}, {location.state}
                    </p>
                    <p
                      style={{
                        margin: "0 0 1rem 0",
                        color: "#555",
                        fontSize: "0.95rem",
                        flexGrow: 1,
                      }}
                    >
                      {location.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {location.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          style={{
                            backgroundColor: accentColor,
                            color: brandColor,
                            padding: "0.3rem 0.6rem",
                            borderRadius: "4px",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <p style={{ fontSize: "1.1rem", color: "#666" }}>
              Coming soon! We're working to add drive-in theaters in {stateName}{" "}
              to our directory. Check back soon or visit other states to find
              drive-ins near you.
            </p>
          </div>
        )}

        {/* Other States Section */}
        <section
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: brandColor }}>
            Browse Other States
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1rem",
            }}
          >
            {states.map((s) => (
              <Link
                key={s}
                href={`/${stateSlug(s)}`}
                style={{
                  backgroundColor: s === stateName ? accentColor : brandColor,
                  color: s === stateName ? brandColor : "#fff",
                  padding: "0.8rem",
                  borderRadius: "4px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  transition: "background-color 0.3s",
                }}
              >
                {s}
              </Link>
            ))}
          </div>
        </section>
      </div>

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
                name: stateName,
                item: `https://driveintonight.com/${state}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}

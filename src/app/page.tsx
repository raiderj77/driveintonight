import type { Metadata } from "next";
import Link from "next/link";
import locations from "@/data/locations.json";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Find Drive-In Theaters Near You | Drive-In Tonight",
  description:
    "Search and discover drive-in movie theaters across the United States. Find locations, amenities, showtimes, and directions to the best drive-ins near you.",
  openGraph: {
    title: "Find Drive-In Theaters Near You | Drive-In Tonight",
    description:
      "Search and discover drive-in movie theaters across the United States.",
    type: "website",
    url: "https://driveintonight.com",
  },
};

export default function Home() {
  const brandColor = "#1a0d3d";
  const accentColor = "#ffcc00";
  const featuredListings = locations.slice(0, 6);

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

  const stateSlug = (state: string) =>
    state.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: brandColor,
            color: "#fff",
            padding: "3rem 2rem",
            borderRadius: "8px",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0" }}>
            Find Drive-In Theaters Near You
          </h1>
          <p style={{ fontSize: "1.2rem", margin: "0 0 2rem 0" }}>
            Discover the magic of outdoor movie experiences across America
          </p>

          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <select
              style={{
                padding: "0.8rem",
                borderRadius: "4px",
                border: "none",
                fontSize: "1rem",
                minWidth: "200px",
              }}
            >
              <option value="">Select a state...</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter city name..."
              style={{
                padding: "0.8rem",
                borderRadius: "4px",
                border: "none",
                fontSize: "1rem",
                minWidth: "200px",
              }}
            />
            <button
              style={{
                padding: "0.8rem 2rem",
                backgroundColor: accentColor,
                color: brandColor,
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Search
            </button>
          </div>
        </section>

        {/* Featured Listings */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              color: brandColor,
              marginBottom: "2rem",
            }}
          >
            Featured Drive-In Theaters
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {featuredListings.map((location) => (
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
        </section>

        {/* Browse by State */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              color: brandColor,
              marginBottom: "2rem",
            }}
          >
            Browse by State
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
            }}
          >
            {states.slice(0, 20).map((state) => (
              <Link
                key={state}
                href={`/${stateSlug(state)}`}
                style={{
                  backgroundColor: brandColor,
                  color: "#fff",
                  padding: "1rem",
                  borderRadius: "4px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
              >
                {state}
              </Link>
            ))}
          </div>
          <div
            style={{
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#666" }}>
              ...and 30 more states. Browse all states in the directory above.
            </p>
          </div>
        </section>

        {/* Main Content for SEO */}
        <section style={{ marginBottom: "3rem", backgroundColor: "#fff", padding: "2rem", borderRadius: "8px" }}>
          <article style={{ lineHeight: "1.8", color: "#333" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                color: brandColor,
                marginBottom: "1rem",
              }}
            >
              What Are Drive-In Theaters?
            </h2>
            <p>
              Drive-in theaters are outdoor cinemas where visitors can watch
              movies from the comfort of their vehicles. This unique entertainment
              experience combines the comfort of sitting in your car with the charm
              of outdoor moviegoing. Drive-in theaters first appeared in the 1920s
              and became hugely popular during the 1950s and 1960s as family
              entertainment destinations. While many closed over the decades, a
              dedicated community of movie enthusiasts has helped preserve and
              revive drive-in theaters across America. Today, drive-ins offer a
              nostalgic and fun alternative to traditional multiplex cinemas.
            </p>

            <h2
              style={{
                fontSize: "1.8rem",
                color: brandColor,
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              A Brief History of Drive-In Theaters
            </h2>
            <p>
              The first drive-in theater opened in 1933 in Camden, New Jersey,
              and the concept quickly spread across the United States. By the
              1950s, there were over 4,000 drive-in theaters operating across
              America. They became cultural icons and popular dating destinations.
              The drive-in experience peaked in the 1960s, but television and
              climate-controlled multiplexes led to a decline. However, in recent
              years, drive-ins have experienced a renaissance, with movie lovers
              appreciating their unique atmosphere, outdoor setting, and retro
              appeal. Many drive-ins now feature modern conveniences alongside
              their classic charm.
            </p>

            <h2
              style={{
                fontSize: "1.8rem",
                color: brandColor,
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              How to Find Drive-In Theaters with Our Directory
            </h2>
            <p>
              Drive-In Tonight makes it simple to discover drive-in theaters near
              you. You can browse our directory by state, search for specific
              locations, or explore featured drive-ins across the country. Each
              listing includes detailed information about amenities, seating
              options, concession offerings, and directions. Our comprehensive
              database covers drive-ins from coast to coast, helping you plan your
              next outdoor movie night. Whether you're looking for a romantic date
              night, family entertainment, or a nostalgic experience, our directory
              connects you with the best drive-ins in your area.
            </p>

            <h2
              style={{
                fontSize: "1.8rem",
                color: brandColor,
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              What to Expect at a Drive-In Theater
            </h2>
            <p>
              At a drive-in theater, you'll park your vehicle in a designated spot
              facing the large outdoor screen. Most drive-ins provide FM radio
              broadcast audio that you can tune into on your car radio, though some
              older theaters may use speakers mounted on poles. Concession stands
              offer traditional movie snacks like popcorn, candy, hot dogs, and
              beverages. Many drive-ins allow you to bring blankets and chairs for
              additional comfort. The experience typically includes a pre-show
              atmosphere with family-friendly activities before the movie starts.
              Movies usually start at dusk, and many drive-ins feature double
              features, giving you two films for the price of admission.
            </p>

            <h2
              style={{
                fontSize: "1.8rem",
                color: brandColor,
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              Tips for an Enjoyable Drive-In Experience
            </h2>
            <ul style={{ fontSize: "1rem" }}>
              <li>Arrive early to secure a good parking spot with a clear view</li>
              <li>
                Bring blankets, pillows, or lawn chairs for extra comfort outside
                your vehicle
              </li>
              <li>Pack a picnic or plan to enjoy the drive-in's concession menu</li>
              <li>Tune to the correct FM frequency for clear audio</li>
              <li>
                Keep your headlights off once the movie starts to avoid disturbing
                other moviegoers
              </li>
              <li>Check weather forecasts and dress appropriately for outdoor sitting</li>
              <li>
                Bring insect repellent and sunscreen, especially during warmer
                months
              </li>
              <li>Allow time for the pre-show entertainment and advertisements</li>
              <li>Respect other patrons and keep noise levels down</li>
              <li>Visit the drive-in's website for current movie schedules and pricing</li>
            </ul>

            <h2
              style={{
                fontSize: "1.8rem",
                color: brandColor,
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1.5rem",
                borderLeft: `4px solid ${accentColor}`,
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ marginTop: 0, color: brandColor }}>
                Are drive-in theaters pet friendly?
              </h3>
              <p>
                Many drive-in theaters are pet friendly! Since you're staying in
                your vehicle, bringing your dog or cat is often permitted. However,
                policies vary by location, so it's best to check with the specific
                drive-in before your visit. Some may have restrictions or specific
                guidelines for pets.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1.5rem",
                borderLeft: `4px solid ${accentColor}`,
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ marginTop: 0, color: brandColor }}>
                How much does it cost to visit a drive-in theater?
              </h3>
              <p>
                Drive-in admission prices vary by location, typically ranging from
                $8 to $15 per vehicle. Some theaters charge per person, while
                others charge per vehicle, making drive-ins particularly economical
                for groups or families. Concession prices are similar to traditional
                theaters.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1.5rem",
                borderLeft: `4px solid ${accentColor}`,
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ marginTop: 0, color: brandColor }}>
                What happens if it rains at a drive-in theater?
              </h3>
              <p>
                Most drive-in theaters operate rain or shine, since you're safely
                inside your vehicle. However, some theaters may close for severe
                weather or lightning. It's a good idea to check the weather forecast
                and have the theater's contact information in case of concerns.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1.5rem",
                borderLeft: `4px solid ${accentColor}`,
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ marginTop: 0, color: brandColor }}>
                Can I bring outside food to a drive-in?
              </h3>
              <p>
                Policies on outside food vary by drive-in theater. Some allow you
                to bring your own snacks, while others prohibit outside food to
                support their concession sales. Many theaters are flexible if you
                purchase at least some items from their concession stand. Contact
                the drive-in directly to confirm their specific policy.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1.5rem",
                borderLeft: `4px solid ${accentColor}`,
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ marginTop: 0, color: brandColor }}>
                When is the best time to visit a drive-in theater?
              </h3>
              <p>
                Drive-in theaters typically operate seasonally from late spring
                through early fall, taking advantage of warm weather and longer
                daylight hours. Summer is peak season with the most movie releases
                and highest attendance. However, visiting on weekday evenings often
                provides a less crowded experience. Check local drive-ins for their
                specific operating seasons.
              </p>
            </div>
          </article>
        </section>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are drive-in theaters pet friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many drive-in theaters are pet friendly! Since you're staying in your vehicle, bringing your dog or cat is often permitted. However, policies vary by location, so it's best to check with the specific drive-in before your visit.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to visit a drive-in theater?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Drive-in admission prices vary by location, typically ranging from $8 to $15 per vehicle. Some theaters charge per person, while others charge per vehicle, making drive-ins particularly economical for groups or families.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if it rains at a drive-in theater?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most drive-in theaters operate rain or shine, since you're safely inside your vehicle. However, some theaters may close for severe weather or lightning.",
                },
              },
              {
                "@type": "Question",
                name: "Can I bring outside food to a drive-in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Policies on outside food vary by drive-in theater. Some allow you to bring your own snacks, while others prohibit outside food to support their concession sales.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to visit a drive-in theater?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Drive-in theaters typically operate seasonally from late spring through early fall, taking advantage of warm weather and longer daylight hours. Summer is peak season.",
                },
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Drive-In Tonight",
            url: "https://driveintonight.com",
            description:
              "Free directory of drive-in movie theaters across the United States",
            logo: "https://driveintonight.com/logo.png",
            sameAs: [
              "https://www.facebook.com/driveintonight",
              "https://www.twitter.com/driveintonight",
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Drive-In Tonight",
            url: "https://driveintonight.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://driveintonight.com/search?q={search_term_string}",
              },
              query_input: "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}

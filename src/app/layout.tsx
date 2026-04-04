import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Drive-In Tonight | Find Drive-In Theaters Near You",
    template: "%s | Drive-In Tonight",
  },
  description:
    "Free directory of drive-in movie theaters across the United States. Find open drive-ins near you with showtimes, amenities, and directions.",
  keywords:
    "drive-in theater, drive-in movie, drive-in cinema, find drive-ins, movie theaters, outdoor movies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driveintonight.com",
    siteName: "Drive-In Tonight",
    title: "Drive-In Tonight | Find Drive-In Theaters Near You",
    description:
      "Free directory of drive-in movie theaters across the United States.",
    images: [
      {
        url: "https://driveintonight.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drive-In Tonight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive-In Tonight | Find Drive-In Theaters Near You",
    description:
      "Free directory of drive-in movie theaters across the United States.",
  },
  canonical: "https://driveintonight.com",
  metadataBase: new URL("https://driveintonight.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brandColor = "#1a0d3d";
  const accentColor = "#ffcc00";

  return (
    <html lang="en">
      <head>
        <meta
          name="msvalidate.01"
          content="C4C9B6256BDEDED169E4DE01CA953390"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <link rel="canonical" href="https://driveintonight.com" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f5f5f5",
          color: "#333",
        }}
      >
        {/* Sticky Header */}
        <header
          style={{
            backgroundColor: brandColor,
            color: "#fff",
            padding: "1rem 2rem",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: accentColor,
                textDecoration: "none",
              }}
            >
              🎬 Drive-In Tonight
            </Link>
            <nav>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <Link
                  href="/"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Terms
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: brandColor,
            color: "#fff",
            padding: "2rem",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              fontSize: "0.9rem",
            }}
          >
            {/* Directory Sites */}
            <div>
              <h4 style={{ marginTop: 0, color: accentColor }}>
                Directory Sites
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <Link
                    href="https://publicboatramps.com"
                    style={{ color: "#fff" }}
                  >
                    Public Boat Ramps
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://findswimspots.com"
                    style={{ color: "#fff" }}
                  >
                    Find Swim Spots
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://craftdistilleryfinder.com"
                    style={{ color: "#fff" }}
                  >
                    Craft Distillery Finder
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://allskateparks.com"
                    style={{ color: "#fff" }}
                  >
                    All Skate Parks
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rockhoundingfinder.com"
                    style={{ color: "#fff" }}
                  >
                    Rockhounding Finder
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://nearbyescaperooms.com"
                    style={{ color: "#fff" }}
                  >
                    Nearby Escape Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://allskatingrinks.com"
                    style={{ color: "#fff" }}
                  >
                    All Skating Rinks
                  </Link>
                </li>
                <li>
                  <Link href="https://soakusa.net" style={{ color: "#fff" }}>
                    Soak USA
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tool Sites */}
            <div>
              <h4 style={{ marginTop: 0, color: accentColor }}>Tool Sites</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <Link
                    href="https://fibertools.app"
                    style={{ color: "#fff" }}
                  >
                    Fiber Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://mindchecktools.com"
                    style={{ color: "#fff" }}
                  >
                    Mind Check Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://flipmycase.com"
                    style={{ color: "#fff" }}
                  >
                    Flip My Case
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://creatorrevenuecalculator.com"
                    style={{ color: "#fff" }}
                  >
                    Creator Revenue Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://contractextract.com"
                    style={{ color: "#fff" }}
                  >
                    Contract Extract
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://medicalbillreader.com"
                    style={{ color: "#fff" }}
                  >
                    Medical Bill Reader
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://taxbreaktools.com"
                    style={{ color: "#fff" }}
                  >
                    Tax Break Tools
                  </Link>
                </li>
                <li>
                  <Link href="https://524tracker.com" style={{ color: "#fff" }}>
                    524 Tracker
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              fontSize: "0.8rem",
            }}
          >
            <p>
              &copy; 2026 Drive-In Tonight. All rights reserved. | Free directory
              of drive-in movie theaters across the United States.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

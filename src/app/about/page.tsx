import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Drive-In Tonight | Drive-In Directory",
  description:
    "Learn about Drive-In Tonight, a free directory of drive-in movie theaters across the United States.",
};

export default function About() {
  const brandColor = "#1a0d3d";
  const accentColor = "#ffcc00";

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <nav style={{ marginBottom: "2rem" }}>
        <Link
          href="/"
          style={{ color: brandColor, textDecoration: "none" }}
        >
          Home
        </Link>
        <span style={{ margin: "0 0.5rem" }}>/</span>
        <span style={{ color: "#666" }}>About</span>
      </nav>

      <h1 style={{ fontSize: "2rem", color: brandColor, marginBottom: "2rem" }}>
        About Drive-In Tonight
      </h1>

      <article
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          lineHeight: "1.8",
          color: "#333",
        }}
      >
        <h2 style={{ fontSize: "1.3rem", color: brandColor }}>Our Mission</h2>
        <p>
          Drive-In Tonight is dedicated to celebrating and preserving the
          classic American drive-in theater experience. Our mission is to create
          a free, comprehensive directory that helps movie lovers discover
          drive-in theaters across the United States. We believe that drive-in
          theaters are unique cultural institutions that deserve to be celebrated,
          and we're committed to making it easy for people to find and enjoy
          these special venues.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          What Is Drive-In Tonight?
        </h2>
        <p>
          Drive-In Tonight is a free directory service dedicated to helping
          people find drive-in movie theaters across the United States. We
          maintain a comprehensive database of drive-in locations, complete with
          detailed information about amenities, hours of operation, and
          directions. Whether you're planning a family outing, a romantic date
          night, or simply want to experience a nostalgic evening under the
          stars, Drive-In Tonight makes it simple to find the perfect drive-in
          theater.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          How Our Directory Works
        </h2>
        <p>
          Our directory is organized by state, making it easy to browse
          drive-ins in your area or plan a road trip to visit theaters in
          different regions. Each listing includes:
        </p>
        <ul>
          <li>Theater name and location</li>
          <li>City and state information</li>
          <li>Detailed descriptions of the venue</li>
          <li>Available amenities (FM radio, concessions, etc.)</li>
          <li>Geographic coordinates for mapping</li>
          <li>Links to nearby theaters in the same state</li>
        </ul>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          Our Data Sources
        </h2>
        <p>
          The drive-in information in our directory comes from a variety of
          sources, including:
        </p>
        <ul>
          <li>Direct research and verification</li>
          <li>Theater websites and contact information</li>
          <li>Community feedback and user submissions</li>
          <li>Historical records and local resources</li>
          <li>Ongoing updates from theater operators</li>
        </ul>
        <p>
          We continuously work to keep our information accurate and up-to-date.
          However, theater hours, amenities, and other details can change, so we
          recommend verifying information directly with the theater before
          visiting.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          Important Disclaimer
        </h2>
        <p
          style={{
            backgroundColor: "#fff3cd",
            padding: "1.5rem",
            borderLeft: `4px solid ${accentColor}`,
            borderRadius: "4px",
          }}
        >
          <strong>Please Note:</strong> The information provided in the Drive-In
          Tonight directory is for informational purposes only. While we make
          every effort to maintain accurate and current information, we cannot
          guarantee the accuracy, completeness, or timeliness of all listings.
          Operating hours, amenities, admission prices, and other details may
          change without notice. Always contact the drive-in theater directly to
          verify current information before making travel plans. We are not
          responsible for any inaccuracies in the information provided or for
          any issues that may arise from using this directory.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          Why Drive-In Theaters Matter
        </h2>
        <p>
          Drive-in theaters are more than just movie venues—they're cultural
          institutions and gathering places. The drive-in experience offers
          something special: the freedom to watch movies under the stars with
          family and friends, the nostalgia of a bygone era, and the unique
          atmosphere that only an outdoor theater can provide. Many drive-ins
          have been operating for decades, providing entertainment through
          changing times. By celebrating and promoting these theaters, we help
          preserve this important part of American culture.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          Suggestions and Feedback
        </h2>
        <p>
          We welcome your feedback! If you notice an error in our directory, have
          a suggestion for a drive-in we should include, or want to report a
          change in theater information, please reach out to us. You can contact
          us at:
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Email:</strong> contact@driveintonight.com
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          Get In Touch
        </h2>
        <p>
          Have questions about a specific drive-in theater? Want to suggest a
          new listing? Interested in partnering with us? We'd love to hear from
          you!
        </p>
        <Link
          href="/contact"
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
          Contact Us
        </Link>
      </article>
    </div>
  );
}

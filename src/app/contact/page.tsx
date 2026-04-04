import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Drive-In Tonight | Get In Touch",
  description:
    "Contact Drive-In Tonight with questions, suggestions, or partnership inquiries.",
};

export default function Contact() {
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
        <span style={{ color: "#666" }}>Contact</span>
      </nav>

      <h1 style={{ fontSize: "2rem", color: brandColor, marginBottom: "2rem" }}>
        Contact Drive-In Tonight
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* Contact Form Section */}
        <article
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: 0 }}>
            Get In Touch
          </h2>
          <p>
            Have a question about a drive-in theater? Want to suggest a location
            we should add to our directory? Found an error in our information?
            We'd love to hear from you!
          </p>

          <div
            style={{
              backgroundColor: accentColor,
              color: brandColor,
              padding: "1.5rem",
              borderRadius: "4px",
              marginTop: "2rem",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "1.2rem" }}>Email Us</h3>
            <p style={{ fontSize: "1.1rem", margin: "1rem 0 0 0" }}>
              <strong>contact@driveintonight.com</strong>
            </p>
            <p style={{ fontSize: "0.9rem", margin: "1rem 0 0 0" }}>
              We respond to all inquiries within 24-48 hours.
            </p>
          </div>
        </article>

        {/* Information Categories */}
        <div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                color: brandColor,
                marginTop: 0,
              }}
            >
              Reporting Errors
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>
              Found an inaccuracy in our directory? Let us know about incorrect
              hours, missing amenities, or outdated contact information. Your
              feedback helps us maintain the best directory possible.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                color: brandColor,
                marginTop: 0,
              }}
            >
              Suggesting New Listings
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>
              Know of a drive-in we haven't listed yet? We're always looking to
              expand our directory. Send us details about the theater and we'll
              verify and add it to our site.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                color: brandColor,
                marginTop: 0,
              }}
            >
              Partnership Inquiries
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>
              Interested in partnering with Drive-In Tonight? We welcome
              collaborations with drive-in theaters, tourism boards, and related
              organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          marginTop: "2rem",
          lineHeight: "1.8",
          color: "#333",
        }}
      >
        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: 0 }}>
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", color: brandColor }}>
            How long does it take to respond to inquiries?
          </h3>
          <p>
            We aim to respond to all emails within 24-48 hours during business
            days. Response times may be longer during peak season or holidays.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", color: brandColor }}>
            Can I submit information about multiple drive-ins?
          </h3>
          <p>
            Absolutely! If you have information about several theaters, feel free
            to include it all in one email. Please be as detailed as possible so
            we can accurately update our directory.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", color: brandColor }}>
            How can I become a verified theater owner?
          </h3>
          <p>
            Theater owners and managers can contact us to claim and manage their
            listings. This allows you to directly update information about your
            venue to ensure accuracy.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", color: brandColor }}>
            Do you accept advertising or sponsorships?
          </h3>
          <p>
            We're open to discussing advertising and sponsorship opportunities.
            Please include details about your proposed partnership in your email.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.1rem", color: brandColor }}>
            What information do you need for a new listing?
          </h3>
          <p>When suggesting a new drive-in, please provide:</p>
          <ul>
            <li>Theater name</li>
            <li>City and state</li>
            <li>Street address (if available)</li>
            <li>Phone number (if available)</li>
            <li>Website or social media links</li>
            <li>Operating season and typical hours</li>
            <li>Available amenities</li>
            <li>Approximate capacity or number of screens</li>
            <li>Any other relevant information</li>
          </ul>
        </div>
      </section>

      {/* Privacy Notice */}
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "1.5rem",
          borderRadius: "8px",
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "#555",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Privacy Notice:</strong> Any information you submit through
          contact forms will be used solely for responding to your inquiry. We
          do not share your contact information with third parties. For more
          details, please review our{" "}
          <Link
            href="/privacy"
            style={{ color: brandColor, textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Drive-In Tonight",
  description: "Privacy policy for Drive-In Tonight directory service.",
};

export default function Privacy() {
  const brandColor = "#1a0d3d";

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
        <span style={{ color: "#666" }}>Privacy Policy</span>
      </nav>

      <h1 style={{ fontSize: "2rem", color: brandColor, marginBottom: "2rem" }}>
        Privacy Policy
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
        <h2 style={{ fontSize: "1.3rem", color: brandColor }}>
          Last Updated: April 2026
        </h2>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          1. Information We Collect
        </h2>
        <p>
          Drive-In Tonight is a free directory service. We do not require user
          accounts or registration. We collect minimal information and do not
          store personal data from casual site visitors. The site operates
          without forms, login systems, or user accounts.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          2. Third-Party Services
        </h2>
        <h3 style={{ fontSize: "1.1rem", color: "#555" }}>Google AdSense</h3>
        <p>
          We work with third-party advertising partners, including Google, who
          may use cookies to serve ads based on your prior visits to this
          website or other websites.
        </p>
        <p>
          This website uses Google AdSense to display advertisements. Google
          and its partners use cookies to serve ads based on your prior visits
          to this website or other websites. Google&apos;s use of advertising
          cookies enables it and its partners to serve ads based on your visit
          to this site and/or other sites on the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://ads.google.com/settings" target="_blank" rel="noopener noreferrer" style={{ color: brandColor }}>
            Google Ads Settings
          </a>
          . You may also opt out of interest-based advertising from participating
          third-party advertisers by visiting{" "}
          <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: brandColor }}>
            optout.aboutads.info
          </a>
          .
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          3. Cookies
        </h2>
        <p>
          Our website uses cookies for analytics and advertising purposes.
          These cookies may be set by third-party providers including Google.
          You can control cookie settings through your browser preferences.
          To opt out of personalized advertising, visit{" "}
          <a href="https://ads.google.com/settings" target="_blank" rel="noopener noreferrer" style={{ color: brandColor }}>
            ads.google.com/settings
          </a>
          {" "}or{" "}
          <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: brandColor }}>
            optout.aboutads.info
          </a>
          .
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          4. Analytics
        </h2>
        <p>
          We may use analytics services to understand how visitors use our
          website. This information helps us improve our services but does not
          identify individual users personally.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          5. Information Sharing
        </h2>
        <p>
          We do not sell, trade, or rent users' personal information to third
          parties. The directory information about drive-in theaters is publicly
          available and provided for informational purposes.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          6. Data Security
        </h2>
        <p>
          We implement reasonable security measures to protect the information
          we collect. However, no method of transmission over the Internet is
          completely secure.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          7. GDPR and Data Rights
        </h2>
        <p>
          If you are a resident of the European Union, you have the right to:
        </p>
        <ul>
          <li>Access your personal data (if we have any)</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
        </ul>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          8. CCPA and California Rights
        </h2>
        <p>
          If you are a California resident, you have the right to know what
          personal information is collected, used, shared, or sold. You have the
          right to delete personal information collected and the right to
          opt-out of the sale or sharing of personal information.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          9. MODPA — Maryland Online Data Privacy Act
        </h2>
        <p>
          As of April 1, 2026, Drive-In Tonight complies with the Maryland Online Data Privacy Act (MODPA). Maryland residents have the following consumer rights:
        </p>
        <ul>
          <li><strong>Right to Access:</strong> You may request to know what personal data we have collected about you.</li>
          <li><strong>Right to Correct:</strong> You may request correction of inaccurate personal data.</li>
          <li><strong>Right to Delete:</strong> You may request deletion of personal data collected from you.</li>
          <li><strong>Right to Opt-Out:</strong> You may opt out of the sale or sharing of your personal data for targeted advertising purposes.</li>
          <li><strong>Right to Data Portability:</strong> You may request a copy of your personal data in a portable format.</li>
        </ul>
        <p>
          <strong>Global Privacy Control (GPC):</strong> Drive-In Tonight honors Global Privacy Control (GPC) signals. If you have GPC enabled in your browser, we will treat it as a universal opt-out signal and apply the strictest privacy settings.
        </p>
        <p>
          <strong>No Sale of Data:</strong> Drive-In Tonight does not sell personal data.
        </p>
        <p>
          <strong>Consumer Rights Requests:</strong> We will respond to verified consumer rights requests within 45 days. To submit a request, contact us at <a href="mailto:privacy@driveintonight.com" style={{ color: brandColor }}>privacy@driveintonight.com</a>.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          10. Changes to This Policy
        </h2>
        <p>
          We may update this privacy policy from time to time. Changes will be
          posted on this page with an updated "Last Updated" date.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          11. Contact Us
        </h2>
        <p>
          If you have questions about this privacy policy or our privacy
          practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> contact@driveintonight.com
        </p>
      </article>
    </div>
  );
}

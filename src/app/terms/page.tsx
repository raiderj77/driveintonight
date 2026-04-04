import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Drive-In Tonight",
  description: "Terms of service for Drive-In Tonight directory service.",
};

export default function Terms() {
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
        <span style={{ color: "#666" }}>Terms of Service</span>
      </nav>

      <h1 style={{ fontSize: "2rem", color: brandColor, marginBottom: "2rem" }}>
        Terms of Service
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
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing and using Drive-In Tonight (the "Website"), you accept
          and agree to be bound by the terms and provision of this agreement.
          If you do not agree to abide by the above, please do not use this
          service.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          2. Use License
        </h2>
        <p>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Drive-In Tonight for personal,
          non-commercial transitory viewing only. This is the grant of a license,
          not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modifying or copying the materials</li>
          <li>
            Using the materials for any commercial purpose or for any public
            display
          </li>
          <li>Attempting to decompile or reverse engineer any software</li>
          <li>Removing any copyright or other proprietary notations</li>
          <li>Transferring the materials to another person or "mirror"</li>
          <li>
            Violating any laws or regulations related to access to or use of
            this Website
          </li>
          <li>Attempting to gain unauthorized access to any portion</li>
        </ul>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          3. Disclaimer
        </h2>
        <p>
          The materials on Drive-In Tonight are provided on an "as is" basis.
          Drive-In Tonight makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
        <p>
          <strong>
            The drive-in theater information provided in this directory is for
            informational purposes only. We do not guarantee the accuracy,
            completeness, or timeliness of any information provided.
          </strong>
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          4. Accuracy of Information
        </h2>
        <p>
          While we strive to maintain accurate information about drive-in
          theaters, we make no guarantee of accuracy. Operating hours, amenities,
          contact information, and other details may change without notice.
          Always verify information directly with the drive-in theater before
          making travel plans.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          5. Limitations of Liability
        </h2>
        <p>
          In no event shall Drive-In Tonight or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on Drive-In Tonight, even if Drive-In
          Tonight or an authorized representative has been notified orally or in
          writing of the possibility of such damage.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          6. Accuracy of Materials
        </h2>
        <p>
          The materials appearing on Drive-In Tonight could include technical,
          typographical, or photographic errors. Drive-In Tonight does not
          warrant that any of the materials on its Website are accurate,
          complete, or current. Drive-In Tonight may make changes to the
          materials contained on its Website at any time without notice.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          7. Links
        </h2>
        <p>
          Drive-In Tonight has not reviewed all of the sites linked to its
          Website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by Drive-In
          Tonight of the site. Use of any such linked website is at the user's
          own risk.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          8. Modifications
        </h2>
        <p>
          Drive-In Tonight may revise these terms of service for its Website at
          any time without notice. By using this Website you are agreeing to be
          bound by the then current version of these terms of service.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          9. Governing Law
        </h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of the United States, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>

        <h2 style={{ fontSize: "1.3rem", color: brandColor, marginTop: "2rem" }}>
          10. Contact Information
        </h2>
        <p>
          If you have questions about these Terms of Service, please contact us
          at:
        </p>
        <p>
          <strong>Email:</strong> contact@driveintonight.com
        </p>
      </article>
    </div>
  );
}

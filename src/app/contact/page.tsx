import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact and Submit a Theater Correction',
  description: 'Report an incorrect Drive-In Tonight record or provide current first-party theater sources.',
  alternates: { canonical: 'https://driveintonight.com/contact' },
};

export default function Contact() {
  return (
    <article className="content-page">
      <p className="section-label">Contact</p>
      <h1>Report a record problem</h1>
      <p className="lead">Email <a href="mailto:contact@driveintonight.com">contact@driveintonight.com</a>. Please do not send sensitive personal information.</p>
      <section><h2>For a correction</h2><ul><li>The Drive-In Tonight page URL.</li><li>What is wrong or missing.</li><li>A current official theater, operator, or owner source that supports the correction.</li><li>The date you checked that source.</li></ul></section>
      <section><h2>For a new reviewed guide</h2><ul><li>The current official website and event or ticket page.</li><li>Official rules, accessibility, and contact pages when available.</li><li>Any ownership or location change that could make older listings misleading.</li></ul><p>Submitting information does not create a paid placement, verification badge, ranking, or promise of publication.</p></section>
      <section><h2>For partnerships</h2><p>Advertising, sponsorship, or affiliate proposals must be clearly disclosed and cannot buy a favorable review or bypass the source standard.</p></section>
    </article>
  );
}

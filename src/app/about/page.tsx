import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About the Drive-In Tonight Source Rebuild',
  description: 'How Drive-In Tonight distinguishes imported records from source-backed visitor guides.',
  alternates: { canonical: 'https://driveintonight.com/about' },
};

export default function About() {
  return (
    <article className="content-page">
      <p className="section-label">About this project</p>
      <h1>A directory being rebuilt around traceable evidence</h1>
      <p className="lead">Drive-In Tonight currently contains imported theater names and coordinates. The bulk file does not record an original source or review date, so those records are discovery leads rather than confirmation that a theater is operating.</p>
      <section><h2>What is public now</h2><p>State and bulk record pages remain available for navigation but are excluded from search indexing. The site publishes one independently researched visitor guide for Shankweiler&apos;s Drive-In, with a review date, first-party sources, limitations, and same-day verification reminders.</p></section>
      <section><h2>What qualifies for a reviewed guide</h2><ol><li>Identify the current operator and official first-party pages.</li><li>Record the review date and the exact sources checked.</li><li>Separate stable planning information from schedules, prices, ticket inventory, weather decisions, and other changing facts.</li><li>State what the research cannot confirm and avoid first-person experience claims.</li></ol></section>
      <section><h2>Advertising and affiliate policy</h2><p>The site does not currently run advertising or affiliate links. Monetization will only be considered on reviewed pages and must be clearly disclosed. An affiliate relationship would not change the source standard or guarantee that a third-party offer is suitable for a visitor.</p></section>
      <section><h2>Corrections</h2><p>If a record is wrong, closed, duplicated, or attached to the wrong coordinate, send the record URL and a current primary source through the <Link href="/contact">contact page</Link>.</p></section>
    </article>
  );
}

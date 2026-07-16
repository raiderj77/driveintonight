import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';
import { theaterGuides } from '@/content/theater-guides';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Drive-In Tonight - Theater Record and Visitor Guide Rebuild',
  description: 'Browse imported drive-in theater records and a source-backed visitor guide while the directory is rebuilt with current operator evidence.',
  alternates: { canonical: 'https://driveintonight.com' },
};

export default function Home() {
  const states = Array.from(new Map(locations.map((location) => [location.stateSlug, location.state])).entries()).sort((a, b) => a[1].localeCompare(b[1]));
  const withCity = locations.filter((location) => location.city).length;
  const withWebsite = locations.filter((location) => location.website).length;
  const reviewedGuideCount = Object.keys(theaterGuides).length;
  const samples = locations.filter((location) => location.city && location.slug !== 'shankweilers-drive-in').slice(0, 6);

  return (
    <>
      <div className="notice-bar"><strong>Source rebuild:</strong> most directory records have not been checked with a current theater source.</div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebSite', url: 'https://driveintonight.com', name: 'Drive-In Tonight',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Organization', name: 'Drive-In Tonight', url: 'https://driveintonight.com',
        description: 'A drive-in theater record directory undergoing primary-source review',
      }) }} />

      <section className="home-hero">
        <div className="container hero-inner">
          <p className="section-label hero-label">Drive-in theater records</p>
          <h1>FIND A RECORD.<br /><span>VERIFY THE SHOW.</span></h1>
          <p>Browse {locations.length} imported theater names and coordinates. One visitor guide has been checked against current first-party theater pages. For every other record, confirm the venue, operating status, films, tickets, rules, accessibility, and weather policy directly before traveling.</p>
          <div className="button-row">
            <Link href="/pennsylvania/shankweilers-drive-in" className="btn btn-gold">Read the source-backed guide</Link>
            <Link href="/browse-states" className="btn btn-outline">Browse imported records</Link>
          </div>
        </div>
      </section>

      <section aria-label="Directory inventory" className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item"><strong>{locations.length}</strong><span>Imported records</span></div>
          <div className="stat-item"><strong>{withCity}</strong><span>With a city field</span></div>
          <div className="stat-item"><strong>{withWebsite}</strong><span>With an unreviewed website field</span></div>
          <div className="stat-item"><strong>{reviewedGuideCount}</strong><span>Source-backed visitor guide</span></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container featured-guide">
          <div>
            <p className="section-label">Reviewed July 13, 2026</p>
            <h2>Shankweiler&apos;s Drive-In visitor guide</h2>
            <p>This independently researched guide cites the theater&apos;s official website, rules, history, and event calendar. It separates reviewed planning information from details that still need same-day confirmation.</p>
          </div>
          <Link href="/pennsylvania/shankweilers-drive-in" className="btn btn-pink">Plan a visit</Link>
        </div>
      </section>

      <section className="section-pad section-muted">
        <div className="container">
          <p className="section-label">Sample imported records</p>
          <h2 className="section-title">What the bulk directory currently contains</h2>
          <p className="section-copy">These records have a name, region, and coordinates. The current file has no original source or review-date field. A stored website field is not displayed as a current operator link until it is reviewed.</p>
          <div className="card-grid">
            {samples.map((location) => (
              <Link key={`${location.stateSlug}-${location.slug}`} href={`/${location.stateSlug}/${location.slug}`} className="record-card">
                <span className="eyebrow">Imported coordinate record</span>
                <h3>{location.name}</h3>
                <p>{location.city}, {location.state}</p>
                <small>{location.lat.toFixed(3)}, {location.lng.toFixed(3)}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container">
          <p className="section-label hero-label">Before you drive</p>
          <h2>USE THE THEATER&apos;S CURRENT INFORMATION</h2>
          <div className="three-grid">
            <article><h3>Confirm it is operating</h3><p>Check a current first-party venue page or contact the theater. A directory coordinate does not establish that a theater is open.</p></article>
            <article><h3>Check the exact event</h3><p>Verify the date, gate time, film order, ticket availability, admission model, age policies, and weather notices for the screening you plan to attend.</p></article>
            <article><h3>Review venue rules</h3><p>Confirm vehicle-light, hatchback, radio, food, pet, accessibility, parking, and re-entry policies. They differ by operator and event.</p></article>
          </div>
        </div>
      </section>

      <section className="section-pad" id="browse-states">
        <div className="container">
          <p className="section-label">Imported directory</p>
          <h2 className="section-title">Browse {states.length} represented states</h2>
          <p className="section-copy">State and unreviewed record pages remain out of search indexing while their source, operator, and review date are added.</p>
          <div className="state-grid">{states.map(([slug, name]) => <Link key={slug} href={`/${slug}`}>{name}</Link>)}</div>
        </div>
      </section>
    </>
  );
}

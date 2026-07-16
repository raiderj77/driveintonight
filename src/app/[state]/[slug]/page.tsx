import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';
import { getTheaterGuide } from '@/content/theater-guides';
import { TheaterGuideContent } from '@/components/theater-guide';

type Props = { params: Promise<{ state: string; slug: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ state: location.stateSlug, slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, slug } = await params;
  const location = locations.find((item) => item.stateSlug === state && item.slug === slug);
  if (!location) return { title: 'Record not found' };
  const guide = getTheaterGuide(state, slug);
  return {
    title: guide ? `${location.name} Visitor Guide` : `${location.name} Imported Theater Record`,
    description: guide?.seoDescription ?? `Imported coordinate record for ${location.name} in ${location.state}. Current operating status has not been established.`,
    robots: guide
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    alternates: { canonical: `https://driveintonight.com/${state}/${slug}` },
  };
}

export default async function TheaterPage({ params }: Props) {
  const { state, slug } = await params;
  const location = locations.find((item) => item.stateSlug === state && item.slug === slug);
  if (!location) notFound();
  const guide = getTheaterGuide(state, slug);
  const related = locations.filter((item) => item.stateSlug === state && item.slug !== slug).slice(0, 3);

  const articleSchema = guide ? {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `${location.name} visitor guide`,
    description: guide.seoDescription,
    dateModified: guide.reviewedAt,
    author: { '@type': 'Organization', name: 'Drive-In Tonight', url: 'https://driveintonight.com' },
    mainEntityOfPage: `https://driveintonight.com/${state}/${slug}`,
  } : null;
  const faqSchema = guide ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      {articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://driveintonight.com' },
          { '@type': 'ListItem', position: 2, name: location.state, item: `https://driveintonight.com/${state}` },
          { '@type': 'ListItem', position: 3, name: location.name, item: `https://driveintonight.com/${state}/${slug}` },
        ],
      }) }} />

      <section className="route-hero"><div className="container"><Link href={`/${state}`}>Back to {location.state}</Link><h1>{location.name}</h1><p>{guide ? 'Independently researched visitor guide' : 'Imported coordinate record undergoing source review'}</p></div></section>

      <section className="section-pad"><div className="container detail-layout">
        <div className="detail-copy">
          {guide ? (
            <div className="source-warning"><strong>Reviewed guide available:</strong> the detailed guide below records the sources checked on {guide.reviewedAt}. Same-day schedules, ticket inventory, policies, and weather decisions still require confirmation with the theater.</div>
          ) : (
            <div className="source-warning"><strong>Not source-verified:</strong> this bulk record has no recorded original source or review date. It is not evidence that the venue is currently operating.</div>
          )}
          <h2>What this record establishes</h2>
          <p>The imported file stores the name <strong>{location.name}</strong>, the region <strong>{location.state}</strong>{location.city ? <>, the city <strong>{location.city}</strong></> : <>, and no city value</>}, plus the coordinate shown below.</p>
          <h2>What it does not establish</h2>
          <p>Unless stated in the reviewed guide below, this page does not confirm current operating status, ownership, street address, screen or audio setup, films, showtimes, admission, ticket availability, season, hours, concessions, accessibility, vehicle rules, or weather policy.</p>
          <div className="coordinate-box">
            <h2>Imported coordinate</h2>
            <p>{location.lat.toFixed(6)}, {location.lng.toFixed(6)}</p>
            <a className="btn btn-pink" href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`} target="_blank" rel="noopener noreferrer">Open coordinate in Google Maps</a>
          </div>
        </div>
        <aside className="detail-panel">
          <h2>Record status</h2>
          <dl>
            <div><dt>Source-backed guide</dt><dd>{guide ? 'Yes' : 'No'}</dd></div>
            <div><dt>Region label</dt><dd>{location.state}</dd></div>
            <div><dt>City field</dt><dd>{location.city || 'Missing'}</dd></div>
            <div><dt>Stored website field</dt><dd>{location.website ? (guide ? 'Reviewed in guide sources' : 'Present; not reviewed or linked') : 'Missing'}</dd></div>
            <div><dt>Original source field</dt><dd>Missing</dd></div>
            <div><dt>Bulk record review date</dt><dd>Missing</dd></div>
          </dl>
        </aside>
      </div></section>

      {guide && <TheaterGuideContent guide={guide} theaterName={location.name} />}

      {related.length > 0 && <section className="section-pad section-muted"><div className="container"><p className="section-label">More imported records</p><h2 className="section-title">Other {location.state} records</h2><div className="related-grid">{related.map((item) => <Link className="record-card" key={item.slug} href={`/${state}/${item.slug}`}><h3>{item.name}</h3><p>{item.city || 'City field missing'}</p></Link>)}</div></div></section>}
    </>
  );
}

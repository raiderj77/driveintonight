/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const revalidate = 86400;

const stateList = [
  { name: 'Alabama', slug: 'alabama' }, { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' }, { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' }, { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' }, { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' }, { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' }, { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' }, { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' }, { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' }, { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' }, { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' }, { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' }, { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' }, { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' }, { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' }, { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' }, { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' }, { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' }, { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' }, { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' }, { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' }, { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' }, { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' }, { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' }, { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' }, { name: 'Wyoming', slug: 'wyoming' },
];

function getStateName(slug: string) {
  return stateList.find((s) => s.slug === slug)?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export async function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { state, slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  const stateName = getStateName(state);
  return {
    title: `${location?.name ?? 'Drive-In Theater'} — Drive-In in ${stateName}`,
    description: location?.description ?? `Drive-in movie theater in ${stateName}. Classic outdoor cinema experience.`,
    alternates: { canonical: `https://driveintonight.com/${state}/${slug}` },
    openGraph: { title: `${location?.name} | Drive-In Tonight`, description: location?.description, url: `https://driveintonight.com/${state}/${slug}` },
  };
}

const AMENITY_ICONS: Record<string, string> = {
  'Concession stand': '🍿', 'Restrooms': '🚻', 'Parking': '🅿️', 'FM audio': '📻',
  'Double feature': '🎬', 'Playground': '🛝', 'Wheelchair accessible': '♿',
  'Cash only': '💵', 'Card accepted': '💳', 'Alcohol available': '🍺',
  'In-car speakers': '🔊', 'Online tickets': '🎟️',
};

const HERO_KEYWORDS = ['drive+in+theater+night', 'outdoor+cinema', 'retro+movie+theater', 'drive+in+movie+screen', 'neon+sign+theater', 'classic+cinema'];

export default async function DriveInPage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  const stateName = getStateName(state);

  if (!location) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬</p>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--velvet)', letterSpacing: '0.04em' }}>THEATER NOT FOUND</h1>
        <Link href="/" className="btn btn-neon" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>← Back to Home</Link>
      </div>
    );
  }

  const related = locations.filter((l) => l.stateSlug === state && l.slug !== slug).slice(0, 3);
  const heroKeyword = HERO_KEYWORDS[slug.length % HERO_KEYWORDS.length];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://driveintonight.com' },
          { '@type': 'ListItem', position: 2, name: stateName, item: `https://driveintonight.com/${state}` },
          { '@type': 'ListItem', position: 3, name: location.name, item: `https://driveintonight.com/${state}/${slug}` },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'MovieTheater',
        name: location.name, description: location.description,
        geo: { '@type': 'GeoCoordinates', latitude: location.lat, longitude: location.lng },
        address: { '@type': 'PostalAddress', addressLocality: location.city, addressRegion: location.state, addressCountry: 'US' },
        amenityFeature: location.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a, value: true })),
      }) }} />

      {/* Hero */}
      <div style={{ position: 'relative', height: '450px', overflow: 'hidden' }}>
        <img
          src={`https://picsum.photos/seed/${slug}/1600/800`}
          alt={`${location.name} drive-in theater`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          width={1600}
          height={800}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,32,0.95) 0%, rgba(13,8,32,0.35) 55%, transparent 100%)' }} />
        <div className="container" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem' }}>
          <Link href={`/${state}`} style={{ color: 'var(--neon-lt)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            ← {stateName} Drive-Ins
          </Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>{location.name.toUpperCase()}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--silver)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>📍 {location.city ? `${location.city}, ` : ''}{location.state}</span>
            <span className="chip chip-white">🎬 Drive-In Theater</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </div>

      {/* Main content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--velvet)', marginBottom: '1rem', letterSpacing: '0.04em' }}>ABOUT THIS THEATER</h2>
            <p style={{ lineHeight: 1.9, marginBottom: '2.5rem', color: 'var(--text)', fontSize: '1.025rem', fontFamily: 'var(--font-body)' }}>{location.description}</p>

            {location.amenities.length > 0 && (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--velvet)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>AMENITIES</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
                  {location.amenities.map((amenity) => (
                    <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'var(--white)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', boxShadow: '0 1px 6px rgba(26,10,46,0.08)', border: '1px solid rgba(255,45,120,0.12)' }}>
                      <span>{AMENITY_ICONS[amenity] ?? '✓'}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--velvet)', fontFamily: 'var(--font-body)' }}>{amenity}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Map */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--velvet)', marginBottom: '1rem', letterSpacing: '0.04em' }}>LOCATION</h2>
            <div style={{ background: 'linear-gradient(135deg, var(--velvet) 0%, #0d0820 100%)', borderRadius: 'var(--radius)', height: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🗺️</span>
              <p style={{ color: 'var(--neon-lt)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.04em' }}>GPS: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}</p>
              <p style={{ color: 'var(--silver)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>Open in your mapping app for directions</p>
              <a
                href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neon"
                style={{ marginTop: '0.5rem', padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}
              >
                Get Directions →
              </a>
            </div>

            <div style={{ background: 'rgba(255,45,120,0.04)', border: '1px solid rgba(255,45,120,0.15)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem' }}>
              <p style={{ fontSize: '0.82rem', color: '#667', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
                <strong style={{ color: 'var(--velvet)' }}>Disclaimer:</strong> Always verify current showtimes, prices, and operating hours directly with the theater. Drive-in schedules are weather-dependent and can change seasonally.
              </p>
            </div>
          </div>

          {/* Right — sticky panel */}
          <aside>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', border: '1px solid rgba(255,45,120,0.15)', position: 'sticky', top: '90px' }}>
              <div style={{ background: 'var(--velvet)', padding: '1.25rem 1.5rem', borderBottom: '2px solid var(--neon)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-lt)', fontSize: '1.4rem', margin: 0, letterSpacing: '0.06em' }}>THEATER DETAILS</h3>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                {[
                  ['📍 Location', `${location.city ? `${location.city}, ` : ''}${location.state}`],
                  ['🌐 State', location.state],
                  ['🗺️ Latitude', location.lat.toFixed(5)],
                  ['🗺️ Longitude', location.lng.toFixed(5)],
                  ['🎬 Amenities', `${location.amenities.length} listed`],
                  ['📻 Audio', 'FM Radio Broadcast'],
                  ['🏷️ Type', 'Drive-In Theater'],
                ].map(([label, value]) => (
                  <div key={String(label)} style={{ paddingBottom: '0.85rem', marginBottom: '0.85rem', borderBottom: '1px solid rgba(26,10,46,0.07)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.2rem', fontFamily: 'var(--font-body)' }}>{label}</div>
                    <div style={{ fontWeight: 600, color: 'var(--velvet)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>{value}</div>
                  </div>
                ))}
                <Link href={`/${state}`} className="btn btn-neon" style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}>
                  More in {stateName} →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(255,45,120,0.06)', padding: '4rem 1.5rem' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--velvet)', marginBottom: '2rem', letterSpacing: '0.04em' }}>MORE DRIVE-INS IN {stateName.toUpperCase()}</h2>
            <div className="grid-3">
              {related.map((loc, i) => (
                <Link key={loc.slug} href={`/${state}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={`https://picsum.photos/seed/${loc.slug}/800/400`} alt={loc.name} className="card-img" loading="lazy" width={800} height={400} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                      <h3 className="card-title">{loc.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#667', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{loc.description.slice(0, 85)}…</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

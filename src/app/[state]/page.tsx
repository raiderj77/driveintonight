import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';

type Props = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return Array.from(new Set(locations.map((location) => location.stateSlug))).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const first = locations.find((location) => location.stateSlug === state);
  if (!first) return { title: 'State not found' };
  return {
    title: `${first.state} Imported Drive-In Theater Records`,
    description: `Browse imported drive-in theater coordinate records labeled ${first.state}. Current operating status has not been established for bulk records.`,
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
    alternates: { canonical: `https://driveintonight.com/${state}` },
  };
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const records = locations.filter((location) => location.stateSlug === state).sort((a, b) => a.name.localeCompare(b.name));
  if (!records.length) notFound();
  const stateName = records[0].state;
  const cityCount = records.filter((record) => record.city).length;

  return (
    <>
      <section className="route-hero"><div className="container"><Link href="/browse-states">Back to all states</Link><h1>{stateName}</h1><p>{records.length} imported coordinate records; {cityCount} include a city field.</p></div></section>
      <section className="section-pad"><div className="container">
        <div className="source-warning"><strong>Unreviewed directory:</strong> these records do not have a recorded original source or review date. Confirm the venue and all time-sensitive details with a current first-party source before traveling.</div>
        <div className="card-grid">
          {records.map((record) => (
            <Link className="record-card" key={record.slug} href={`/${record.stateSlug}/${record.slug}`}>
              <span className="eyebrow">Imported record</span>
              <h3>{record.name}</h3>
              <p>{record.city ? `${record.city}, ${record.state}` : `${record.state}; city field missing`}</p>
              <small>{record.lat.toFixed(3)}, {record.lng.toFixed(3)}</small>
            </Link>
          ))}
        </div>
      </div></section>
    </>
  );
}

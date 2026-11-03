import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';
import { locationRegionLabel } from '@/lib/regions';

export const metadata: Metadata = {
  title: 'Browse Imported Theater Records by State or Province',
  description: 'Browse represented state and province labels in the Drive-In Tonight imported record file.',
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: 'https://driveintonight.com/browse-states' },
};

export default function BrowseStates() {
  const states = Array.from(new Map(locations.map((location) => [location.stateSlug, locationRegionLabel(location)])).entries())
    .map(([slug, name]) => ({ slug, name, count: locations.filter((location) => location.stateSlug === slug).length }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="content-page">
      <p className="section-label">Imported directory</p>
      <h1>Browse theater records by state or province</h1>
      <p className="lead">The file contains {locations.length} records across {states.length} state and province labels. These routes are excluded from search indexing while each venue&apos;s operator, source, current status, and review date are checked.</p>
      <div className="source-warning" style={{ marginTop: '2rem' }}><strong>Important:</strong> appearing here does not establish that a theater is currently operating or open on a particular date.</div>
      <div className="state-grid">
        {states.map((state) => <Link key={state.slug} href={`/${state.slug}`}>{state.name} ({state.count})</Link>)}
      </div>
    </div>
  );
}

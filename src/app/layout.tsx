import type { Metadata } from 'next';
import Script from 'next/script';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: '400' });
const barlow = Barlow({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  title: { template: '%s | Drive-In Tonight', default: 'Drive-In Tonight — Find Drive-In Theaters Across America' },
  description: 'Find drive-in movie theaters near you. Classic and modern drive-ins across all 50 states with showtimes, amenities, and directions.',
  keywords: 'drive-in theater, drive-in movie, outdoor movie, drive-in near me, classic drive-in',
  metadataBase: new URL('https://driveintonight.com'),
  alternates: { canonical: 'https://driveintonight.com' },
  robots: 'index, follow, max-snippet:-1',
  verification: { google: '7DeasPCFCDL-ColW4v6ONqKH8jIPNRNoVLxXRmsgpUg' },
};

const toolSites = [
  { name: 'Fiber Tools', href: 'https://fibertools.app' }, { name: 'Mind Check Tools', href: 'https://mindchecktools.com' },
  { name: 'Flip My Case', href: 'https://flipmycase.com' }, { name: 'Creator Revenue Calculator', href: 'https://creatorrevenuecalculator.com' },
  { name: 'Contract Extract', href: 'https://contractextract.com' }, { name: 'Medical Bill Reader', href: 'https://medicalbillreader.com' },
  { name: 'Tax Break Tools', href: 'https://taxbreaktools.com' }, { name: '524 Tracker', href: 'https://524tracker.com' },
];
const directorySites = [
  { name: 'Public Boat Ramps', href: 'https://publicboatramps.com' }, { name: 'Find Swim Spots', href: 'https://findswimspots.com' },
  { name: 'Craft Distillery Finder', href: 'https://craftdistilleryfinder.com' }, { name: 'All Skate Parks', href: 'https://allskateparks.com' },
  { name: 'Rockhounding Finder', href: 'https://rockhoundingfinder.com' }, { name: 'Nearby Escape Rooms', href: 'https://nearbyescaperooms.com' },
  { name: 'All Skating Rinks', href: 'https://allskatingrinks.com' }, { name: 'Soak USA', href: 'https://soakusa.net' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlow.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932" strategy="afterInteractive" />
      </head>
      <body>
        <header style={{ background: 'var(--velvet)', borderBottom: '3px solid var(--neon)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 24px rgba(255,45,120,0.2)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🎬</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--neon-lt)', letterSpacing: '0.08em' }}>DRIVE-IN TONIGHT</span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'var(--neon-pale)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Home</a>
              <a href="/browse-states" style={{ color: 'var(--neon-pale)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Browse</a>
              <a href="/about" style={{ color: 'var(--neon-pale)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>About</a>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'var(--velvet)', borderTop: '3px solid var(--velvet-mid)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-lt)', fontWeight: 400, fontSize: '1.4rem', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>🎬 DRIVE-IN TONIGHT</p>
                <p style={{ color: '#7a6a90', fontSize: '0.875rem', lineHeight: 1.7 }}>The complete directory of drive-in movie theaters across the United States. Classic nights under the stars.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--neon)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>Directory Sites</h4>
                <ul style={{ listStyle: 'none' }}>
                  {directorySites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: '#7a6a90', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--neon)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>Tools</h4>
                <ul style={{ listStyle: 'none' }}>
                  {toolSites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: '#7a6a90', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: '#4a3a6a', fontSize: '0.85rem' }}>© 2026 Drive-In Tonight. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: '#4a3a6a', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

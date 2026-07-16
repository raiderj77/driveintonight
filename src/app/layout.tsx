import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';

const display = Bebas_Neue({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: '400' });
const body = Barlow({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://driveintonight.com'),
  title: { template: '%s | Drive-In Tonight', default: 'Drive-In Tonight - Theater Record Rebuild' },
  description: 'Imported drive-in theater records undergoing current primary-source review.',
  verification: { google: '7DeasPCFCDL-ColW4v6ONqKH8jIPNRNoVLxXRmsgpUg' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const networkSites = [
  ['Fiber Tools', 'https://fibertools.app'], ['Mind Check Tools', 'https://mindchecktools.com'],
  ['Creator Revenue Calculator', 'https://creatorrevenuecalculator.com'], ['Medical Bill Reader', 'https://medicalbillreader.com'],
  ['Public Boat Ramps', 'https://publicboatramps.com'], ['Find Swim Spots', 'https://findswimspots.com'],
  ['Craft Distillery Finder', 'https://craftdistilleryfinder.com'], ['Nearby Escape Rooms', 'https://nearbyescaperooms.com'],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head><meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo"><span aria-hidden>DIT</span><strong>Drive-In Tonight</strong></a>
            <nav aria-label="Primary navigation">
              <a href="/">Home</a><a href="/browse-states">Browse States</a><a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <div><h2>Drive-In Tonight</h2><p>Imported theater records undergoing source review, plus independently researched visitor guides.</p></div>
            <div><h3>More from our network</h3><ul>{networkSites.map(([name, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{name}</a></li>)}</ul></div>
          </div>
          <div className="container footer-bottom"><span>© 2026 Drive-In Tonight</span><nav aria-label="Legal and contact"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></nav></div>
        </footer>
      </body>
    </html>
  );
}

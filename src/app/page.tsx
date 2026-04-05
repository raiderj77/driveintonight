/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Drive-In Tonight — Find Drive-In Movie Theaters Near You',
  description: 'Discover drive-in movie theaters across the USA. Classic outdoor cinema experiences with directions, amenities, and showtime info.',
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const IMG_KEYWORDS = ['drive+in+theater','outdoor+cinema','retro+cinema','movie+night+outdoor','drive+in+movie+vintage','neon+sign+cinema'];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://driveintonight.com',
        name:'Drive-In Tonight',
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://driveintonight.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />

      {/* Hero — star field with neon glow */}
      <section style={{ position: 'relative', background: 'linear-gradient(180deg, var(--velvet) 0%, #0d0820 60%, #1a0a2e 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        {/* Stars */}
        <div aria-hidden className="star-field" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        {/* Neon glow orbs */}
        <div aria-hidden style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,45,120,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '20%', right: '8%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(61,34,104,0.4) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up marquee-text" style={{ display: 'inline-block', marginBottom: '1rem', background: 'rgba(245,200,66,0.08)', padding: '0.4rem 1.2rem', borderRadius: '4px', border: '1px solid rgba(245,200,66,0.25)', fontSize: '0.9rem' }}>
            🎬 NOW PLAYING — DRIVE-IN DIRECTORY
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--white)', marginBottom: '0.5rem', lineHeight: 1, letterSpacing: '0.04em' }}>
            FIND YOUR<br /><span style={{ color: 'var(--neon)', textShadow: '0 0 30px rgba(255,45,120,0.6)' }}>DRIVE-IN</span><br />TONIGHT
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: 'var(--silver)', marginBottom: '2.75rem', maxWidth: '460px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            Classic outdoor cinema, double features &amp; retro vibes — {locations.length}+ drive-in theaters across America.
          </p>
          <form method="GET" action="/search" className="anim-fade-up anim-delay-3">
            <div className="search-wrap">
              <input type="text" name="q" placeholder="Search by state, city, or theater name…" className="search-input" />
              <button type="submit" className="search-btn">Find Theaters</button>
            </div>
          </form>
        </div>
        {/* Screen silhouette */}
        <div aria-hidden style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', width: '140px', height: '90px', border: '3px solid rgba(255,45,120,0.15)', borderRadius: '4px', pointerEvents: 'none' }} />
        <svg aria-hidden viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,40 C360,60 1080,20 1440,40 L1440,60 L0,60 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(255,45,120,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Drive-Ins Listed' },
            { n:`${statesWithData}`, l:'States Covered' },
            { n:'Classic', l:'Outdoor Cinema' },
            { n:'Retro', l:'& Modern' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">🎬 Now Showing</p>
          <h2 className="section-title">Featured Drive-Ins</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>America's most beloved drive-in theaters — where movies meet the open sky.</p>
          <div className="grid-3">
            {featured.map((loc, i) => (
              <Link key={loc.slug} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={`https://picsum.photos/seed/${loc.slug}/800/500`} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{loc.description.slice(0,110)}…</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {loc.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'var(--velvet)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--neon)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>Simple Process</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', color: 'var(--white)', letterSpacing: '0.04em' }}>PLAN YOUR MOVIE NIGHT</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'FIND A THEATER', desc:'Browse by state to find drive-ins near you. Check amenities, screen count, and directions.' },
              { icon:'🚗', title:'PACK THE CAR', desc:'Grab blankets, snacks, and a portable radio. Double features are the best features.' },
              { icon:'🎬', title:'ENJOY THE SHOW', desc:'Tune your FM radio, watch the stars, and experience cinema the way it was meant to be.' },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', border: '1px solid rgba(255,45,120,0.15)' }}>
                <div className="step-icon">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-lt)', fontSize: '1.5rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{title}</h3>
                <p style={{ color: 'var(--silver)', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--velvet)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>{"America's Drive-In Theater Heritage"}</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>Drive-in theaters are a uniquely American invention — born in the 1930s and reaching peak popularity in the 1950s and 60s, when thousands dotted the landscape from coast to coast. Today, fewer than 300 remain, making each one a precious piece of living history.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>What makes the drive-in experience irreplaceable is its atmosphere: the massive glowing screen against a darkening sky, the crackle of an FM signal, the smell of popcorn drifting between cars, and a community of strangers sharing the same story in the open air.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--velvet)', marginTop: '2rem', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>Tips for Your Drive-In Visit</h3>
          <p style={{ lineHeight: 1.85, fontFamily: 'var(--font-body)' }}>Arrive early to get the best spot. Bring a portable FM radio for better sound than your car stereo. Many drive-ins show double features, so pack enough food and blankets for the long haul. Always check the theater's website for current films and any reservation requirements.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(255,45,120,0.06)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">FAQ</h2>
          </div>
          {[
            { q:'How do I hear the audio at a drive-in?', a:'Most modern drive-ins broadcast audio on a specific FM radio frequency. You tune your car radio to that channel. Some older theaters use in-car speaker posts, but FM is most common.' },
            { q:'Do drive-ins show current movies?', a:'Yes! Many drive-ins show first-run films, often as double features. This makes them an incredible value compared to traditional cinemas.' },
            { q:'What should I bring to a drive-in?', a:'Bring a portable FM radio (in case your car battery drains), blankets, lawn chairs, snacks, bug spray for summer visits, and cash for the concession stand.' },
            { q:'Are drive-ins family friendly?', a:'Absolutely. Drive-ins are a family tradition. Children often sleep in the back seat during the second feature. Check the movie ratings before attending with young kids.' },
            { q:'Do I need a reservation?', a:'Many drive-ins now sell tickets online in advance, especially on weekends. Always check the theater website as popular shows can sell out.' },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse Drive-Ins by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--velvet)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '0.04em' }}>LIGHTS. CAMERA. DRIVE.</h2>
          <p style={{ color: 'var(--silver)', marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{locations.length}+ drive-in theaters across {statesWithData} states. Find yours tonight.</p>
          <Link href="/browse-states" className="btn btn-neon" style={{ padding: '0.9rem 2.5rem', borderRadius: '50px' }}>Explore Theaters →</Link>
        </div>
      </section>
    </>
  );
}

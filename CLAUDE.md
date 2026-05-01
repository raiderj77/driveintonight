# Drive-In Tonight — CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: Drive-In Tonight
- **Domain**: driveintonight.com
- **Purpose**: Location finder for drive-in movie theaters across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard

## Tech Stack

- **Framework**: Next.js | **Deployment**: Vercel | **Language**: TypeScript | **Styling**: Tailwind CSS | **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt**: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`

## 2. SEO

- SSR/SSG required
- Each drive-in page: name, address, current movie schedule (if available), screen count, AM radio frequency for sound, seasonal hours
- Schedule data is time-sensitive — include lastmod dates and "verify before visiting" disclaimers

## 3. Core Web Vitals

- **LCP** ≤ 2.5s | **INP** ≤ 200ms | **CLS** ≤ 0.1

## 4. E-E-A-T

- Attribution: "Built by an experienced web developer" — no personal name
- "Always verify current showtimes directly with the theater" disclaimer on every location page

## 5. Structured Data

- Organization, WebSite, LocalBusiness, MovieTheater (sub-type of LocalBusiness), BreadcrumbList
- Include openingHours, specialOpeningHoursSpecification for seasonal closures

## 6. Mobile-First

- Touch-friendly, responsive, body text 16px+

## 7. Bing Optimization

- meta keywords, SSR mandatory, IndexNow on deploy

## 8. GEO / AI

- `/llms.txt` at root
- Standard AI crawler rules

## 9. Privacy & Consent

- `/privacy` and `/terms` required

## 10. Accessibility (WCAG 2.1 AA)

- Standard WCAG 2.1 AA requirements

## 11. Security Headers

Standard Empire security headers

## 12. Sitemaps & Metadata

- Sitemap via `app/sitemap.ts`

## Cross-Site Links

Footer: all sister sites (excluding self)

## Deployment

Vercel | main | `npm run build` | Env: INDEXNOW_API_KEY

## Warnings

Standard Empire warnings + Never present schedule data as guaranteed current — always include "verify directly with theater" disclaimer

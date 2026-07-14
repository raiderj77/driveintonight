import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the pilot guide is substantial, transparent, and source-backed', () => {
  const source = read('src/content/theater-guides.ts');
  const words = source.match(/\b[\w’'-]+\b/g) ?? [];
  const officialSources = source.match(/url: 'https:\/\/www\.shankweilers\.com\//g) ?? [];

  assert.ok(words.length > 900, `expected substantial guide content, found ${words.length} tokens`);
  assert.equal(officialSources.length, 4);
  assert.match(source, /reviewedAt: '2026-07-13'/);
  assert.match(source, /independent desk-researched visitor guide, not a first-person review/i);
  assert.match(source, /The theater did not pay for or approve this guide/i);
  assert.doesNotMatch(source, /TODO|lorem ipsum|placeholder/i);
});
test('only a curated guide can override the directory noindex rule', () => {
  const page = read('src/app/[state]/[slug]/page.tsx');

  assert.match(page, /const guide = getTheaterGuide\(state, slug\)/);
  assert.match(page, /robots: guide[\s\S]*?index: true[\s\S]*?: { index: false/);
  assert.match(page, /FAQPage/);
  assert.match(page, /TheaterGuideContent/);
});

test('the guide component displays FAQs, sources, limitations, and the review date', () => {
  const component = read('src/components/theater-guide.tsx');

  assert.match(component, /<time dateTime={guide\.reviewedAt}>/);
  assert.match(component, /guide\.faqs\.map/);
  assert.match(component, /guide\.sources\.map/);
  assert.match(component, /guide\.limitations/);
  assert.match(component, /rel="noopener noreferrer"/);
});

test('the sitemap derives guide URLs from the curated guide registry', () => {
  const sitemap = read('src/app/sitemap.ts');

  assert.match(sitemap, /import { theaterGuides }/);
  assert.match(sitemap, /Object\.keys\(theaterGuides\)/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map/);
});

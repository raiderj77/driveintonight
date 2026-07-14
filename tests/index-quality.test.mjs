import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the homepage and trust pages may be indexed', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /robots:\s*{[\s\S]*?index:\s*true,[\s\S]*?googleBot:\s*{\s*index:\s*true/);
});

test('state pages and unverified listings retain a noindex,follow fallback', () => {
  const statePage = read('src/app/[state]/page.tsx');
  const listingPage = read('src/app/[state]/[slug]/page.tsx');

  assert.match(statePage, /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
  assert.match(listingPage, /robots:\s*guide[\s\S]*?:\s*{\s*index:\s*false,\s*follow:\s*true/);
  assert.match(listingPage, /googleBot:\s*{\s*index:\s*false,\s*follow:\s*true/);
});

test('directory-only browse hubs remain noindex when present', () => {
  for (const path of ['src/app/browse/page.tsx', 'src/app/browse-states/page.tsx']) {
    const url = new URL(`../${path}`, import.meta.url);
    if (existsSync(url)) {
      assert.match(read(path), /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    }
  }
});

test('the sitemap contains only an explicit allowlist', () => {
  const sitemap = read('src/app/sitemap.ts');
  assert.match(sitemap, /INDEXABLE_PATHS/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map|statePages|locationPages|parkPages/);
  assert.match(sitemap, /'\/about'/);
  assert.match(sitemap, /'\/contact'/);
});

test('Googlebot can crawl pages to observe route-level noindex rules', () => {
  const robots = read('public/robots.txt');
  assert.match(robots, /User-agent:\s*Googlebot[\s\S]*?Allow:\s*\//i);
});

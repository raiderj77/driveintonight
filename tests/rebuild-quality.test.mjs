import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const locations = JSON.parse(read('src/data/locations.json'));

test('published inventory numbers match the imported file', () => {
  assert.equal(locations.length, 288);
  assert.equal(locations.filter((location) => location.city).length, 193);
  assert.equal(locations.filter((location) => location.website).length, 221);
  assert.equal(locations.filter((location) => Object.hasOwn(location, 'source')).length, 0);
  assert.equal(locations.filter((location) => Object.hasOwn(location, 'reviewedAt')).length, 0);
});

test('the browse route exists and bulk pages state the evidence limits', () => {
  assert.equal(existsSync(new URL('../src/app/browse-states/page.tsx', import.meta.url)), true);
  assert.match(read('src/app/[state]/page.tsx'), /do not have a recorded original source or review date/i);
  assert.match(read('src/app/[state]/[slug]/page.tsx'), /not source-verified/i);
});

test('unreviewed website fields are not published as operator links or schema', () => {
  const detail = read('src/app/[state]/[slug]/page.tsx');
  const home = read('src/app/page.tsx');
  assert.doesNotMatch(detail, /href=\{location\.website\}|sameAs:\s*location\.website/);
  assert.doesNotMatch(`${home}\n${detail}`, /MovieTheater|LocalBusiness|mapbox/i);
});

test('record lookup requires both the state and slug', () => {
  const detail = read('src/app/[state]/[slug]/page.tsx');
  assert.match(detail, /item\.stateSlug === state && item\.slug === slug/);
});

import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const locations = JSON.parse(read('src/data/locations.json'));

test('published inventory numbers match the imported file', () => {
  assert.equal(locations.length, 287);
  assert.equal(locations.filter((location) => location.city).length, 195);
  assert.equal(locations.filter((location) => location.website).length, 220);
  assert.equal(locations.filter((location) => Object.hasOwn(location, 'source')).length, 0);
  assert.equal(locations.filter((location) => Object.hasOwn(location, 'reviewedAt')).length, 0);
});

test('coordinate-audited records use the state containing their coordinates', () => {
  const bySlug = new Map(locations.map((location) => [location.slug, location]));
  const expected = new Map([
    ['delsea-drive-in', ['New Jersey', 'new-jersey']],
    ['warwick-drive-in-theatre', ['New York', 'new-york']],
    ['rustic-drive-in', ['Rhode Island', 'rhode-island']],
    ['warners-drive-in', ['West Virginia', 'west-virginia']],
    ['summer-drive-in-4', ['Tennessee', 'tennessee']],
    ['blue-grass-drive-in', ['Iowa', 'iowa']],
    ['silver-bow-twin-drive-in', ['Montana', 'montana']],
    ['northfield-drive-in', ['New Hampshire', 'new-hampshire']],
    ['rock-n-roll-drive-in', ['Missouri', 'missouri']],
    ['pharoahplex-drive-in', ['Montana', 'montana']],
    ['sage-crest-drive-in', ['Nevada', 'nevada']],
  ]);

  for (const [slug, [state, stateSlug]] of expected) {
    assert.equal(bySlug.get(slug)?.state, state, slug);
    assert.equal(bySlug.get(slug)?.stateSlug, stateSlug, slug);
    assert.match(bySlug.get(slug)?.description ?? '', new RegExp(state), slug);
  }
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

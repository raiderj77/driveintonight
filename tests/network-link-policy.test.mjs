import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('the sitewide footer does not link to MindCheck Tools', async () => {
  const layout = await readFile(new URL('../src/app/layout.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(layout, /mindchecktools\.com|Mind Check Tools/i);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseProgressBackup,
  cleanState,
  filterChapters,
  tokenCost,
  chainReliability,
  normalize,
} from '../assets/core.js';
const ids = [1, 2, 3];
test('persisted state discards malformed, duplicate and unknown chapter IDs', () => {
  assert.deepEqual(
    cleanState(
      {
        version: 2,
        completed: [1, 1, '2', 999, null],
        bookmarks: [2, 2],
        last: 999,
      },
      ids,
    ),
    { version: 2, completed: [1], bookmarks: [2], last: null },
  );
  for (const value of [
    null,
    [],
    42,
    { version: 1, completed: [1] },
    { version: 2, completed: 'all' },
  ])
    assert.deepEqual(cleanState(value, ids).completed, []);
});
test('search handles accents, body terms and combined filters', () => {
  const chapters = [
    {
      id: 1,
      track: 0,
      title: 'Überblick',
      search: 'Überblick: Quellen prüfen',
    },
    { id: 2, track: 0, title: 'Agent', search: 'Tool Rechte' },
    { id: 3, track: 1, title: 'Kosten', search: 'Budget Quellen' },
  ];
  const state = { completed: [1], bookmarks: [1, 3] };
  assert.equal(normalize('GRÖSSE'), 'grosse');
  assert.deepEqual(
    filterChapters(chapters, { query: 'uberblick quellen' }, state, [
      [1, 2],
    ]).map((c) => c.id),
    [1],
  );
  assert.deepEqual(
    filterChapters(chapters, { bookmarked: true, unread: true }, state, [
      [1, 2],
    ]).map((c) => c.id),
    [3],
  );
  assert.deepEqual(
    filterChapters(chapters, { path: '0', query: 'quellen' }, state, [
      [1, 2],
    ]).map((c) => c.id),
    [1],
  );
  assert.deepEqual(
    filterChapters(chapters, { query: '<script>' }, state, [[1, 2]]),
    [],
  );
});
test('cost calculator uses prices per million and rejects invalid inputs', () => {
  assert.equal(tokenCost(2000, 500, 2, 8), 0.008);
  assert.equal(tokenCost(0, 0, 2, 8), 0);
  for (const values of [
    [-1, 0, 2, 8],
    [NaN, 3, 2, 8],
    [3.5, 0, 2, 8],
    [1, 0, Infinity, 8],
    ['2000', 0, 2, 8],
  ])
    assert.equal(tokenCost(...values), null);
});
test('reliability calculator handles limits and explicitly assumes independent steps', () => {
  assert.ok(Math.abs(chainReliability(95, 10) - 59.87369392383787) < 1e-10);
  assert.equal(chainReliability(100, 1000), 100);
  assert.equal(chainReliability(0, 10), 0);
  for (const [p, n] of [
    [101, 10],
    [-1, 10],
    [95, 0],
    [95, 1.5],
    [NaN, 3],
  ])
    assert.equal(chainReliability(p, n), null);
});

test('progress backups validate the complete envelope before accepting state', () => {
  const progress = { version: 2, completed: [1, 1], bookmarks: [2], last: 1 };
  const encode = (p) =>
    JSON.stringify({ app: 'ai-for-everyone', version: 1, progress: p });
  assert.deepEqual(parseProgressBackup(encode(progress), ids), {
    ...progress,
    completed: [1],
  });
  for (const bad of [
    '{}',
    'null',
    'not json',
    encode({ ...progress, completed: [999] }),
    encode({ ...progress, bookmarks: ['2'] }),
    encode({ ...progress, last: 9 }),
  ])
    assert.throws(() => parseProgressBackup(bad, ids));
});

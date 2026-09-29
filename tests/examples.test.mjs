import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
function run(file, args = []) {
  const result = spawnSync('python', ['examples/' + file, ...args], {
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}
test('retrieval demo handles German, English and missing evidence', () => {
  assert.match(
    run('retrieval.py', ['--lang', 'de', '--query', 'Rückgabe']),
    /rueckgabe/,
  );
  assert.match(
    run('retrieval.py', ['--lang', 'en', '--query', 'returns']),
    /returns/,
  );
  assert.match(run('retrieval.py', ['--query', 'xyz123']), /No match/);
});
test('durable demo produces one database effect after a retry', () => {
  const output = run('durable_job.py');
  assert.match(output, /First attempt: True/);
  assert.match(output, /Retry: False/);
  assert.match(output, /Stored effects: 1/);
});
test('evaluation demo exposes subgroup differences hidden by aggregation', () => {
  const output = run('evaluate.py');
  assert.match(output, /all: 6\/8 = 75%/);
  assert.match(output, /de: 2\/4 = 50%/);
  assert.match(output, /en: 4\/4 = 100%/);
});

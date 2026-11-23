import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { version } from 'pptxkit';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

test('exports the package version', () => {
  assert.equal(version, pkg.version);
});

test('the packed package holds only the licence, readme, manifest and src', () => {
  const [{ files }] = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json'], { encoding: 'utf8' }));
  for (const { path } of files) {
    assert.match(path, /^(LICENSE|README\.md|package\.json|src\/.+\.js)$/);
  }
});

# pptxkit

Read, build and change native PowerPoint files from Node. Plain JavaScript, no build step, no Python.

Work in progress: the package does nothing useful yet. The plan lives in [pgoell/pgoell-claude-tools#399](https://github.com/pgoell/pgoell-claude-tools/issues/399).

## Install

From npm (from the first release on):

```sh
npm install pptxkit
```

From GitHub, at a tag or a branch:

```sh
npm install github:pgoell/pptxkit#v0.1.0
```

Both give the same files. Node 22 or later.

## Develop

```sh
npm test
```

## Release

Set `version` in `package.json`, merge, then push a matching tag such as `v0.1.0`. The Publish workflow sends the tag to npm once the repo has an `NPM_TOKEN` secret; without it the workflow skips the publish and the tag installs from GitHub only.

## Licence

MIT, see [LICENSE](LICENSE).

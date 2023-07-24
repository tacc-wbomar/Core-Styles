# Contributing

## Linting and Formatting

Not standardized. Read [(internal) Formatting & Linting](https://confluence.tacc.utexas.edu/x/HoBGCw).

## Best Practices

- [Sign your commits.](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)
- [Learn Markdown.](https://bitbucket.org/tutorials/markdowndemo)

## Development Workflow

We use a modifed version of [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).

- "feature branches" have a specific prefix:
  - `feat/` for features and updates
  - `fix/` for bugfixes and hotfixes
  - `refactor/` for large internal changes
  - `style/` for code style changes (white-space, formatting, etc.)
  - `chore/` for no-op changes
  - `docs/` for documentation
  - `perf/` for performance improvements
  - `test/` for test case updates
  - or other "types" from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- "develop" branch is usually `main`,\
    <sup>but can exist as a long-lived multi-feature branch prefixed with `dev/`</sup>
- "release branches" (as needed) are prefixed with `release/`
- "hotfix branches" are prefixed `fix/`
- "master branch" is always `main`

## Release Workflow

Only appointed team members may release versions.

1. (one time) Login to npm via:\
    `npm login`
1. Create new branch for version bump.
1. Update `CHANGELOG.md`.
1. Update version via:\
   `npm version N.N.N`
1. Commit, push, PR, review.\
    <sup>Do **not** merge yet.</sup>
1. Publish to NPM via:\
    `npm publish --access public`\
    <sup>Project build will automatically occur before publish.</sup>
1. Commit NPM build output.
1. Merge pull request.
1. Create release and tag on GitHub.
1. Replace Github's unannotated tag with an annotated one:
   - `git pull`
   - `git checkout vN.N.N`
   - `git tag -d vN.N.N`
   - `git tag -a vN.N.N -m "____: vN.N.N"`
   - `git push --tags --force`


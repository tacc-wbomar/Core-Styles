# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2022-04-06: Initial Release

### Added

- feat(version): do not depend on git describe (398bf79)
- feat(version): … use postcss-banner plugin (58858f9, eeafce0)

### Changed

- Quick: Readme tweaks (5d2d82c, f627bbd, 93dd9cd)
- chore(cleanup): drop yarn, node 16 (92664db)
- refactor(minor): simpler npm scripts (d7b36ba, 214aa80)
- chore: do not support verbose option (9c8018a)
- chore(rename): tacc-wbomar → TACC (95d82d9)

### Fixed

- Quick: Stable Package.json Calls … (#3)
- Fix: Require NPM7+ … (37466e2)
- chore(version): del & ignore runtime _version.css (dab87e7)
- fix(refactor): config script (1d6dacd)

## [0.2.0] - 2022-03-14: Changelog, Easy Git Ref, Version CLI, Readme Tweak

### Added

- Quick: Add Changelog (449a045, e49b7c6)
- Version CLI (#2) — Split build CLI into two commands `build` and `version`.

### Changed

- Quick: Readme intro tweak (b67fd0e)
- Version CLI (#2) — require `build` command to build (`core-styles build ...`).

### Fixed

- Fix/Polish: [...] Git Ref/Rev/Version [Script] (85347a1, …, e1c85ae, 9ca6af0)

## [0.1.0] - 2022-03-11

Initial working code. (This code may not work on all environments.)

[unreleased]: https://github.com/TACC/Core-Styles/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/TACC/Core-Styles/releases/tag/v1.0.0
[0.2.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.2.0
[0.1.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.1.0

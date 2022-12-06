# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased][unreleased]

## [1.0.0] - 2022-12-05: Polish, Table Objects, Form Patterns, Dist Files, Fonts

### Added

* **feat!: ease use of core-styles (#81)**
* feat!: provide CDN-style deliverable stylesheets (#78)
* feat(components): form patterns (c-form, django.cms.forms) (#77, #79, #80)
* feat(components): c-form updates & base html-elements (#79)
* feat(dist): commit dist for clients relying on it (#70)
* fix(o-table-wrap): …scroll.extra → …scroll-extra (#69)
* feat(objects): o-table, o-fixed-header-table, o-flex-item-table-wrap (#68)

### Changed

* **feat(settings): lighter `…primary--light` color (#76)**

### Removed

* **feat!: provide CDN-style deliverable stylesheets (#78)**
  * removed settings load from ALL _import source files (#78)
  * removed icon(.…).css
  * removed font settings from header

### Fixed

* fix(table): border colors (#75)
* fix(fonts)!: support font load on demo (#74)
* **fix(demo)!: font path change in dist (#73)**
* fix(fonts): fp-1891 add regular italic, also add black (#71, #72)

## [0.11.0] - 2022-11-14: Table Pattern, Many Demo Fixes, Demo Build Dir Clarity

### Added

* feat(elements): fp-1878 table pattern (#64) (b3bc511)

### Changed

* docs: nest demo assets in `/assets` directory (#65)

### Fixed

* fix(bootstrap): broken paths in static build (47047a4)
* fix: pattern demo repair suite (#66)

## [0.10.0] - 2022-11-12: New Docs, Patterns, Features; Major Dependency Bumps

### Added

* docs(components): tup-354 bootstrap.modal; assets, loremipsum (#51)
* docs(components): tup-356 bootstrap.form (#52)
* docs: tup-356 bootstrap preview & easy subdir var (#53)
* docs(components): tup-356 bootstrap.container (#54)
* feat: tup-355 links (redo #57) (#58)
* feat(elements): fp-1828 move apcd styles to core (#56) (#62)
* feat(c-button): do not show <a> tag button for `--as-link` (#59)
* feat: x-link, used by c-button--as-link & links (#60)
* feat: npm watch synced with live-refresh demo (#61)

### Changed

* feat: tup-274 peerDeps not deps (#46)
* chore: tup-293 dependency updates (#50)
* fix(trumps, and unused): complex subdir var made easy (#55)

### Fixed

* fix(c-button): fp-1791 auto width by default (#49)
* fix: fp-1828 s-affixed-input-wrapper fallback (#62)

## [0.9.0] - 2022-10-26: Fonts, C-Message, Generic CMS Form, A11y Color Tweak

### Added

- feat: support (and add) fonts (#41)
- feat: add c-message component (#41)
- feat: add and edit cms form styles (#41)
- feat!: rename and edit cms element styles (#41)
- feat: add postcss-replace (to manage font paths) (#41)

### Fixed

- fix: accessible error colors (#41)

## [0.8.7] - 2022-09-16: Fix Bad Import Path, NPM Run Command Doc Tweaks

### Changed

- docs: npm run build (no :css), run start (note) (75e4046)

### Fixed

- fix: bad import path for x-mailto-text-replace (adf85ff)

## [0.8.6] - 2022-09-14: Document Styles, Mailto Text Replacement, Misc. Fixes

### Added

- Task/fp 1801 guides breadcrumbs headings (#45)
- feat(trumps): u-mailto-text-replace (for ecep 214) (#44)

### Fixed

- fix(o-float-content): missing setting import
- fix(demo): subdir now explicitely loads from self

## [0.8.2] - 2022-08-21: Missing 0.8.0 Pattern, No Executable Stylesheet

### Fixed

- Task/ecepweb 215 o float content (#42) [see [0.8.0] "o-float-content"]
- fix(elements): html-elements was executable

## [0.8.0] - 2022-08-16: Pattern Demo, New Patterns, Relative Paths, Retire CLI

### Added

- feat: updates from tup-ui (except paths)
  - bootstrap form & bootstrap modal
  - c-button default width
  - cortal icons
  - o-fixed-header-table
  - ~~o-float-content~~ [see [0.8.2] "Task/ecepweb 215 o float content"]
  - default values for font family variable
- feat: use relative paths like tup-ui (#36) (#38)
- feat: fp-1499 ui pattern demo (#34)

### Deprecated

- feat: retire internal usage of cli (#39)

## [0.7.1] - 2022-07-23: Fix v0.5.2 → v0.7.0 Migration

### Changed

- noop(core-styles): comments & new lines
- chore(core-styles): [class*=c-button] → .c-button
- docs: github pr template tweak

### Fixed

- fix changelog
- docs(readme): release steps now not for tup-ui

### Deleted

- chore: delete tup-ui config project.json
- chore: delete tup-ui config .eslintrc.json

## [0.7.0] - 2022-07-15: New Global Color, Fix Section Banner on Safari

### Change

- Core styles/v0.7.0 [TACC/tup-ui#30](https://github.com/TACC/tup-ui/pull/30)

## [0.7.0-beta] - 2022-07-13: New Global Color, Fix Section Banner on Safari

### Added

- feat(core-styles): tup-308, new global color [TACC/tup-ui#25](https://github.com/TACC/tup-ui/pull/25)

### Change

- feat(core-styles): add `.npmrc` with `git-tag-version=false`
- feat(core-styles): add git tagging to publish steps in readme

### Fixed

- fix(core-styles): fp-1723 fix o-section--banner on safari [TACC/tup-ui#29](https://github.com/TACC/tup-ui/pull/29)

## [0.6.0] - 2022-07-06: Fix CMS v3.7.0 Bugs, Button Style Updates

- [0.6.0-beta.3]
- [0.6.0-beta.2]
- [0.6.0-beta.1]

## [0.6.0-beta.3] - 2022-06-28: Fix/Consistent Space Above CMS Footer

### Fixed

- chore: <main>, margin not pad. & accurate selector
- feat: drop .o-site for simple sticky footer trick
- fix: hide extra space, last light section ↔ footer

## [0.6.0-beta.2] - 2022-06-27: Prevent Section Banner Overflow

### Fixed

- fix(core-styles): fp-1666, section banner overflow

## [0.6.0-beta.1] - 2022-06-24: Do Not Let Figure CSS Bleed into Other Patterns

### Fixed

- fix(core-styles): no figure css, only .figure css
- fix(core-styles): remove unwanted sample html css

## [0.6.0-beta] - 2022-06-08: Linting, Button Updates, package-lock.json

### Added

- (feat) add style lint (minimal ruleset)

### Changed

- (fix) lint/update: markdown, yaml, js, html
- (fix) readme "Build Script" example code
- (chore) update package-lock.json
- (feat) update button styles (https://github.com/TACC/Core-Portal/pull/654)
- (docs) combine versioning steps to just `npm version ...`

## [0.6.0-alpha.2] - 2022-06-03: Fix Alpha Bugs

### Changed

- fix(core-styles): add missing file to package

## [0.6.0-alpha.1] - 2022-06-03: Allow Build from Root, New Publish Process

### Changed

- feat(core-styles): root build includes local build
- feat(core-styles): publish process & remove dist/

## [0.6.0-alpha] - 2022-06-01: Migrate to Monorepo

### Changed

- refactor: moved to https://github.com/TACC/tup-ui:/libs/core-styles
- refactor!: moved `/source` to `/src/lib`
- feat: support TypeScript and Jest

## [0.5.2] - 2022-06-13: Missing Button State; Fix an Import, Button Size, Docs

### Fixed

- feat(FP-1596): design button "--is-active" type (#24)
- fix(FP-1596): missing import for truncate extend
- fix(fp-1678): small button a bit more vert pad (#30)

### Changed

- docs(README): module usage: fix typo, drop old opt
- docs(styles): readme, related repos & old callout

## [0.5.1] - 2022-05-26: Version Rewrite

### Changed

- chore(version): v3.0→v0.5 & publish instructions (#28)

## [0.5.0] - 2022-05-25: Simpler CLI API, Fixes, Updates, Cleanup

### Added

- FP-1648: Build Individual Stylesheets — ⚠️ API Change (#23)

### Changed

- feat(tup-151): offset content less offset (#21)
- FP-1648: Build Individual Stylesheets — ⚠️ API Change (#23)
- feat(fp-1491): c-button updates from portal & use x-truncate (#20)

### Fixed

- fix(x-truncate): typo kills x-truncate--one-line (#22)
- fix(FP-1596): pagination @import used external url
- fix(fp-1542): figure img margin for link img's too (#25)

### Deleted

- chore(gitignore): remove outdated file

## [0.4.0] - 2022-05-11: Return Some CMS Styles, Many New Patterns

### Added

- feat(branding): new class .branding-logo--short (#4)
- feat(search): input placeholder matches bkgd (310e969)
- feat(fp-1596): pagination component (b9e2eca, #5)
- feat(fp-1491): button component (c1bd33f / #6)
- feat(postcss): custom selectors (847d0e2)
- feat(ecep-114): tweak typography (#14)
- feat(ecep-113): article link mixin new features (#15)
- feat: nav component (#12)
- feat(ecep-114): position sticky support on CMS (#13)
- feat(ecep-113): style news & related patterns (#16)
- feat(fp-1378): add new space prop --section-gap (#10)
- feat(object): o-flex-item-table-wrap (Core-Portal) (#18)

### Changed

- fix: no depress UX for links (53a3a6c)
- docs(readme): updates [learned from active use of repo] (69bf862)
- chore(github): add pull request template (6037687)
- docs(markup): c-image-map (b8ed629)

### Fixed

- fix(tup-231): move some core-styles back to core-cms (#17)

## Deleted

- chore(gh-149): remove deleted id selector (#7)

## [0.3.0] - 2022-04-06: Initial Release

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
- chore(version): del & ignore runtime \_version.css (dab87e7)
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
[0.11.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.11.0
[0.10.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.10.0
[0.9.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.9.0
[0.8.7]: https://github.com/TACC/Core-Styles/releases/tag/v0.8.7
[0.8.6]: https://github.com/TACC/Core-Styles/releases/tag/v0.8.6
[0.8.2]: https://github.com/TACC/Core-Styles/releases/tag/v0.8.2
[0.8.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.8.0
[0.7.1]: https://github.com/TACC/Core-Styles/releases/tag/v0.7.1
[0.7.0]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.7.0
[0.7.0-beta]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.7.0-beta
[0.6.0]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0
[0.6.0-beta.3]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-beta.3
[0.6.0-beta.2]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-beta.2
[0.6.0-beta.1]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-beta.1
[0.6.0-beta]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-beta
[0.6.0-alpha.2]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-alpha.2
[0.6.0-alpha.1]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-alpha.1
[0.6.0-alpha]: https://github.com/TACC/tup-ui/releases/tag/core-styles-v0.6.0-alpha
[0.5.2]: https://github.com/TACC/Core-Styles/releases/tag/v0.5.2
[0.5.1]: https://github.com/TACC/Core-Styles/releases/tag/v0.5.1
[0.5.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.5.0
[0.4.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.4.0
[0.3.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.3.0
[0.2.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.2.0
[0.1.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.1.0

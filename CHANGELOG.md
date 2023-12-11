# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased][unreleased]

## [2.22.3] - 2023-11-27: Fix Styles Not Applying to Django CMS Form Button

### Fixed

- hotfix: consistent margin-bottom for aligned images (#278)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.22.2...v2.22.3

## [2.22.2] - 2023-11-27: Fix Styles Not Applying to Django CMS Form Button

### Fixed

- hotfix: wrong classname for django cms form button (9ac94d3)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.22.1...v2.22.2

## [2.22.1] - 2023-11-27: Match Space Between Form Label & "(required)" on CMS

### Fixed

- hotfix: better mimic form badge space on CMS (a06f5af, 9315ebb)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.22.0...v2.22.1

## [2.22.0] - 2023-11-22: ⚠️ Do Not Truncate Buttons by Default

### Added

- feat: do NOT truncate buttons by default (#272)

### Fixed

- hotfix: tup-660 increase cms form badge space (#271)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.21.2...v2.22.0

## [2.21.2] - 2023-11-21: Form Fixes

### Fixed

- Fix/tup 660 form badge font size zero can remove all space (#269)
- hotfix: django-cms-forms unstyled in demo (#268)
- fix: tup-659 all form fields too short (#267)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.21.1...v2.21.2

## [2.21.1] - 2023-11-20: Fix Scrolling Table Border, Fix Unwanted Padding

### Changed

- chore: tup-636 c-card--image - less templates (#257)

### Fixed

- fix: tup-488 scrollable table border (#265)
- bug/tup-649 bug/tup-646 Remove unwanted padding-left (#264)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.21.0...v2.21.1

## [2.21.0] - 2023-11-16: Wrap Card Links, Add u-highlight, Sticky Footer Bug

## Added

- feat/tup-486 Create text-wrap for longer links (#260)
- feat/tup-648 Migrate u-highlight from tup-ui to core-stlyes (#261)

## Fixed

- hotfix: tup 644 footer not sticky during edge case (#256)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.20.0...v2.21.0

## [2.20.0] - 2023-11-13: Migrate More Components from TUP-UI, Add Header Demo

### Added

- feat/tup-635: Add header demo to core-styles (#258)
- feat/tup 637: Migrate c-card support list to core-styles (#250)
- feat/tup-636: Migrate c-card--images to core-styles (#254)
- feat/tup 627: Migrate s-header to core-styles (#249)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.19.0...v2.20.0

## [2.19.0] - 2023-11-02: Migrate Some Components from TUP-UI, Fix a Few Bugs

### Added

- feat: tup-624 c-update migration (#247)
- feat/tup 617: Migrate c-card fixes to core-styles (#251)
- feat/tup-625: Migrate o-heading-steps to core-styles (#248)
- feat: tup-463 c-content-block and generics/attributes from tup-ui (#246)

### Fixed

- fix: tup-639 move c-button font-weight bold to cms (#253)
- fix: c-card--frontera variant misc bugs (#252)

### Documentation

- docs: allow small primary buttons (#243)

**Full Changelog**: https://github.com/TACC/Core-Styles/compare/v2.18.0...v2.19.0

## [2.18.0] - 2023-10-03: C-Pill, S-Form-Page Footer Image; Better C-Tag Demo

### Added

- feat: support s-form-page footer link with image (#240)
- feat: c-pill (#234)
- enhance: improve c-tag demo (#233)

## [2.17.5] - 2023-09-13: Style Non-Footer Form Submit Buttons

### Fixed

- fix: style non-footer form buttons (and add demo to test) (#230)

## [2.17.4] - 2023-09-13: Form Submit Buttons Are Not Always Primary Buttons

### Fixed

- fix: form submit buttons are not always primary (#227)

## [2.17.3] - 2023-09-12: Fix Login Form Checkbox Alignment

### Fixed

- fix: checkbox field layout broken by form--login (#225)

## [2.17.2] - 2023-09-01: Small Fixes for Table, Demo, Form

### Fixed

- fix: right-align a lone login form action (#223)
- fix: cms table & s-paragraph-table demo (demo cmsStyles now in base layer) (#221)
- fix: only truncate paragraph in portal table or s-truncated-table (#220)

### Changed

- fix: use global vars in MuiTabs (633ec418)

### Documentation

- fix: typo in c-card demo (34e3aded)
- docs: comment on :--c-card > address usage (bf1a8986)
- style: improve clarity of c-card `<p>` wrap notes (c0028f88)

## [2.17.1] - 2023-08-15: NPM Audit Fix

### Security

- chore: npm audit fix (#217)

## [2.17.0] - 2023-08-04: Refactor Footers, Fix Button to Inherit Font Weight

### Added

- refactor: footers (#215)

### Fixed

- fix: c-button font-weight not inherited (#216)

## [2.16.3] - 2023-08-02: Fix Typo in Fieldset `:not()` Selector

### Fixed

- fix: invalid :not syntax (missing colon) (97e59a9)

## [2.16.2] - 2023-08-02: Fix Form Element Selectors Too Specific

### Fixed

- fix: form elements selectors too specific (#213)

## [2.16.1] - 2023-08-01: Login Form, Support Many Logos; Form Page, Fix Width

### Fixed

- fix: form width in demo (be88a94)
- fix: s-form-page missing s-form--login css (10b8619)
- fix: s-form-page width overflow (f1d139c)
- fix: wp-63 must support two brands on login (#211) (#212)

## [2.16.0] - 2023-08-01: `s-form-page`, `c-form--login`, `s-form--login`

### Added

- feat: s-form-page, c-form--login, s-form--login (#205)

## [2.15.0] - 2023-07-31: Add `s-form`, Refactor Forms, Document about Bootstrap

### Added

- feat: s-form (and refactor c-form and django-cms-forms) (#207)

### Fixed

- fix: checkbox label should not have margin bottom (#206)
- fix: less specific c-button not selector (#204)

### Documentation

- docs: cleanup (#208)
- docs: core styles relationships to bootstrap (#203)
- docs: add `bootstrap.md` (#202)

## [2.14.0] - 2023-07-24: `s-affixed-input-wrapper` Enhanced & Moved to Base

### Added

- feat: s-affixed-input-wrapper from cms to base (#200)
- refactor: s-affixed-input-wrapper, also adds prepend \& append (#199)

## [2.13.0] - 2023-07-19: Add Handlebars Helpers; Fix `c-nav--piped` Edge Cases

### Added

- feat: handlebars helpers "eq" and "has" (#194)

### Fixed

- fix(components): c-nav support c-button--as-link (#196)
- fix(components): c-nav support buttons (#195)

## [2.12.0] - 2023-07-19: Demo `c-nav`, Add `c-nav--piped`; docs/contributing.md

### Added

- feat(components): c-nav demo \& "--piped" modifier (#191)

### Documentation

- docs: isolate \& update contrib. docs like core-cms (#192)

## [2.11.0] - 2023-07-12: No Overscroll Behavior & Equal Height Col. Content

### Added

- feat: no macos overscroll behavior (#189)
- feat(components): tup-491 eq. height cols via rows (#188)
- feat(components): tup-491 equal height col cards (#187)

## [2.10.1] - 2023-07-06: Bootstrap Fixes (Mainly for Portal Client)

### Fixed

- fix: remove border from modal footer (#186)
- fix: offer bootstrap form fixes to portal client (#184)

## [2.10.0] - 2023-07-05: Color Demo & Refactor, Auto Release, How to Use Doc

### Added

- feat: stop writing your changelogs manually (#176, #177, #178, #179, #180, #181, #182, #183)
- feat: better manage accent colors, darken three light purples (#174)
- feat: color demo (#175)

### Documentation

- docs: add howto.md (users loading core-styles) (#152)

## [2.9.1] - 2023-06-16: Fix `section__banner-…`, Update Dependencies

### Fixed

- fix: missing :--o-section__banner-… selectors (015d3cc)

### Security

- build(deps): bump http-cache-semantics from 4.1.0 to 4.1.1 (#155)
- build(deps): bump nunjucks from 3.2.3 to 3.2.4 (#156)
- build(deps): bump qs and browser-sync (#157)
- build(deps): bump ua-parser-js and browser-sync (#158)

## [2.9.0] - 2023-06-12: `s-image-grid`, 2 New Global Vars, Deprecate Some %

### Added

- feat: s-image-grid (#169) (2beb2ea)
- feat(partials): add img-url, have img use it (#171)
- feat(_partials): img options to load all sizes (#170)
- feat: add global variables (from c-card) (053756f)
- feat: deprecate %x-grid, add .x-grid (3e4d056)

### Changed

- docs: grid min-width columns comments improved (10806c4)

### Fixed

- fix(partials): remove whitespace from img-url (6017deb)
- fix: o-grid--image-fill cleanup (0a47730)

### Deprecated

- chore(src): deprecate % selector in x-truncate (eeaf115) (5b934b1)

### Security

- chore(deps): bump socket.io-parser from 4.2.1 to 4.2.3 (#168)

## [2.8.0] - 2023-05-23: Retire env()-based Themes (for Core-CMS v3.10)

### Fixed

- fix(CHANGELOG): add missing backticks for code (d9f60f7)

### Changed

- chore: retire env()-based themes (Core-CMS v3.10) (#163)
- docs(CHANGELOG): add missing bullets (e764b5c)
- docs(elements): point to new responsive table solution (903eb7b)
- docs: do not guess tag annotation during release (0a8bf6e)

## [2.7.0] - 2023-05-04: Add `c-card--docs` `o-section--docs` `@message` & v0.12

### Added

- feat: c-card--docs, o-section--docs, tup-cms c-card (#159) (0bf08e2)
- docs: create and use message partial (#161) (1b5f959)
- feat: use css "project" layer for client context styles (#160) (23af16b)
- docs(CHANGELOG): v0.12.0 (7880572)

### Fixed

- chore: missing commit of core-styles.docs (be61fe1)
- chore: missing commit of dist html elements (ce7a9f7)
- docs(README): add tacc docs client (4558ee8)

### Changed

- chore: remove unnecessary font-size for `<main>` (6163f17)

## [2.6.2] - 2023-01-04: x-figure, x-blockquote, accent is now blue, `<hr>`, modal

### Added

- feat(tools): x-figure, x-blockquote, (…-caption) (#150) 560a78c
- feat: change accent color from purple to blue (#149) 66d29a8
- feat: new `<hr>` styles from tup-cms ad0b5c3
- feat: bootstrap modal styles (#147) 675e5d5

### Fixed

- fix(objects): simple distance for offset content d5f01f7
- fix: no max-width on form fields e068073
- fix: remove undesired `<main>` margin (body > *) 8eb7046
- fix: bootstrap overriding `<pre>` color e75522b

### Changed

- chore(settings): new URL to colors in better spot 4504116

## [2.6.1] - 2023-03-21: `core-styles.wysiwyg.css`

### Fixed

- fix: core-styles.wysiwyg.css filename typo (c21b036)

## [2.6.0] - 2023-03-21: `c-tag`, `--global-font-size--xxx-large`, `c-island`

### Added

- feat(components): c-tag (#144)
- feat(settings): font--cms, size xxx-large 3.2rem
- feat(components): c-island (#145)
- feat: core-styles.wysiwig.css (#145)

## [2.5.0] - 2023-03-10: Integrate Docs Client CSS into Core-Styles.Docs

### Added

- feat: big core-styles.docs update f.k.a [...] (#142) af8e2b1

### Fixed

- fix(demo): respect client/project font size 4f426d3
- fix(objects): o-grid, no cell overflow nor side fx bd1b007

## [2.4.1] - 2023-03-10: Split Docs & CMS & Portal Root Element Styles; Fixes

See [2.5.0] instead.

## [2.4.0] - 2023-03-09: Headings on CMS Client vs Docs Client

### Added

- feat(elements): headings, distinguish cms vs docs

## [2.3.1] - 2023-03-09: Tab Activation Scroll Bug

### Fixed

- fix: do not move toggle far away e3089b9

## [2.3.0] - 2023-03-09: Tabs (Bootstrap Navs & PyMdown Extensions)

### Added

- feat(tools): x-tabs (#139)

## [2.2.0] - 2023-03-07: Color Fixes & Additions, Misc. Tweaks & Polish

### Added

- feat(settings): color, 2nd-ary & 3rd-ary xx-light f35c533

### Fixed

- fix(settings): color, accent xxx-light value f593cf3
- fix(settings): richer dark reds, warmer yellows f4aa7f0

### Changed

- chore(dist): cms h1–h6 updates for docs 8eded6c
- feat(elements): remove heading line-height 9ef80b3
- feat(elements): remove h5 and h6 styles 78849b9
- fix(settings): simple color context selector names e76487f
- docs(README): […] publish step polish 7f91086, d119fad

### Removed

- chore(elements): [cleanup] 928707d, 6d256f0

## [2.1.0] - 2023-03-03: Contextual Accent Colors, Button Test Cases & Fixes

### Added

- feat: change action colors by context, not …on-dark/light vars (#137) c767bc5
- feat: --global-color-accent--xx-light, no more alt ea97686
- test(components): c-button, selectors (#132) 32a21e0
- feat(demo): o-section, add sample buttons & links 3f16917
- feat(demo): c-message, add sample button as link 14d8750
- feat(demo): add buttons to link demos (#136) 4a49231

### Changed

- chore(settings): deprecate …--secondary|tertiary 2592839
- chore: django-cms-forms, abandon c-message idea fbe1a95
- feat(components): admonition, important = caution 8d1102a

### Fixed

- fix(components): swap …accent--weak with …x-light b340af6
- fix: o-section, button--as-link text color change 92db8b2
- fix: o-section, no purple hover text for button 30420da
- fix(components): admonition, icon for `.error` cd6be1c
- fix(components): admonition, improve for docs bf60bb0

## [2.0.2] - 2023-03-02: New Message Styles for CMS & Docs (Not Portal Yet)

### Changed

- feat(components): c-message, 2 styles; admonition, icons (#131)

## [2.0.1] - 2023-03-01: Add Missing Way to Use Theme from Dist

### Fixed

- feat: build has-dark-logo–themed stylesheets (#134)

## [2.0.0] - 2023-02-28: Font Sizes & Headings, New Patterns & Classes & Clients

### Added

- feat(settings): complete tertiary+secondary colors 4d7cece
- feat: "disable" links with no href attribute (#130)
- feat(elements): monospace light bkgd & dark text d12d9e7
- feat(elements): fake table using paragraphs (#126)
- feat(elements): inline monospace now dark on light 1ebfdce
- feat(docs): add form cms element styles 4d0208c 827124d
- feat(settings): space, …--p-buffer-above|below cab1977
- feat: color, add …accent--xx-dark + …xxx-dark 6298f5e
- feat: color, secondary tertiary normal xxx-dark 0d400a9
- feat(elements): monospace, invert code block color 931a213
- feat(elements): pointer cursor for `<summary>` tag 9984174
- feat(trumps): breadcrumbs (changes for core-styles.docs) (#118)
- feat(settings): --global-color-primary--xxx-dark (#117)
- feat(settings+elements): docs font (#116)
- feat(components): align + blockquote width mgmt. (#115)
- feat(elements): html-el's demo, blockquote, figure (#114)
- feat(trumps): s-blockquote pattern & tweaks (#113)
- feat(components, elements): tacc-docs, monospace (#110)
- feat(elements): monospace (#108)
- feat(components): alt. classnames for c-message (#106)
- feat(components): c-message demo & admonition pattern (#105)
- feat(elements): cms headings (#104)
- feat: elements re-org + css nesting + docs stylesheet (#102)
- feat(demo): support custom cms & portal css files (#95)
- feat(settings): (cms & portal) font patterns (#93)
- feat(demo): elements > (cms) headings pattern (#92)
- feat(components)!: new font sizes split cms/portal (#90)
- feat(cortal.icons): [add] collapse alias (#85)

### Changed

- feat(elements): table, updates from tup-cms (#127)
- chore: migrate cms `o-` patterns from base to cms (#119)
- feat: tup cms patterns (add, change, fix) (#100)
- feat(demo): wrap all previews in a `<main>` (#103)
- feat: elements re-org + css nesting + docs stylesheet (#102)
- feat: move cortal from base to cms and portal (#101)
- feat(demo): lower priority demo css bb25862
- feat(o-fixed-header-table): wrapper vs non-wrapper usage (#83)
- fix(package): move npm-watch to devDeps 8b2ee16
- chore(components): align, remove default max width (#122)

### Removed

- chore(elements)!: delete v0 CMS headings (#94)
- docs(README): add tup-ui to Known Clients 8e8a49d

### Fixed

- fix(trumps): header, use new color var f405ef7
- fix(components): footer, remove & simplify styles daada8b
- fix(trumps): better demo markup 4adb26c
- fix(components): c-button, disabled UI (#129)
- fix(components): c-message, font size & margin (#128)
- fix: only hide nested thead if parent has thead (#125)
- fix: only hide nested thead if parent has thead e1e302c
- fix(components): docs, prev/next as breadcrumbs 5bb8e00
- fix(elements): table font size & nested th offset (#124)
- fix(elements)!: table padding from px to em (#123)
- fix: cms picture, offset, alignment improvements (#121)
- fix: components/align, caption width → client task a8e4407
- fix: figure image shrunk if figure was not aligned (#120)
- fix(demo): load Bootstrap on layer beneath others b1d7919
- fix(elements): `<strong>` and `<b>` selectors lacked & 00d182b
- fix(components): no TACC cards in portals, modals 514d272
- fix(components): no card pattern in modals 8e1914f
- fix(components): no card pattern for portal d8eaee9
- fix(objects): o-grid, prevent `<figure>` shrink ee96b93
- fix(core-styles): do not load .align for cms 09a9bd7
- fix(core-styles): load .align for cms 5a8d0f6
- fix(partials): do not duplicate lorem ipsum paragraphs (#112)
- fix(demo): apply demo styles to `<dl>`'s (#109)
- fix(bin): build-id preprended with comma 837ab3f
- fix(elements): nested table assumed parent thead 4550f16
- fix(demo): replace demo-message with c-message 1b10fd4
- fix(icon): hide vert overflow inside icon (from wrapped text) (#88)
- fix(icon): hide text inside icon (#86)
- fix(demo): no cross-pattern demo asset load (#84)
- fix(demo): rename extra…css to example…css 59f002f
- feat: tup cms patterns (add, change, fix) (#100)

## [1.0.0] - 2022-12-05: Polish, Table Objects, Form Patterns, Dist Files, Fonts

### Added

- **feat!: ease use of core-styles (#81)**
- feat!: provide CDN-style deliverable stylesheets (#78)
- feat(components): form patterns (c-form, django.cms.forms) (#77, #79, #80)
- feat(components): c-form updates & base html-elements (#79)
- feat(dist): commit dist for clients relying on it (#70)
- fix(o-table-wrap): …scroll.extra → …scroll-extra (#69)
- feat(objects): o-table, o-fixed-header-table, o-flex-item-table-wrap (#68)

### Changed

- **feat(settings): lighter `…primary--light` color (#76)**

### Removed

- **feat!: provide CDN-style deliverable stylesheets (#78)**
  - removed settings load from ALL _import source files (#78)
  - removed icon(.…).css
  - removed font settings from header

### Fixed

- fix(table): border colors (#75)
- fix(fonts)!: support font load on demo (#74)
- **fix(demo)!: font path change in dist (#73)**
- fix(fonts): fp-1891 add regular italic, also add black (#71, #72)

## [0.13.0] - 2023-05-08: Retire env()-based Themes (for Core-CMS v3.9)

### Changed

* feat!: retire env()-based themes (Core-CMS v3.9) (#164)

## [0.12.0] - 2023-04-24: Commit Dist (of v0.11.0)

### Added

* feat(dist): commit dist so clients can rely on it (#153)

## [0.11.0] - 2022-11-14: Table Pattern, Many Demo Fixes, Demo Build Dir Clarity

### Added

- feat(elements): fp-1878 table pattern (#64) (b3bc511)

### Changed

- docs: nest demo assets in `/assets` directory (#65)

### Fixed

- fix(bootstrap): broken paths in static build (47047a4)
- fix: pattern demo repair suite (#66)

## [0.10.0] - 2022-11-12: New Docs, Patterns, Features; Major Dependency Bumps

### Added

- docs(components): tup-354 bootstrap.modal; assets, loremipsum (#51)
- docs(components): tup-356 bootstrap.form (#52)
- docs: tup-356 bootstrap preview & easy subdir var (#53)
- docs(components): tup-356 bootstrap.container (#54)
- feat: tup-355 links (redo #57) (#58)
- feat(elements): fp-1828 move apcd styles to core (#56) (#62)
- feat(c-button): do not show `<a>` tag button for `--as-link` (#59)
- feat: x-link, used by c-button--as-link & links (#60)
- feat: npm watch synced with live-refresh demo (#61)

### Changed

- feat: tup-274 peerDeps not deps (#46)
- chore: tup-293 dependency updates (#50)
- fix(trumps, and unused): complex subdir var made easy (#55)

### Fixed

- fix(c-button): fp-1791 auto width by default (#49)
- fix: fp-1828 s-affixed-input-wrapper fallback (#62)

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

- chore: `<main>`, margin not pad. & accurate selector
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

[unreleased]: https://github.com/TACC/Core-Styles/compare/v2.22.3...HEAD
[2.22.3]: https://github.com/TACC/Core-Styles/releases/tag/v2.22.3
[2.22.2]: https://github.com/TACC/Core-Styles/releases/tag/v2.22.2
[2.22.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.22.1
[2.22.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.22.0
[2.21.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.21.1
[2.21.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.21.0
[2.20.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.20.0
[2.19.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.19.0
[2.18.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.18.0
[2.17.5]: https://github.com/TACC/Core-Styles/releases/tag/v2.17.5
[2.17.4]: https://github.com/TACC/Core-Styles/releases/tag/v2.17.4
[2.17.3]: https://github.com/TACC/Core-Styles/releases/tag/v2.17.3
[2.17.2]: https://github.com/TACC/Core-Styles/releases/tag/v2.17.2
[2.17.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.17.1
[2.17.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.17.0
[2.16.3]: https://github.com/TACC/Core-Styles/releases/tag/v2.16.3
[2.16.2]: https://github.com/TACC/Core-Styles/releases/tag/v2.16.2
[2.16.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.16.1
[2.16.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.16.0
[2.15.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.15.0
[2.14.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.14.0
[2.13.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.13.0
[2.12.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.12.0
[2.11.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.11.0
[2.10.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.10.1
[2.10.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.10.0
[2.9.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.9.1
[2.9.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.9.0
[2.8.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.8.0
[2.7.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.7.0
[2.6.2]: https://github.com/TACC/Core-Styles/releases/tag/v2.6.2
[2.6.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.6.1
[2.6.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.6.0
[2.5.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.5.0
[2.4.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.4.1
[2.4.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.4.0
[2.3.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.3.1
[2.3.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.3.0
[2.2.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.2.0
[2.1.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.1.0
[2.0.2]: https://github.com/TACC/Core-Styles/releases/tag/v2.0.2
[2.0.1]: https://github.com/TACC/Core-Styles/releases/tag/v2.0.1
[2.0.0]: https://github.com/TACC/Core-Styles/releases/tag/v2.0.0
[1.0.0]: https://github.com/TACC/Core-Styles/releases/tag/v1.0.0
[0.13.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.13.0
[0.12.0]: https://github.com/TACC/Core-Styles/releases/tag/v0.12.0
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

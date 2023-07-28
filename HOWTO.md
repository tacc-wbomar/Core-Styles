# Core Styles - How To

- [Use **All** of Core Styles](#use-all-of-core-styles)
- [Use **Some** of Core Styles](#use-some-of-core-styles)

<small>If you want to learn how to _author_ CSS like [Core Styles], then visit the [CSS Style Guide].</small>

## Use **All** of [Core Styles]

> This method expects no other website theme is present. If you need to build atop an exisitng theme, then follow [Use **Some** of Core Styles](#use-some-of-core-styles) instead.

To apply and have access to all of [Core Styles] load stylesheets according to [MCSS](https://confluence.tacc.utexas.edu/x/b53tDg) using "Base" and "Project" styles provided by [TACC/Core-Styles](https://github.com/TACC/Core-Styles).

0. [Foundation](#0-foundation)
1. [**Base**](#1-base)
2. [**Project**](#2-project)
3. [**Cosmetic**](#3-cosmetic)

### 0. Foundation

__<u>Not</u> necessary.__ <small>We prefer you use Core-Styles without Bootstrap.</small>

__If__ your project requires Bootstrap (e.g. [Django CMS](https://www.django-cms.org/)), __then__ load Bootstrap 4.0.0 first. <small>Versions greater than Bootstrap 4.0.0 have not been tested with Core-Styles. Compatibility is not guaranteed.</small>

__If__ you want your project to use a [reset, normalize, or reboot](https://css-tricks.com/reboot-resets-reasoning/), __then__ load it first. <small>Core-Styles has not been tested with these. Compatibility is desired. Please report issues that arise. If you have access, [report issues in JIRA "TUP" Project](https://jira.tacc.utexas.edu/projects/TUP/issues). Otherwise, [report issues in Github](https://github.com/TACC/Core-Styles/issues).</small>

### 1. Base

Load `core-styles.base.css` from a CDN e.g. [JSDeliver].

- Either in HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.base.css" />
    ```

- Or in CSS:

    ```css
    @import url("https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.base.css");
    ```

### 2. Project

Load any one of these relevant project-type CSS from a CDN e.g. [JSDeliver]:

| stylesheet | purpose |
| - | - |
| `core-styles.cms.css` | marketing or branding sites |
| `core-styles.docs.css` | documentation sites |
| `core-styles.portal.css` | portals (i.e. web apps) |

- Either in HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.______.css" />
    ```

    Replace `______` with `cms` or `docs` or `portal`.

- Or in CSS:

    ```css
    @import url("https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.______.css");
    ```

    Replace `______` with `cms` or `docs` or `portal`.

[JSDeliver]: https://www.jsdelivr.com/package/npm/@tacc/core-styles?tab=files&path=dist

### 3. Cosmetic

Load stylesheets from your project.

- Either in HTML:

    ```html
    <link rel="stylesheet" href="/your/project/stylesheet.css" />
    ```

- Or in CSS:

    ```css
    @import url("/your/project/stylesheet.css");
    ```

## Use **Some** of [Core Styles]

- [For a Portal Application](#for-a-portal-application)
- [For a CMS or Documentation Site](#for-a-cms-or-documentation-site)

### For a Portal Application

See https://github.com/TACC/tup-ui/blob/9402505/apps/tup-ui/src/styles/README.md#use-core-styles.

### For a CMS or Documentation Site

> This method is meant to add support for Core Styles patterns atop an existing theme. If you expect Core Styles to be your theme, then follow [Use **All** of Core Styles](#use-all-of-core-styles) instead.

To use only what you need of [Core Styles]:

1. [Load Settings](#load-settings).*
2. Load stylesheets as necessary:
    - [Load a Core Styles Pattern](#load-a-core-styles-pattern)
    - [Extend a Core Styles Pattern](#extend-a-core-styles-pattern)


<sub>* This lets Core Styles patterns access [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) they assume exist.</sub>

### Load Settings

Load `core-styles.settings.css` from a CDN e.g. [JSDeliver].

- Either in HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.settings.css" />
    ```

- Or in CSS:

    ```css
    @import url("https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.settings.css");
    ```

### Load a [Core Styles] Pattern

To use a pattern as is.

- Either in HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/components/c-message.css" />
    ```

- Or in CSS:

    ```css
    @import url("https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.settings.css");
    ```

### Extend a [Core Styles] Pattern

To use a pattern but also change it to fit a unique requirement of your site.

- Either in HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/components/c-message.css" />
    <style>
      .c-message--scope-section {
        margin-bottom: 1em;
      }
    </style>
    ```

- Or in CSS:

    ```css
    @import url("https://cdn.jsdelivr.net/npm/@tacc/core-styles@2.6.2/dist/core-styles.settings.css");

    .c-message--scope-section {
      margin-bottom: 1em;
    }
    ```

[core styles]: https://github.com/TACC/Core-Styles
[css style guide]: https://confluence.tacc.utexas.edu/display/~wbomar/Shared+UI+-+CSS+-+Style+Guide

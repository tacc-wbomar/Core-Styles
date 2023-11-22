# Bootstrap Compatibility

Core Styles styles:

- are independent of Bootstrap[^1]
- alters some Bootstrap styles (to fit Core Styles)
- replaces some Bootstrap classes (to deprecate use of Boostrap)

TACC projects should prefer Core Styles to Bootstrap.[^2]

| regular CSS <u>replaces</u> | Bootstrap
| - | -
| [Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grid) (on [Core Portal])* | [Grid](https://getbootstrap.com/docs/4.0/layout/grid/)
| [elements](https://github.com/TACC/Core-Styles/tree/v2.14.0/src/lib/_imports/elements) & [generics](https://github.com/TACC/Core-Styles/tree/v2.14.0/src/lib/_imports/elements) | [Reboot](https://getbootstrap.com/docs/4.0/getting-started/introduction/#reboot)
| write styles instead | [Utilities](https://getbootstrap.com/docs/4.0/utilities/borders/)

| Core Styles <u>replaces</u> | Bootstrap
| - | -
| [Message](https://tacc.utexas.edu/static/ui/components/detail/c-message--scope-cms.html) | Alerts
| [Admonition](https://tacc.utexas.edu/static/ui/components/detail/admonition.html) (on [TACC Docs])† | Alerts
| [Form](https://tacc.utexas.edu/static/ui/components/detail/c-form--default.html) | Forms
| [Input Wrapper](https://tacc.utexas.edu/static/ui/components/detail/s-affixed-input-wrapper--prepend-and-append) | Input Groups
| [Button](https://tacc.utexas.edu/static/ui/components/detail/c-button--secondary.html) | Buttons
| [Card](https://tacc.utexas.edu/static/ui/components/detail/c-card--standard.html) | Cards
| [Page](https://github.com/TACC/Core-Styles/blob/v2.14.0/src/lib/_imports/components/c-page.css) | Pagination
| [Tag](https://tacc.utexas.edu/static/ui/components/detail/c-tag.html) | Badges

| Core Styles <u>extends</u> | Bootstrap
| - | -
| [Row](https://github.com/TACC/Core-Styles/blob/v2.14.0/src/lib/_imports/components/bootstrap.row.css) | Grid: Row

| Core Styles <u>changes</u> | Bootstrap
| - | -
| [Container](https://tacc.utexas.edu/static/ui/components/detail/bootstrap--container.html) | [Grid](https://getbootstrap.com/docs/4.0/layout/grid/): Container
| [Modal](https://tacc.utexas.edu/static/ui/components/detail/bootstrap--modal.html) | [Modal](https://getbootstrap.com/docs/4.0/components/modal/)
| [Nav Tabs](https://tacc.utexas.edu/static/ui/components/detail/bootstrap--nav-tabs.html) | Navs: [Tabs](https://getbootstrap.com/docs/4.0/components/navs/#tabs)
| [Pagination](https://github.com/TACC/Core-Styles/blob/v2.14.0/src/lib/_imports/components/bootstrap.pagination.css) | [Pagination](https://getbootstrap.com/docs/4.0/components/pagination/)

| Where Core Styles <u>yields</u> to | Bootstrap
| - | -
| Modal | [Modal](https://getbootstrap.com/docs/4.0/components/modal/)
| Grid (on [Core CMS])* | [Grid](https://getbootstrap.com/docs/4.0/layout/grid/)

<small>\* On [Core Portal], use regular CSS Grid, because it is more flexible. On [Core CMS], use Bootstrap Grid, because we use a Django CMS Bootstrap plugin.</small>
<small>† On [TACC Docs] and Admonitions plugin is available. Core Styles redesigns them to extend its own "Messages" design.</small>

[^1]: To the best of its authors' knowledge and efforts.
[^2]: [Some TACC projects stll load Bootstrap.](https://confluence.tacc.utexas.edu/x/OAACBw)

[Core CMS]: https://github.com/TACC/Core-CMS
[Core Portal]: https://github.com/TACC/Core-Portal
[TACC Docs]: https://github.com/TACC/TACC-Docs

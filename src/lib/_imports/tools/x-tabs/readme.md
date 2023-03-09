Mixins for tab UI e.g. [Bootstrap Nav Tabs](https://getbootstrap.com/docs/4.0/components/navs/#tabs), [Python-Markdown Tabbed Extension](https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/#syntax).

| Mixin | Description
| - | -
| `.x-tabs`                        | container of tab elements
| `.x-tabs--custom-properties`     | custom properties for tab elements
| `.x-tabs--focus-within`          | container on interactive element focus
| `.x-tabs__toggle`                | interactive element that toggles visibility
| `.x-tabs__tab`                 | a tab
| `.x-tabs__tab--hover`          | a tab over which user hovers
| `.x-tabs__tab--active`         | the tab of the visible content
| `.x-tabs__tab--not-active`     | a tab of not visible content
| `.x-tabs__content`               | content of the tabs
| `.x-tabs__content--active`       | visible content
| `.x-tabs__content--force-active` | to force content to be visible

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

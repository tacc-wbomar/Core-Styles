UI states of [`<a>` anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) as mixins.

| Mixin | Description
| - | -
| `.x-link`         | default state
| `.x-link--disabled`| "disabled" state (e.g. no `href` attribute)
| `.x-link--hover`  | `:hover` state
| `.x-link--active` | `:active` (click) state

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

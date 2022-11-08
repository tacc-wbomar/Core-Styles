The [`<a>` anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

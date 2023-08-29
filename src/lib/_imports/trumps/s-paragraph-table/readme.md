A [table]({{path './table' }}) that uses [paragraphs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) instead of cells.

> **ⓘ Notice**
>
> - Text will not truncate. It will wrap.
> - Only a single column is supported.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

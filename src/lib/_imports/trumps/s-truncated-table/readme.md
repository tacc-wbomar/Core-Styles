A [table]({{path './table' }}) that uses a [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element, but cell text should be truncated.

> **ⓘ Notice**
>
> - Text will truncate only if it is in a `<p>` tag.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

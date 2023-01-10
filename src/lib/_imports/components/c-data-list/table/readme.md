Use [Table elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#table_content).

> **✓ Hint**
>
> Narrow the viewport to see truncation of values.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

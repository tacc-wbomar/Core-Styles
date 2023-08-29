A [table]({{path './table' }}) with cells that have [paragraphs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p).

> **ⓘ Notice**
>
> On [Portal tables]({{path './table--with-paragraphs-portal' }}) and [`s-truncated-table`s]({{path './s-data-table' }}), text in a `<p>` tag. will truncate at N lines; see [truncate mixin]({{path './x-truncate' }}) to control line count.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

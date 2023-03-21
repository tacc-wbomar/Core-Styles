A portion of a document whose content is only indirectly related to the document's main content.

> **☞ Remember**
>
> The [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) is usually the appropriate element for this pattern.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

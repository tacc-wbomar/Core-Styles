A [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) within a [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).

> **☝ Idea**
>
> Should this be implemented as `figure.has-blockquote` (fallback) `figure:has(blockquote)` (actual)? We can retain legacy support for `figure.s-blockquote` as an alternate class name.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

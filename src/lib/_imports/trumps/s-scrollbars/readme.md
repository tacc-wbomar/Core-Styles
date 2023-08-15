To style scrollbars.

Put the class on any parent element to style the scrollbars of child elements.

| to affect | apply to |
| - | - |
| page itself and scrolling elements within | `<html>` |
| only scrolling elements within the page | `<body>` |
| scrolling elements within a section | ancestor `<div>`, etc. |

> **⚠️ WARNING**
>
> On [browsers that support `::-webkit-scrollbar`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility), scrollbar presence might ignore user Operating System.
> On [browsers that support `scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color#browser_compatibility), scrollbar presence should respect user Operating System.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

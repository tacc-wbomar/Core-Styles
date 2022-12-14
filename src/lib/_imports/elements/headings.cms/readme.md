[Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) represent six levels of section headings.

```
<h1> <h2> <h3> <h4> <h5> <h6>
```

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

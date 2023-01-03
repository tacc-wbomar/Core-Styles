Add space between major blocks of content. {{render '@o-section--usage'}} A [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) is suitable for these wrappers.

| Class | Description
| - | - |
| `.o-section` | give extra space to content |
| `.o-section--style-styled` | add full-width background |
| `.o-section--style-light` | __gently__ highlight content |
| `.o-section--style-muted` | __clearly__ highlight content |
| `.o-section--style-dark` | __strongly__ highlight content |

> **ⓘ Notice**
>
> Default sections (`o-section`) use margin. Modified sections (`o-section--style-...`) use padding.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

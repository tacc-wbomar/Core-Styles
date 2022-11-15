A [table]({{path './table' }}) that scrolls horizontally.

> **?&#x20DD; Explanation**
>
> Table cells do not scroll as a whole. The trick is to [wrap the table in a `<div>` and scroll the div][source].

> **ⓘ Notice**
>
> Use this class on a table _wrapper_. It has **no** affect when used on table directly.

[source]: https://stackoverflow.com/a/19794391/11817077 "Stack Overflow: Horizontal scroll on overflow of table (answer)"

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

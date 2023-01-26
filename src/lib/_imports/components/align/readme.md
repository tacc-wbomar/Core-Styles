Simple classes to align media or content within paragraphs:
- `align-left`
- `align-right`
- `align-center`

> **☞ Remember**
>
> The benefit of these classes instead of other solutions (e.g. `style="float:right"`):
>
> 1. Spacing is consistent and aware of its own alignment.
> 2. No need for [deprecated `<img align="…">` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#deprecated_attributes).
> 3. No need for [deprecated `<center>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center).

> **ⓘ Notice**
>
> These classes are from [Django CMS Picture] ([source]), but suitable for general usage, especially in [TACC-Docs], which does not use Django CMS.

[Django CMS Picture]: https://github.com/django-cms/djangocms-picture#readme
[source]: https://github.com/django-cms/djangocms-picture/blob/2.3.0/djangocms_picture/models.py#L24-L34
[TACC-Docs]: https://github.com/TACC/TACC-Docs/

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

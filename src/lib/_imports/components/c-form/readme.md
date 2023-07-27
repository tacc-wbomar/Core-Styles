To style when raw [Form elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#table_content) alone are insufficient.

> <details><summary><strong>✎ Inspiration</strong></summary>
>
> - [Django CMS Form Default Template](https://github.com/avryhof/djangocms-forms/blob/ab38b22/djangocms_forms/templates/djangocms_forms/form_template/default.html)
>
> </details>

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

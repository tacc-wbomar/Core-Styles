To override and extend [Bootstrap Forms](https://getbootstrap.com/docs/4.3/components/forms/).

> **⚠️ WARNING**
>
> Core Styles are negligible, because this is used **only on Portal** to extend **its** overrides of Bootstrap.

> **→ TO DO**
>
> - [ ] **Either** migrate Portal Bootstrap form styling to this component.
> - [ ] **Or** return these styles to Portal (and remove form Core Styles).

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

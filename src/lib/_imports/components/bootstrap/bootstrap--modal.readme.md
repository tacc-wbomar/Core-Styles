To override and extend [Bootstrap Modals](https://getbootstrap.com/docs/4.3/components/modal/).

> **⚠️ WARNING**
>
> The modal will not scroll unless using [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/components/modal/). CMS uses [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/components/modal/). The relevant class is `modal-dialog-scrollable`.

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

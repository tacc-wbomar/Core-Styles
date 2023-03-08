To override and extend [Bootstrap Nav Tabs](https://getbootstrap.com/docs/4.0/components/navs/#tabs).

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

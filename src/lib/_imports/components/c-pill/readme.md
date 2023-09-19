To label the status of something.

| Class (Std.)               | Class (Alt.)             | Description
| - | - | - |
| `.c-pill`                  | `.pill`                  | space, shape, and size
| `.c-pill--should-truncate` | `.pill--truncate`        | truncate text*
| `.c-pill--is-danger`       | `.pill--danger`          | for a "danger" status
| `.c-pill--is-success`      | `.pill--success`         | for a "success" status
| `.c-pill--is-...`          | `.pill--...`             | for a "..." status

<small>* Requires client styles, because [truncation can be context-dependent](https://confluence.tacc.utexas.edu/x/sAoFDg).</small>

<script>
/* To open external links in new window */
Array.from(document.links)
  .filter(link => link.hostname != window.location.hostname)
  .forEach(link => link.target = '_blank');
</script>

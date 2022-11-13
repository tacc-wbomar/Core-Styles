A [table](/components/detail/table) nested inside a [table](/components/detail/table).

> **⚠️ Workaround**
>
> Nested tables require `.has-table` class on **both** parent table **and** containing cell.
>
> <small>This is only **until** [`:has()` pseudo-class support](https://caniuse.com/css-has) exists on all major browsers.</small>

| Class | Example | On
| - | - | - |
| `.has-table` | `<table class="has-table"> … </table>` | parent table
| `.has-table` | `<td class="has-table"> … </td>`    | cell that contains nested table

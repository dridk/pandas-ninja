<script lang="ts">
  export let show: boolean = false;
</script>

<div class="drawer drawer-end ">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" checked={show} />
  <div class="drawer-content ">
    <slot name="content" />
  </div>
  <div class="drawer-side ">
    <label for="my-drawer" class="drawer-overlay" />

    <slot name="sidebar" />
  </div>
</div>

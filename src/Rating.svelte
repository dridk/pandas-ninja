<script lang="ts">
  export let score: number;
  export let size: number = 30;

  let color: string;
  $: color = score >= 0 ? "#FB923C" : "gray";

  $: STAR_OUTLINE = `<svg style="width:${size}px;height:${size}px" viewBox="0 0 24 24">
  <path fill="${color}" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>`;

  $: STAR_FULL = `<svg style="width:${size}px;height:${size}px" viewBox="0 0 24 24">
  <path fill="${color}" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>`;
</script>

<div class="flex">
  {#each Array(3) as _, i}
    {#if score <= i}
      {@html STAR_OUTLINE}
    {:else}
      {@html STAR_FULL}
    {/if}
  {/each}
</div>

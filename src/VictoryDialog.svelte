<script lang="ts">
  import Rating from "./Rating.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let show = false;

  export let score: number = 1;
  export let expressionCount: number;

  const STAR_OUTLINE = `<svg style="width:40px;height:40px" viewBox="0 0 24 24">
  <path fill="#FB923C" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>`;

  const STAR_FULL = `<svg style="width:40px;height:40px" viewBox="0 0 24 24">
  <path fill="#FB923C" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>`;

  const CUP = `
<svg style="width:60px;height:60px" viewBox="0 0 24 24">
    <path fill="green" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
</svg>
  `;

  function emit_next() {
    show = false;
    dispatch("next", {});
  }
</script>

<!-- Put this part before </body> tag -->
<input
  type="checkbox"
  id="my-modal-2"
  class="modal-toggle"
  bind:checked={show}
/>
<div class="modal">
  <div class="modal-box max-w-md">
    <div class="flex flex-col items-center ">
      <div>{@html CUP}</div>
      <h1 class="mt-4 text-3xl font-bold text-white">Well Done!</h1>

      <div class="mt-2"><Rating {score} /></div>

      <p class="mt-2 px-4 text-sm text-center">
        You complete the challenge using {expressionCount} expression.
        <br />

        {#if score < 3}
          Try again with less code lines for more stars.
        {/if}
      </p>
    </div>

    <div class="modal-action">
      <label for="my-modal-2" class="btn btn-secondary btn-sm">Try again</label>
      <button on:click={emit_next} class="btn btn-primary btn-sm"
        >Next level</button
      >
    </div>
  </div>
</div>

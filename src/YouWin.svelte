<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let show = false;

  export let score = 2;

  const STAR_OUTLINE = `<svg style="width:40px;height:40px" viewBox="0 0 24 24">
  <path fill="#FB923C" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>`;

  const STAR_FULL = `<svg style="width:40px;height:40px" viewBox="0 0 24 24">
  <path fill="#FB923C" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>`;

  const CUP = `
    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z" />
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
<div class="modal w-16">
  <div class="modal-box max-w-screen-2xl">
    <div class="modal-action">
      <label for="my-modal-2" class="btn btn-secondary btn-sm">Try again</label>
      <button on:click={emit_next} class="btn btn-primary btn-sm"
        >Next level</button
      >
    </div>
  </div>
</div>

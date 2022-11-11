<script lang="ts">
  import Loading from "./Loading.svelte";

  export let loading: boolean = true;
  export let message: string;
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" checked={loading} />
<div class="modal backdrop-blur-sm backdrop-grayscale ">
  <div class="modal-box flex flex-col items-center gap-4">
    <h1 class="font-semibold text-2xl">Loading Python into your Browser</h1>

    <Loading />

    <span class="text-sm font-thin text-center">
      {message}
    </span>
  </div>
</div>

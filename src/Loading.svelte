<script lang="ts">
  export let loading: boolean = true;
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" checked={loading} />
<div class="modal backdrop-blur-sm backdrop-grayscale ">
  <div class="modal-box flex flex-col items-center">
    <button class="btn loading btn-ghost">loading</button>

    <span class="text-sm"
      >Please wait while Python is loading into your browser</span
    >
  </div>
</div>

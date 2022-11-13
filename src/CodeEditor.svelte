<script lang="ts">
  import { AceEditor } from "svelte-ace";
  import "brace/mode/python";
  import "brace/theme/cobalt";
  import ToolBar from "./ToolBar.svelte";
  import { createEventDispatcher } from "svelte";

  import { shortcut } from "./shortcut.js";

  const dispatch = createEventDispatcher();

  export let code = "";

  function emit_run(event) {
    dispatch("run", {
      code: code,
    });
  }
</script>

<ToolBar>
  <div class="flex justify-between items-center h-full p-2">
    <h2 class="flex-grow">Code editor</h2>

    <div class="mr-4 flex gap-1">
      <kbd class="kbd kbd-xs">shift</kbd>
      +
      <kbd class="kbd kbd-xs">Space</kbd>
    </div>

    <div>
      <button
        use:shortcut={{ shift: true, code: "Space" }}
        on:click={emit_run}
        class="btn btn-primary btn-sm "
        >Run
      </button>
    </div>
  </div>
</ToolBar>

<AceEditor
  width="100%"
  on:commandKey={(obj) => console.log(obj.detail)}
  options={{
    showPrintMargin: false,
    showLineNumbers: true,
    showGutter: true,
    enableBasicAutocompletion: true,
    highlightActiveLine: false,
    wrap: 200,
    fontSize: 20,
  }}
  lang="python"
  theme="cobalt"
  bind:value={code}
/>

<style>
  :global(.ace_content, .ace_scroller, .ace_gutter-layer, .ace_gutter, ace-cobalt) {
    background-color: hsl(var(--b1));
  }
</style>

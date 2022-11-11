<script lang="ts">
  import { AceEditor } from "svelte-ace";
  import "brace/mode/python";
  import "brace/theme/cobalt";
  import ToolBar from "./ToolBar.svelte";

  export let code = "";
</script>

<ToolBar>
  <div class="flex items-center h-full flex-row justify-between p-2">
    <h2>Console</h2>
    <button class="btn  btn-sm" on:click={() => (code = "")}> Clear </button>
  </div>
</ToolBar>

<AceEditor
  on:selectionChange={(obj) => console.log(obj.detail)}
  on:paste={(obj) => console.log(obj.detail)}
  on:input={(obj) => console.log(obj.detail)}
  on:focus={() => console.log("focus")}
  on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
  on:cut={() => console.log("cut")}
  on:cursorChange={() => console.log("cursor change")}
  on:copy={() => console.log("copy")}
  on:init={(editor) => console.log(editor.detail)}
  on:commandKey={(obj) => console.log(obj.detail)}
  on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
  on:blur={() => console.log("blur")}
  width="100%"
  height="100%"
  options={{
    showPrintMargin: false,
    showLineNumbers: false,
    showGutter: false,
    readOnly: true,
    enableBasicAutocompletion: true,
    highlightActiveLine: false,
    fontSize: 20,
  }}
  theme="cobalt"
  bind:value={code}
/>

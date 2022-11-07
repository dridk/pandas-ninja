<script lang="ts">
  import { AceEditor } from "svelte-ace";
  import "brace/mode/python";
  import "brace/theme/cobalt";
  import ToolBar from "./ToolBar.svelte"
  let text = "";
</script>


<ToolBar>
  <div class="flex">
    <h2>Code editor</h2>
  </div>
</ToolBar>


<AceEditor
  on:selectionChange={(obj) => console.log(obj.detail)}
  on:paste={(obj) => console.log(obj.detail)}
  on:input={(obj) => console.log(obj.detail)}
  on:focus={() => console.log('focus')}
  on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
  on:cut={() => console.log('cut')}
  on:cursorChange={() => console.log('cursor change')}
  on:copy={() => console.log('copy')}
  on:init={(editor) => console.log(editor.detail)}
  on:commandKey={(obj) => console.log(obj.detail)}
  on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
  on:blur={() => console.log('blur')}
  width='100%'
  height='100%'
  options={{
    showPrintMargin:false,
    showLineNumbers:false,
    showGutter:false,
    enableBasicAutocompletion: true,


  }}
  lang="python"
  theme="cobalt"
  value={text} />



  <style>
    
  
  :global(.ace_content,.ace_scroller){

      background-color: #2A303C;

  }


  </style>
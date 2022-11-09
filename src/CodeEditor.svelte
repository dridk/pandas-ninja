<script lang="ts">
  import { AceEditor } from "svelte-ace";
  import "brace/mode/python";
  import "brace/theme/cobalt";
  import ToolBar from "./ToolBar.svelte"


  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let code = ""



function emit_run(event) {

  dispatch("run", {
    code : code
  });


}



</script>


<ToolBar>
  <div class="flex justify-between items-center h-full p-2">
    <h2>Code editor</h2>


    <button on:click={emit_run} class="btn btn-primary btn-xs ">
  Run

</button>

  </div>
</ToolBar>


<AceEditor

  width='100%'
  height='100%'
  options={{
    showPrintMargin:false,
    showLineNumbers:true,
    showGutter:true,
    enableBasicAutocompletion: true,
    highlightActiveLine: false,
    fontSize: 20


  }}
  lang="python"
  theme="cobalt"
  bind:value={code}
   />



  <style>
    
  
  :global(.ace_content,.ace_scroller, .ace_gutter-layer){

      background-color: #2A303C;

  }


  </style>
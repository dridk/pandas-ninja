
<script lang="ts">

import Header from "./Header.svelte"
import ToolBar from "./ToolBar.svelte"
import DataFrame from "./DataFrame.svelte"

import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter"
import CodeEditor from "./CodeEditor.svelte"


let splitter_size = "5px";

</script>




<Header/>

<div class="wrapper">

  <Split splitterSize={splitter_size}>

    <svelte:fragment slot="primary">
      <Split horizontal splitterSize={splitter_size} >
        <div slot="primary" class="h-full">


          <CodeEditor/>


        </div>
        <div slot="secondary">

         <div class="tabs tabs-boxed">
  <a class="tab">Tab 1</a> 
  <a class="tab tab-active">Tab 2</a> 
  <a class="tab">Tab 3</a>
</div>




        </div>
      </Split>
    </svelte:fragment>  

    <svelte:fragment slot="secondary">
      <Split horizontal splitterSize={splitter_size} >
        <div slot="primary" class="h-full">


          <DataFrame title="Expected"/>

        </div>

        <div slot="secondary" class="h-full">
          <DataFrame title="Observed"/>


        </div>
      </Split>
    </svelte:fragment>

  </Split>




</div>
<style>


 .wrapper {

  height: 90vh;

}
</style>

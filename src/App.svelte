
<script lang="ts">

import Header from "./Header.svelte"
import ToolBar from "./ToolBar.svelte"
import DataFrame from "./DataFrame.svelte"

import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter"
import CodeEditor from "./CodeEditor.svelte"


import Perrine from "./Perrine.svelte"

</script>




<Header/>

<div class="wrapper">

  <Split splitterSize='1px'>

    <svelte:fragment slot="primary">
      <Split horizontal splitterSize='1px' >
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
      <Split horizontal splitterSize='1px' >
        <div slot="primary" class="h-full">


          <DataFrame/>

        </div>

        <div slot="secondary" class="h-full">
          <DataFrame/>


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

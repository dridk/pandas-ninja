
<script lang="ts">

import Header from "./Header.svelte"
import ToolBar from "./ToolBar.svelte"
import DataFrame from "./DataFrame.svelte"
import LogBox from "./LogBox.svelte"

import CodeEditor from "./CodeEditor.svelte"

import Grid from "./Grid.svelte"


</script>


<Header>

  
    <label for="my-drawer-4" 
    class="drawer-button btn btn-accent text-black btn-ghost font-medium gap-2">

    Challenge 1

  </label>
  

</Header>


<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->


<Grid>
  <CodeEditor slot="a"/>

  <LogBox slot="b" />
  <DataFrame title="Observered" slot="c"/>
  <DataFrame title="Expected" slot="d"/>




</Grid>


  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<style>



</style>

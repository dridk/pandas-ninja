
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
    class="drawer-button btn btn-primary btn-ghost">

      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>


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

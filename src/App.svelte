
<script lang="ts">

import Header from "./Header.svelte"
import ToolBar from "./ToolBar.svelte"
import DataFrame from "./DataFrame.svelte"
import LogBox from "./LogBox.svelte"

import CodeEditor from "./CodeEditor.svelte"
import YouWin from "./YouWin.svelte"
import Grid from "./Grid.svelte"

let pyodide = null;

async function main() {
  pyodide = await loadPyodide();
  // Pyodide is now ready to use...
  console.log(pyodide.runPython(`
    import sys
    sys.version
    `));
};


</script>



<svelte:head>

  <script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" on:load={main}></script>


</svelte:head>





<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->


<Header loading={pyodide == null}>
  <label for="my-drawer-4" 
  class="drawer-button btn btn-accent text-black btn-ghost font-medium gap-2">
  Challenge 1
</label>

</Header>

<YouWin/>


    <Grid>
      <CodeEditor slot="a"/>
      <LogBox slot="b" />
      <DataFrame title="Observered" slot="c"/>
      <DataFrame title="Expected" slot="d"/>
    </Grid>

    



  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>


    <ul class="menu bg-base-100 w-80 p-2 rounded-box">


<input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
      <li class="menu-title">
        <span>Easy</span>
      </li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>

      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li class="menu-title">
        <span>Medium</span>
      </li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>

      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>

      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>

      <li class="menu-title">
        <span>Hard</span>
      </li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>


    </ul>


  </div>



</div>


<style>



</style>

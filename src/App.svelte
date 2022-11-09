
<script lang="ts">
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import Header from "./Header.svelte"
import ToolBar from "./ToolBar.svelte"
import DataFrame from "./DataFrame.svelte"
import LogBox from "./LogBox.svelte"

import CodeEditor from "./CodeEditor.svelte"
import YouWin from "./YouWin.svelte"
import Grid from "./Grid.svelte"
import Console from "./Console.svelte"
import ChallengeList from "./ChallengeList.svelte"

let pyodide = null;
let loading = true;

let console_output = ""


//=========================================
function append_console(text:string)
{

  console_output = console_output + "\n"+  text;

}

//=========================================
async function main() {

  loading = true;
  pyodide = await loadPyodide({

    stdout: (text:string) => append_console(text),
    stderr: (text:string)=> append_console(text)

  });
  // Pyodide is now ready to use...
  console.log(pyodide.runPython(`
    import sys
    sys.version
    `));

  // Load Pandas 
  await pyodide.loadPackage(["pandas"]);

  // import pandas.. It takes times 
  pyodide.runPython(`import pandas as pd `);

  console.log("Pandas loaded")
  loading = false;
};

//=========================================

async function run_code(event) {

try {
    // Run code 
    let result = pyodide.runPython(event.detail.code);
    console.debug(result);

  }
  catch (err)
  {
    let message = ((err as Error).message);
    console.debug(message)
    append_console(message)
  }


}
//=========================================

async function load_challenges(){

 
    const octokit = new Octokit()
    const data = await octokit.request('GET /repos/dridk/pandas-ninja/contents/challenges')
    console.debug(data);

}



</script>



<svelte:head>

<!--   <script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" on:load={main}></script>
-->

</svelte:head>

<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    <!-- Page content here -->



    <Header loading={loading}>
      <label for="my-drawer-4" 
      class="drawer-button btn btn-accent text-black btn-ghost font-medium gap-2">
      Challenge 1
    </label>

  </Header>


  <Grid>
    <CodeEditor slot="a" on:run = {run_code}/>
    <Console bind:code={console_output} slot="b" />
    <DataFrame title="Observered" slot="c"/>
    <DataFrame title="Expected" slot="d"/>
  </Grid>

  

</div> 

<ChallengeList/>



</div>


<style>



</style>

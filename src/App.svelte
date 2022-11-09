
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

// Challenges 
let challenges = [];
let current_challenge = undefined;

$:current_index=undefined;
$:current_title = get_challenge(current_index)?.title ;
$:current_index && load_challenge();




//=========================================
function append_console(text:string)
{

  console_output = console_output + "\n"+  text;

}

//=========================================
function get_challenge(index){

  if (index < challenges.length) {
    return challenges[index];
  }
  return undefined;
}

//=========================================
async function main() {


/*  loading = true;
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
  loading = false;*/

  // Chargement des challenges 

  console.log("Truc")
  load_challenges();



}

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

 console.log("Load challenges");

 let response = await fetch("challenges.json");
 response.json().then((el)=>{


  challenges = el["data"];

  current_index = 0;

})


}

// ======================================

async function load_challenge()
{

  let file = get_challenge(current_index).file 

  let response = await fetch(`challenges/${file}`);
  response.json().then((el)=>{

    current_challenge = el;
    console.debug(current_challenge);

  })


}

//======================================

function next_level(){
  if (current_index < challenges.length -1 ) {
    current_index = current_index + 1;
  }
}

function previous_level(){
  if (current_index > 0 ) {
    current_index = current_index - 1;
  }
}




</script>



<svelte:head>

  <script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" on:load={main}></script>


</svelte:head>

<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    <!-- Page content here -->



    <Header
    on:left = {previous_level}
    on:right = {next_level}
    title = {current_title}
    >
    <label for="my-drawer-4" 
    class="drawer-button btn btn-accent text-black btn-ghost font-medium gap-2">
    Challenge {current_index+1}

  </label>

</Header>


<Grid>
  <CodeEditor slot="a" on:run = {run_code} code = {current_challenge?.placeholder}/>
  <Console bind:code={console_output} slot="b" />
  <DataFrame title="Input Data" slot="c" data={current_challenge?.expected}/>
  <DataFrame title="Expected Data" slot="d" data={current_challenge?.input}/>
</Grid>



</div> 

<ChallengeList bind:current_index={current_index} challenges={challenges}  />



</div>


<style>



</style>

<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import ToolBar from "./ToolBar.svelte";
  import DataFrame from "./DataFrame.svelte";
  import LogBox from "./LogBox.svelte";

  import CodeEditor from "./CodeEditor.svelte";
  import YouWin from "./YouWin.svelte";
  import Grid from "./Grid.svelte";
  import Console from "./Console.svelte";
  import ChallengeList from "./ChallengeList.svelte";

  /** ======================
   *      Interface
   *========================
   */

  // Challenge List Item
  interface ChallengeListItem {
    title: string;
    file: string;
    level: string;
    age: string;
  }

  // Challenge object
  interface Challenge {
    title: string;
    author: string;
    placeholder?: string;
    input: Array<Object>;
    expected: Array<Object>;
  }

  /** ======================
   *      Variables
   *========================
   */

  let challengeList: ChallengeListItem[] = [];
  let challengeListIndex: number;
  let currentChallenge: Challenge;

  $: current_title = getChallengeListItem(challengeListIndex)?.title;
  $: current_level = getChallengeListItem(challengeListIndex)?.level;

  let pyodide: any = null;
  let loading: boolean = true;
  let consoleOutput: string;
  let code: string;

  let computed_input: any = [];

  /** ======================
   *      Functions
   *========================
   */

  // Append text to console
  function appendConsole(text: string): void {
    consoleOutput = consoleOutput + "\n" + text;
  }

  // Clear console
  function clearConsole() {
    consoleOutput = "";
  }

  // Load challenges list
  async function loadChallengeList() {
    console.log("Load challenges List ");

    let response = await fetch("challenges.json");
    let el = await response.json();

    challengeList = el["data"];
    challengeListIndex = 4;

    await loadChallenge(challengeListIndex);

    return challengeList;
  }

  async function loadChallenge(index: number) {
    let file = getChallengeListItem(index)?.file;
    console.debug(file, challengeList);
    let response = await fetch(`challenges/${file}`);

    let el: Challenge = await response.json();

    currentChallenge = el;
    code = currentChallenge.placeholder || "";

    runCode();

    return el;
  }

  // Get a challengeListItem from index
  function getChallengeListItem(index: number): ChallengeListItem {
    if (index < challengeList.length) {
      return challengeList[index];
    }
    return undefined;
  }

  // Load Python
  async function loadPython() {
    loading = true;
    pyodide = await loadPyodide({
      stdout: (text: string) => appendConsole(text),
      stderr: (text: string) => appendConsole(text),
    });
    // Pyodide is now ready to use...
    console.log(
      pyodide.runPython(`
      import sys
      sys.version
      `)
    );

    // Load Pandas
    await pyodide.loadPackage(["pandas"]);

    // import pandas.. It takes times
    pyodide.runPython(`import pandas as pd `);

    console.log("Pandas loaded");

    await loadChallengeList();

    loading = false;
  }

  // Init function
  async function main() {
    console.log("Truc");
  }

  // run Code
  function runCode() {
    try {
      // Move JS code to Python
      clearConsole();
      pyodide.globals.set("raw_input", currentChallenge.input);

      // build pre-code and post-code
      const start_code = `import js\nimport ast\ndf = pd.DataFrame(raw_input.to_py())`;
      const end_code = `df = df.to_dict(orient="records")`;
      const intro_code = `line_number=len(ast.parse("""${code}""").body)`;

      // build all code
      let all_code =
        start_code + "\n" + code + "\n" + end_code + "\n" + intro_code;

      // run all_code
      pyodide.runPython(all_code);

      // get results
      let json_result = pyodide.globals.get("df");
      let line_number = pyodide.globals.get("line_number");
      computed_input = json_result.toJs({ dict_converter: Object.fromEntries });
    } catch (err) {
      let message = (err as Error).message;
      console.debug(message);
      appendConsole(message);
    }
  }

  // Next Level
  function nextLevel() {
    if (challengeListIndex < challengeList.length - 1) {
      challengeListIndex = challengeListIndex + 1;
      loadChallenge(challengeListIndex);
    }
  }

  // Previous level
  function previousLevel() {
    if (challengeListIndex > 0) {
      challengeListIndex = challengeListIndex - 1;
      loadChallenge(challengeListIndex);
    }
  }
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"
    on:load={loadPython}
  ></script>
</svelte:head>

<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    <!-- Page content here -->

    <Header
      on:left={previousLevel}
      on:right={nextLevel}
      title={current_title}
      level={current_level}
      {loading}
    >
      <label
        for="my-drawer-4"
        class="drawer-button btn btn-accent text-black btn-ghost font-medium gap-2"
      >
        Challenge {challengeListIndex + 1}
      </label>
    </Header>

    <Grid>
      <CodeEditor slot="a" on:run={runCode} bind:code />
      <Console bind:code={consoleOutput} slot="b" />
      <DataFrame title="Input Data" slot="c" data={computed_input} />
      <DataFrame
        title="Expected Data"
        slot="d"
        data={currentChallenge?.input}
      />
    </Grid>
  </div>

  <ChallengeList
    bind:current_index={challengeListIndex}
    challenges={challengeList}
  />
</div>

<style>
</style>

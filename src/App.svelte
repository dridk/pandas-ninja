<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import ToolBar from "./ToolBar.svelte";
  import DataFrame from "./DataFrame.svelte";
  import LogBox from "./LogBox.svelte";
  import Badge from "./Badge.svelte";

  import CodeEditor from "./CodeEditor.svelte";
  import YouWin from "./YouWin.svelte";
  import Grid from "./Grid.svelte";
  import Console from "./Console.svelte";
  import ChallengeList from "./ChallengeList.svelte";
  import Loading from "./Loading.svelte";

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
  $: current_file = getChallengeListItem(challengeListIndex)?.file;
  $: challengeListIndex && loadChallenge(challengeListIndex);

  let pyodide: any = null;
  let loading: boolean = true;
  let consoleOutput: string;
  let code: string;
  let won: boolean = false;
  let score: number = 0;

  let computed_input: any = [];
  let computed_input_str: any = [];

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
    challengeListIndex = 0;

    await loadChallenge(challengeListIndex);

    return challengeList;
  }

  async function loadChallenge(index: number) {
    console.log(index, challengeList);
    let file = getChallengeListItem(index)?.file;

    console.debug(index, file, challengeList);

    let response = await fetch(`challenges/${file}`);

    let el: Challenge = await response.json();

    currentChallenge = el;
    code = currentChallenge.placeholder || "";

    runCode();
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
      won = false;
      score = 0;
      pyodide.globals.set("raw_input", currentChallenge.input);

      // build pre-code and post-code
      const start_code = `import js\nimport ast\ndf = pd.DataFrame(raw_input.to_py())`;
      const end_code = `df_str = df.astype(str).to_dict(orient="records")\ndf = df.to_dict(orient="records")`;
      const intro_code = `line_number=len(ast.parse("""${code}""").body)`;

      // build all code
      let all_code =
        start_code + "\n" + code + "\n" + end_code + "\n" + intro_code;

      console.debug(all_code);

      // run all_code
      pyodide.runPython(all_code);

      // get results
      let json_result = pyodide.globals.get("df");
      let json_result_str = pyodide.globals.get("df_str");
      let line_number = pyodide.globals.get("line_number");

      if (line_number == 0 || line_number > 3) score = 0;
      else score = 4 - line_number;

      console.debug("LINE NUMBER", line_number);

      computed_input = json_result.toJs({ dict_converter: Object.fromEntries });
      computed_input_str = json_result_str.toJs({
        dict_converter: Object.fromEntries,
      });

      // check victories
      checkVictory();
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

  // Check victory
  function checkVictory() {
    console.debug("COMPUTED ", JSON.stringify(computed_input));
    console.debug("EXPECTED ", JSON.stringify(currentChallenge.expected));

    if (
      JSON.stringify(computed_input) ==
      JSON.stringify(currentChallenge.expected)
    ) {
      console.debug("WIN !!!!!!!!!!");

      localStorage.setItem(current_file, "true");

      won = true;
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
      file={current_file}
      {loading}
    >
      <label
        for="my-drawer-4"
        class="drawer-button btn btn-primary text-black btn-outline font-medium gap-2"
      >
        Challenge {challengeListIndex + 1}
      </label>
    </Header>

    <Loading {loading} />

    <YouWin show={won} {score} on:next={nextLevel} />

    <Grid>
      <CodeEditor slot="a" on:run={runCode} bind:code />
      <Console bind:code={consoleOutput} slot="b" />
      <DataFrame title="Input Data" slot="c" data={computed_input_str} />
      <DataFrame
        title="Expected Data"
        slot="d"
        data={currentChallenge?.expected}
      />
    </Grid>
    <p
      class="font-mono text-xs text-right bg-base-300 pt-1  border-t-2 border-base-300 px-2"
    >
      Created by <a href="https://github.com/dridk">@dridk</a> &
      <a href="https://github.com/SteampunkIslande">@SteampunkIslande</a>
    </p>
  </div>

  <ChallengeList
    bind:current_index={challengeListIndex}
    challenges={challengeList}
  />
</div>

<style>
</style>

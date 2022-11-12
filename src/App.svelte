<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import ToolBar from "./ToolBar.svelte";
  import DataFrame from "./DataFrame.svelte";
  import LogBox from "./LogBox.svelte";
  import Badge from "./Badge.svelte";

  import CodeEditor from "./CodeEditor.svelte";
  import Grid from "./Grid.svelte";
  import Console from "./Console.svelte";
  import ChallengeList from "./ChallengeList.svelte";
  import Drawer from "./Drawer.svelte";
  import VictoryDialog from "./VictoryDialog.svelte";
  import LoadingDialog from "./LoadingDialog.svelte";
  import Loading from "./Loading.svelte";

  /** ======================
   *      Interface
   *========================
   */

  // Challenge from from Challenge List
  interface Challenge {
    title: string;
    file: string;
    level: string;
    rating: number;
  }

  // Challenge object
  interface ChallengeDetail {
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

  // List of challenges
  let challenges: Challenge[] = [];

  // currenge challenge
  let challenge: Challenge;

  // current challenge details
  let challengeDetail: ChallengeDetail;

  // Index of current challenge
  let challengeIndex: number;
  $: {
    loadChallengeDetail(challengeIndex);
  }

  // Python handle
  let pyodide: any = null;

  // console output
  let consoleOutput: string;

  // codeEditor content
  let code: string;

  // Display Loading modal box
  let loading: boolean = true;

  // Loading message
  let loadingMessage: string = "Loading your Sensei";

  // display Win modal box
  let won: boolean = false;

  // Win score
  let score: number = 0;

  // expression number
  let expressionCount: number;

  // Drawer pen
  let show_drawer: boolean = false;

  // Computed dataframe
  let computed_input: any = [];

  // Computed dataframe as string
  let computed_input_str: any = [];

  /** ======================
   *      Functions
   *========================
   */

  // ------------------------------------------------------
  // Append text to console
  // ------------------------------------------------------

  function appendConsole(text: string): void {
    consoleOutput = consoleOutput + "\n" + text;
  }

  // ------------------------------------------------------
  // Clear console
  // ------------------------------------------------------
  function clearConsole() {
    consoleOutput = "";
  }

  // ------------------------------------------------------
  // Load all challenges from challenges.json
  // ------------------------------------------------------
  async function loadChallenges() {
    console.log("Load challenges List ");
    loadingMessage = "Loading Challenges";

    challenges = [];
    try {
      let response = await fetch("challenges.json");
      let el = await response.json();
      challenges = el["data"] ?? [];

      // get All rating
      challenges.map((x) => (x.rating = getRating(x.file)));
    } catch (error) {
      console.error("Cannot load challenges.json");
    }
  }

  // ------------------------------------------------------
  // Get a Challenge from index
  // ------------------------------------------------------
  function getChallenge(index: number): Challenge {
    if (index < challenges.length) {
      return challenges[index];
    }
  }
  // ------------------------------------------------------
  // set a Challenge from index
  // ------------------------------------------------------
  function setChallenge(index: number): void {
    challengeIndex = index;
  }
  // ------------------------------------------------------
  // Load a Challenge detail from specific index
  // ------------------------------------------------------
  async function loadChallengeDetail(index: number) {
    challenge = getChallenge(challengeIndex);
    let file = challenge?.file;

    if (!file) {
      console.error("no file specified");
      throw Error("Cannot get challenge file");
    }

    try {
      console.log("Load challenge details", file);
      let response = await fetch(`challenges/${file}`);
      challengeDetail = await response.json();
      code = challengeDetail.placeholder ?? "";
      runCode();
    } catch (error) {
      console.error("Cannot load challenge detail", file);
    }
  }

  // ------------------------------------------------------
  // get Rating from local Storage
  // ------------------------------------------------------
  function getRating(file: string): number {
    let value = localStorage.getItem(file) ?? "-1";
    console.debug("RATING", value, file);
    return parseInt(value);
  }
  // ------------------------------------------------------
  // Load Python
  // ------------------------------------------------------
  async function loadPython() {
    loading = true;

    loadingMessage = "Loading Pyodide script ...";

    pyodide = await loadPyodide({
      stdout: (text: string) => appendConsole(text),
      stderr: (text: string) => appendConsole(text),
    });
    // Pyodide is now ready to use...
    let python_version = pyodide.runPython(`
    import sys
    sys.version
    `);

    console.log(python_version);
    appendConsole(python_version);

    // Load Pandas
    loadingMessage = "Loading Pandas";
    await pyodide.loadPackage(["pandas"]);

    // import pandas.. It takes times
    pyodide.runPython(`import pandas as pd `);

    console.log("Pandas loaded");
    appendConsole("Pandas Loaded");
  }

  // ------------------------------------------------------
  // Init function at startup
  // ------------------------------------------------------

  async function main() {
    loading = true;
    await loadPython();
    await loadChallenges();

    challengeIndex = 0;
    loading = false;
  }

  // ------------------------------------------------------
  // run Code
  // ------------------------------------------------------
  function runCode() {
    try {
      // Move JS code to Python
      clearConsole();
      won = false;
      score = 0;
      pyodide.globals.set("raw_input", challengeDetail.input);

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
      expressionCount = pyodide.globals.get("line_number");

      if (expressionCount == 0 || expressionCount > 3) score = 0;
      else score = 4 - expressionCount;

      console.debug("LINE NUMBER", expressionCount);

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

  // ------------------------------------------------------
  // Next Level
  // ------------------------------------------------------

  function nextLevel() {
    if (challengeIndex < challenges.length - 1) {
      challengeIndex = challengeIndex + 1;
      loadChallengeDetail(challengeIndex);
    }
  }

  // ------------------------------------------------------
  // Previous Level
  // ------------------------------------------------------
  function previousLevel() {
    if (challengeIndex > 0) {
      challengeIndex = challengeIndex - 1;
      loadChallengeDetail(challengeIndex);
    }
  }

  // ------------------------------------------------------
  // Check victory
  // ------------------------------------------------------
  function checkVictory() {
    console.debug("COMPUTED ", JSON.stringify(computed_input));
    console.debug("EXPECTED ", JSON.stringify(challengeDetail.expected));

    if (
      JSON.stringify(computed_input) == JSON.stringify(challengeDetail.expected)
    ) {
      console.debug("WIN !!!!!!!!!!");

      localStorage.setItem(challenge?.file, score.toString());
      won = true;
      challenge.rating = score;
    }
  }
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"
    on:load={main}
  ></script>
</svelte:head>

<!-- Modal Dialog  -->
<LoadingDialog {loading} message={loadingMessage} />
<VictoryDialog show={won} {score} {expressionCount} on:next={nextLevel} />

<Drawer show={show_drawer}>
  <svelte:fragment slot="content">
    <Header
      on:left={previousLevel}
      on:right={nextLevel}
      on:menu={() => (show_drawer = !show_drawer)}
      title={challenge?.title}
      level={challenge?.level}
      file={challenge?.file}
      rating={challenge?.rating}
      index={challengeIndex}
      {loading}
    />

    <Grid>
      <CodeEditor slot="a" on:run={runCode} bind:code />
      <Console bind:code={consoleOutput} slot="b" />
      <DataFrame title="Input Data" slot="c" data={computed_input_str} />
      <DataFrame
        title="Expected Data"
        slot="d"
        data={challengeDetail?.expected}
      />
    </Grid>
  </svelte:fragment>

  <svelte:fragment slot="sidebar">
    <ChallengeList bind:current_index={challengeIndex} {challenges} />
  </svelte:fragment>
</Drawer>

<!-- 




<Grid>
  <CodeEditor slot="a" on:run={runCode} bind:code />
  <Console bind:code={consoleOutput} slot="b" />
  <DataFrame title="Input Data" slot="c" data={computed_input_str} />
  <DataFrame title="Expected Data" slot="d" data={challengeDetail?.expected} />
</Grid>
<p
  class="font-mono text-xs text-right bg-base-300 pt-1  border-t-2 border-base-300 px-2"
>
  Created by <a href="https://github.com/dridk">@dridk</a> &
  <a href="https://github.com/SteampunkIslande">@SteampunkIslande</a>
  {__APP_VERSION__}
</p> -->
<style>
</style>

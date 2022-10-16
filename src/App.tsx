import * as React from "react"
import {
  ChakraProvider,
  Button,
  Container,
  Skeleton,
  useBoolean,
  useDisclosure,
  Box,
} from "@chakra-ui/react"

import theme from "./theme"
import { NavBar } from "./NavBar";
import { ChallengesDrawer } from "./ChallengesDrawer";

import { Allotment } from "allotment";
import { EditorBox } from "./EditorBox";
import { LogBox } from "./LogBox";
import { DataFrame } from "./DataFrame";
import { Octokit } from "octokit"



import "allotment/dist/style.css";

import {ChallengeFile, Challenge} from "./interfaces"


let pyodide:any = undefined;
declare const window: any;


let global_stdout:string = "";

let current_input: [] = []



export function App()
{
  
  // function load challenges
  async function load_challenges() {
    
    const octokit = new Octokit()
    const data = await octokit.request('GET /repos/dridk/pandas-ninja/contents/challenges')
    let challenges = data["data"].map((el:ChallengeFile)=>{
      
      return {
        name: el["name"], 
        download_url: el["download_url"]
      }
    })
    return challenges
  }
  
  // function load challenge
  async function open_challenge(url:string){
    console.debug("open challenge")
    console.debug(url)
    let response = await fetch(url);
    response.json().then((el:Challenge)=>{
    
      current_input = el.input;
      setCurrentChallenge(el) 

      setCode(`# Change the current \`df\` dataframe\n# to make it as the same as expected\ndf`)
      run_code()
      

  })
  }

  // append stdout 
  function append_stdout(text:string)
  {
    global_stdout = global_stdout + "\n" + text
    console.debug(global_stdout)
    setStdout(global_stdout)
  }


  // function load Python 
  async function load_python(){

    console.debug("Chargement de Python")
    setLoading(true)

    pyodide = await window.loadPyodide({
      stdout: (text:string) => append_stdout(text),
      stderr: (text:string)=> setStdErr(text )

    });
    console.log(pyodide.runPython(`
        import sys
        sys.version
    `));

    await pyodide.loadPackage(["pandas"]);

    setLoading(false)

    return true
  }


   // Run python code
  function run_code(){

    
    setStdErr("")
    setTabIndex(0)

    console.debug(code)

    try {
    
    let input:[] = current_input
    console.debug("input" + input)

   
    const df_input = JSON.stringify(input)
    const start_code = `import pandas as pd\ndf = pd.DataFrame(${df_input})`
    const end_code = "df.to_json(orient='records')"
    const all_code = start_code + "\n" + code + "\n" + end_code

    let json_result = pyodide.runPython(all_code);
    json_result = JSON.parse(json_result)
    setComputedData(json_result)
   

    }

    catch (err)
    {
      let message = ((err as Error).message);
      console.debug(message)
      setStdErr(message)
      setTabIndex(1)
    }


   }
  
  
  
  
  
  // Keep Dark always
  React.useEffect(() => { localStorage.removeItem("chakra-ui-color-mode"); }, []);
  


  // State variable 
  const  drawerFlag = useDisclosure()
  const [challengeFiles, setChallengeFiles] = React.useState<ChallengeFile[]>([])
  const [currentChallenge, setCurrentChallenge] = React.useState<Challenge>()
  const [loading, setLoading] = React.useState<boolean>(true)

  const [computedData, setComputedData] = React.useState([])

  const [code, setCode] = React.useState<string>("");
  const [stdout, setStdout] = React.useState<string>();
  const [stderr, setStdErr] = React.useState<string>();
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  // init application 
  React.useEffect(()=> {
    
    // Chargement de Python 
    load_python().then((e)=>{console.debug("Success")})

    // Load menu 
    load_challenges().then((files)=>setChallengeFiles(files))

    console.debug("salut\nboby")

    
    
  }, [])

  
  
  
  return (
    <ChakraProvider theme={theme} >



    <NavBar 
    title={currentChallenge?.name ?? "Not Set"} 
    description={currentChallenge?.description ?? ""}
    onDrawerClicked={drawerFlag.onOpen} 
    loading = {loading} />
    
    <ChallengesDrawer
    isOpen={drawerFlag.isOpen} 
    onClose={drawerFlag.onClose}
    challenges={challengeFiles}
    openChallenge={open_challenge}
    />
    
    
    <Box  height="92vh">
    
    <Allotment>
    <Allotment vertical={true}>
    
    <EditorBox 
    code={code}
    onCodeChanged={setCode}
    onRun={()=>run_code()} 
    
    />
    <LogBox stderr={stderr} stdout={stdout} index={tabIndex} onIndexChanged={setTabIndex}/>
    </Allotment>
    
    <Allotment vertical={true}>
    <DataFrame title="Input table" data={computedData}/>
    <DataFrame title="Expected table"  data={currentChallenge?.expected ?? []}/>
    </Allotment>
    
    </Allotment>
    
    </Box>
    </ChakraProvider>
    )
    
  }
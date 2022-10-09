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
    response.json().then((el:Challenge)=>(

      setCurrentChallenge(el)

    ))
  }
  
  
  
  
  
  // Keep Dark always
  React.useEffect(() => { localStorage.removeItem("chakra-ui-color-mode"); }, []);
  
  
  // State variable 
  const  drawerFlag = useDisclosure()
  const [challengeFiles, setChallengeFiles] = React.useState<ChallengeFile[]>([])
  const [currentChallenge, setCurrentChallenge] = React.useState<Challenge>()

  // init application 
  React.useEffect(()=> {
    
    // Load menu 
    load_challenges().then((files)=>setChallengeFiles(files))
    
    
    
  }, [])
  
  
  return (
    <ChakraProvider theme={theme} >
    
    <NavBar 
    title={currentChallenge?.name ?? "Not Set"} 
    description={currentChallenge?.description ?? ""}
    onDrawerClicked={drawerFlag.onOpen}  />
    
    <ChallengesDrawer
    isOpen={drawerFlag.isOpen} 
    onClose={drawerFlag.onClose}
    challenges={challengeFiles}
    openChallenge={open_challenge}
    />
    
    
    <Box  height="100vh">
    
    <Allotment>
    <Allotment vertical={true}>
    
    <EditorBox/>
    
    <LogBox/>
    </Allotment>
    
    <Allotment vertical={true}>
    <DataFrame title="Input table" data={currentChallenge?.input ?? []}/>
    <DataFrame title="Expected table"  data={currentChallenge?.expected ?? []}/>
    </Allotment>
    
    </Allotment>
    
    </Box>
    </ChakraProvider>
    )
    
  }
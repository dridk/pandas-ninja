import * as React from "react"
import {
  ChakraProvider,
  Button,
  Container,
  Box,
} from "@chakra-ui/react"

import theme from "./theme"
import { NavBar } from "./NavBar";

import { Allotment } from "allotment";
import { EditorBox } from "./EditorBox";
import { LogBox } from "./LogBox";
import { DataFrame } from "./DataFrame";


import "allotment/dist/style.css";


export function App()
{
  
  // Keep Dark always
  React.useEffect(() => { localStorage.removeItem("chakra-ui-color-mode"); }, []);
  
  return (
    <ChakraProvider theme={theme}>
    
    <NavBar title="Challenge 3" description="Sort fields by something "/>
    
    <Box  height="100vh">
    
    <Allotment>
      <Allotment vertical={true}>
        <EditorBox/>
        <LogBox/>
    </Allotment>

    <Allotment vertical={true}>
        <DataFrame title="Input table"/>
        <DataFrame title="Expected table"/>
    </Allotment>
    
    </Allotment>
    
    </Box>
    </ChakraProvider>
    )
    
  }
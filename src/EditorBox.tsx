import * as React from "react"
import {
    Box,
    Button,
    Stack,
    Spacer,
    Divider,
    Tooltip,
    HStack,
    Icon,
    VStack,
    propNames
} from "@chakra-ui/react"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import { FaPlay } from 'react-icons/fa';
import { ToolBar } from "./ToolBar";

import { EditorBoxProps } from "./interfaces";
import { Kbd } from '@chakra-ui/react'


export function EditorBox(props:EditorBoxProps)
{

    return (
        
        <>

        <Stack spacing={0}>

        <ToolBar>

        {/* <span><Kbd>shift</Kbd> + <Kbd>C</Kbd></span> */}
        <Tooltip hasArrow label='Execute your current code' fontSize='md'>

        <Button 
        onClick={()=>props.onRun?.()}
        size="xs"
        variant="ghost"
        leftIcon=<Icon as={FaPlay}/> >Run codes</Button>
</Tooltip>

        </ToolBar>
            
            
            <Divider />

        <AceEditor
        mode="python"
        theme="solarized_dark"
        name="blah2"
        fontSize={14}
        width="100vw"
        height="100vh"
        value={props.code}
        style={{backgroundColor:"#1A202C"}}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={false}
        onChange={(code)=>props.onCodeChanged?.(code)}
        
        setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
            
        }}/>
        </Stack>
        </>
        
        
        )
        
    }
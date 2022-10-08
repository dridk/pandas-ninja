import * as React from "react"
import {
    Box,
    Button,
    Stack,
    Spacer,
    Divider,
    HStack,
    Icon,
    VStack
} from "@chakra-ui/react"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import { FaPlay } from 'react-icons/fa';

import { ToolBar } from "./ToolBar";

export function EditorBox()
{
    
    return (
        
        <>

        <Stack spacing={0}>

        <ToolBar>
        <Button size="xs" variant="ghost" leftIcon=<Icon as={FaPlay} />>Run code</Button>

        </ToolBar>
            
            
            <Divider />

        <AceEditor
        mode="python"
        theme="solarized_dark"
        name="blah2"
        fontSize={14}
        width="100vw"
        height="100vh"
        value="234"
        style={{backgroundColor:"#1A202C"}}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={false}
        //onChange={onChange}
        
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
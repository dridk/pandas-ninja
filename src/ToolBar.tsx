import * as React from "react"
import {
    Box,
    Button,
    Stack,
    Spacer,
    Divider,
    Heading,
    HStack,
    Icon,
    VStack
} from "@chakra-ui/react"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import { FaPlay } from 'react-icons/fa';

interface ToolBarProps {
    title?:string,
    children: JSX.Element | JSX.Element[]
}

export function ToolBar(props:ToolBarProps)
{
    
    return (
        <>
            <Box  p={2}>
               <HStack>
                <Heading as="h3" size='sm'>{props.title}</Heading>
                <Spacer/>
                {props.children}
               </HStack>
            </Box>

        </>
        )
}
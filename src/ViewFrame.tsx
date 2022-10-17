
import * as React from "react"
import {Box, Text, Button, Switch, HStack, Stack, Divider,Icon, IconButton, Tooltip} from "@chakra-ui/react"
import {} from '@chakra-ui/react'
import { TextFrame } from "./TextFrame"
import { ToolBar } from "./ToolBar"
import { useBoolean } from '@chakra-ui/react'
import { DataFrame } from "./DataFrame"

import { FaRegCopy } from 'react-icons/fa';


interface Props {

    data: any,
    title:string
}

export function ViewFrame(props: Props)
{

    const [showText, setShowText] = useBoolean(true)

    return (
        <>

        <ToolBar title={props.title}>
        <Stack align="center"  justify="center" direction="row">
        
        <Tooltip hasArrow label='Copy dataframe to your clipboard' fontSize='md'>

        <Button 
        size="xs"
        variant="ghost"
        leftIcon=<Icon as={FaRegCopy}/> >To Clipboard</Button>
        </Tooltip>

        <Switch size='md' isChecked={showText} onChange={setShowText.toggle} />
        </Stack>
        </ToolBar>

        <Divider/>

        {showText  
        
        ? <TextFrame data={props.data}/>
            
        : <DataFrame data={props.data}/>
        }
        
        </>
        )


}
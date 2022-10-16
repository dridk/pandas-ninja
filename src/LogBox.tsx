import * as React from "react"
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Text, Code, Textarea
} from "@chakra-ui/react"

import { LogBoxProps } from "./interfaces"

export function LogBox(props: LogBoxProps)
{

   
    return (
        <Tabs index={props.index ?? 0} onChange={(index)=>props.onIndexChanged?.(index)}>
        <TabList>
        <Tab>Console</Tab>
        <Tab>Problems</Tab>
        </TabList>
        
        <TabPanels>
        <TabPanel >

        <Text 
            as="p"
            display="block"
            whiteSpace="pre"
            fontFamily="mono"
            children = {props.stdout}
        />        


        </TabPanel>
        <TabPanel >
        <Text 
            as="p"
            display="block"
            whiteSpace="pre"
            children = {props.stderr}
            
        
        />

        </TabPanel>
        </TabPanels>
        </Tabs>
        )
        
    }
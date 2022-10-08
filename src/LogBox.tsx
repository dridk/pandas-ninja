import * as React from "react"
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Text
} from "@chakra-ui/react"


export function LogBox()
{
    
    return (
        <Tabs>
        <TabList>
        <Tab>Console</Tab>
        <Tab>Problems</Tab>
        </TabList>
        
        <TabPanels>
        <TabPanel>
        <Text  variant="unstyled"> sdfsf </Text>
        </TabPanel>
        <TabPanel>
        <Text  variant="unstyled"> sdfsf </Text>
        </TabPanel>
        </TabPanels>
        </Tabs>
        )
        
    }
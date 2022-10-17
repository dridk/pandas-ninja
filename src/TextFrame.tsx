import * as React from "react"
import {Box, Text, Button} from "@chakra-ui/react"
declare const window: any;


interface Props {
    data?: any
    
}



function to_string(data:any){
    
    if (data.length > 0)
    {
        const df_input = JSON.stringify(data)
        const code = `str(pd.DataFrame(${df_input}))`
        let result = window.pyodide.runPython(code)
        return result
    }

    return ""
}

export function TextFrame(props:Props)
{
    
    let data = props.data ?? [];
    
    
    return (
        <Box height="100%" overflowY="auto" m={5}>
        
        <Text 
        as="p"
        display="block"
        whiteSpace="pre"
        fontFamily="mono"
        children = {to_string(data)}
        />        
        
        
        </Box>)
        
        
    }
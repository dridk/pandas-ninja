import * as React from "react"
import {
    Button,
    Icon,
    Divider,
    keyframes, usePrefersReducedMotion
} from "@chakra-ui/react"

import { ToolBar } from "./ToolBar"
import { FaRegCopy } from 'react-icons/fa';

import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'


import { DataFrameProps } from "./interfaces";
import { type } from "os";

export function DataFrame(props:DataFrameProps)
{
    
    // const data:any[] = [];
    // for (let i=0; i<10; ++i)
    // data.push({name:"boby", age:42})
    // const keys = Object.keys(data[0])
    
    const data = props.data
    //const keys = Object.keys(data[0])
    
    return (
        
        <>
        <ToolBar title={props.title}>
        <Button 
        size="xs" 
        variant="ghost" leftIcon=<Icon as={FaRegCopy}/>>Copy to clipboard</Button>
        
        </ToolBar>
        
        <Divider/>
        <Box  padding={4} borderWidth={1} height="100%" borderColor="red">
        <Box overflowY="auto" maxHeight="300px">
        <Table>
        {/* <Thead position="sticky" top={0}>
        <Tr>
        {keys.map((i)=>(
            <Th>{i}</Th>
            ))}
            </Tr>
        </Thead> */}
        <Tbody>
        
        {
            data.map((line:Object)=>{
                let rows:JSX.Element[] = [];
                rows = Object.values(line).map((el)=>(<Td>{el}</Td>))
                return [<Tr> {rows} </Tr>]
                
            })
            
            
        }
        

        </Tbody>
        </Table>
        </Box>
        </Box>
        
        </>
        
        
        )
        
    }
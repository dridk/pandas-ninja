import * as React from "react"
import {
    Button,
    Icon,
    Divider
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


interface DataFrame{
    title:string
}


export function DataFrame(props:DataFrame)
{
    
    const data:any[] = [];
    for (let i=0; i<10; ++i)
    data.push({name:"boby", age:42})
    const keys = Object.keys(data[0])
    
    return (
        
        <>
        <ToolBar title={props.title}>
        <Button size="xs" variant="ghost" leftIcon=<Icon as={FaRegCopy} />>Copy to clipboard</Button>
        
        </ToolBar>
        
        <Divider/>
        <Box padding={4}>
        <Box overflowY="auto" maxHeight="300px">
        <Table>
        <Thead position="sticky" top={0}>
        <Tr>
        {keys.map((i)=>(
            <Th>{i}</Th>
            ))}
            </Tr>
            </Thead>
            <Tbody>
            {data.map((item:any) => (
                <Tr>
                <Td>{item["name"]}</Td>
                <Td>{item["age"]}</Td>
                
                </Tr>
                ))}
                </Tbody>
                </Table>
                </Box>
                </Box>
                
                </>
                
                
                )
                
            }
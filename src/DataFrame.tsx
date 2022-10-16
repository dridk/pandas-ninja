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
    
    let data = props.data ?? [];
    let header:string[] = data.length > 0 ? Object.keys(data[0]) : []
    
    return (
        
        <>
        <ToolBar title={props.title}>
        <Button 
        size="xs" 
        variant="ghost" leftIcon=<Icon as={FaRegCopy}/>>Copy to clipboard</Button>
        
        </ToolBar>
        
        <Divider/>
        <Box height="100%" >

        <TableContainer maxHeight="100%" overflowY="auto">
        <Table variant='striped' size='sm' colorScheme="gray">
        <Thead position="sticky">
        <Tr>
        {header.map((i)=>(
            <Th>{i}</Th>
            ))}
            </Tr>
        </Thead> 
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
        </TableContainer>
        </Box>
        
        </>
        
        
        )
        
    }
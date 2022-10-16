import * as React from "react"

import {
    Box,
    Text,
    Button,
    HStack,
    Heading,
    Spacer,
    IconButton,
    Icon,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Divider,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    
} from "@chakra-ui/react"

import { ChevronLeftIcon,ChevronRightIcon,HamburgerIcon} from '@chakra-ui/icons'
import { FaPython } from 'react-icons/fa';


interface NavBarProps {
    title: string
    description: string
    loading?: boolean
    onDrawerClicked?: ()=>void

}

export function NavBar({title, description,loading=true,onDrawerClicked}:NavBarProps) {
    


    
    return (
        
        <>
        <Box  boxShadow="base"  p="2">
        
        <HStack spacing={0}>
        <Heading size="md" fontWeight="lighter" letterSpacing={1} >Nidja</Heading>
        <Heading size="md" fontWeight="extrabold">Pandas</Heading>
        
        <Spacer/>
        <Heading size="md"> {title} </Heading>
        <Text pl={2} color="brand"> {description} </Text>
        <Spacer/>
        <HStack>
        <Button isLoading={loading} hidden={!loading} loadingText='Loading Python' colorScheme='teal' variant='outline' spinnerPlacement='start'/>
        <Button colorScheme='teal' variant="outline" size ="md" rightIcon={<ChevronRightIcon />} >Next Level </Button>

        <IconButton onClick={()=>onDrawerClicked?.()} size="md" variant="outline" aria-label='Menu' icon={<HamburgerIcon />} />
        </HStack>
        

        </HStack>
        </Box>

        <Divider />
        
        </>
        
        
        )
        
        
        
    }
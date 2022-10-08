import * as React from "react"

import {
    Box,
    Text,
    Button,
    HStack,
    Heading,
    Spacer,
    IconButton,
    
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


interface NavBarProps {
    title: string
    description: string
}

export function NavBar({title, description}:NavBarProps) {
    


    
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
        
        <Button colorScheme='teal' variant="outline" size ="md" rightIcon={<ChevronRightIcon />} >Next Level </Button>

        <IconButton size="md" variant="outline" aria-label='Menu' icon={<HamburgerIcon />} />
        </HStack>
        

        </HStack>
        </Box>

        <Divider />
        
        </>
        
        
        )
        
        
        
    }
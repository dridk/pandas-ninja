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
    
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Link,
    
} from "@chakra-ui/react"


import { Octokit } from "octokit"

import {ChallengeFile} from "./interfaces"

interface DrawerProps {
    isOpen: boolean,
    challenges: ChallengeFile[],
    onClose: ()=>void ,
    openChallenge:(url:string)=>void

}

export function ChallengesDrawer({isOpen, onClose, challenges, openChallenge}:DrawerProps) {
    


    return (
        <>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>List of Challenge</DrawerHeader>
        
        <DrawerBody>
        <List spacing={3}>
        {challenges.map((value)=>(

           //const {name, download_url} = el;

           <ListItem>
            <Link onClick={()=>openChallenge(value.download_url)}>{value.name}</Link >
            </ListItem>

        ))}

        </List>
        
        </DrawerBody>
        
        <DrawerFooter>

        <Button variant='outline' mr={3} onClick={onClose}  >
              Cancel
            </Button>
        </DrawerFooter>
        
        </DrawerContent>
        </Drawer>
        
        
        
        </>
        
        )
        
    }
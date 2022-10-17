import { StarIcon } from "@chakra-ui/icons"
import { Modal, ModalOverlay, useDisclosure, Text, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, HStack } from "@chakra-ui/react"
import * as React from "react"


interface WinDialog {
    isOpen : boolean,
    onClose?: () => void
}
export function WinDialog(props:WinDialog)
{

    return (<>
    <Modal isOpen={props.isOpen} onClose={()=> props.onClose?.()} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Victory !! </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Text> Congratulation, you resolve the problem </Text>
        <HStack mt={5}>
    
    
     <StarIcon w={5} h={5} color="yellow"/>
     <StarIcon w={5} h={5} color="yellow"/>
     <StarIcon w={5} h={5}/>
     <StarIcon w={5} h={5}/>

    
</HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={()=>props.onClose?.()}>



            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>)
}
import * as React from "react"
import {
  ChakraProvider,
  Button,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>

  <Button></Button>

  </ChakraProvider>
)

import React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

function Layout(props) {
  return (
    <Box>
      <Header />
      <Box as="main" mt={"75"}>
        {props.children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
import React from "react"
import {
  chakra,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Spacer,
  Heading,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { Link as GatsbyLink } from "gatsby"
import Container from "./Container"
import Logo from "./Logo"

const Header = props => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const bg = useColorModeValue("white", "gray.700")

  return (
    <chakra.header
      top="0"
      position="fixed"
      zIndex="30"
      bg={bg}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      {...props}
    >
      <Container pt={0} px={0} mt="0" height="auto" mx="auto" minHeight="0">
        <Flex
          w="100%"
          h="100%"
          py={3}
          px={5}
          align="center"
          justify="space-between"
        >
          <Flex align="center">
            <GatsbyLink to="/" aria-label="Home Page">
              <Logo />
              <chakra.span sx={{ display: "none" }}>Homepage</chakra.span>
            </GatsbyLink>
            <Heading ml={5} as="h1">My Site</Heading>
            {/* <PrimaryNav
              menuData={menuData.allContentfulMenu.nodes[0].menuSections}
            /> */}
          </Flex>
          <Flex>
            <Spacer mx={1} />
            <Button
              onClick={toggleColorMode}
              aria-label="Change color theme of the site"
              display={["none", "block"]}
            >
              <SwitchIcon />
              <chakra.span sx={{ display: "none" }}>
                Change color theme of the site
              </chakra.span>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </chakra.header>
  )
}

export default Header
import React from "react"
import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const Footer = props => {
  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="center"
      >
        <a
          aria-current="page"
          aria-label="Back to Home page"
          href="/"
          rel="home"
        >
          <StaticImage
            src="../images/icon.png"
            alt="Gatsby Logo"
            loading="eager"
            layout="fixed"
            width={50}
          />
        </a>
        <Stack
          my={{ base: "6", md: 0 }}
          direction={{ base: "column", md: "row" }}
          marginStart={{ md: "8" }}
          fontSize="sm"
          spacing={{ base: "2", md: "8" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Text>&copy; {new Date().getFullYear()} My Blog Site</Text>
        </Stack>
        <ButtonGroup
          marginStart={{ md: "auto" }}
          color="gray.600"
          variant="ghost"
        >
          <IconButton
            as="a"
            href="https://www.facebook.com/"
            aria-label="FaceBook"
            icon={<FaFacebook />}
          />
          <IconButton
            as="a"
            href="https://www.twitter.com/"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Footer
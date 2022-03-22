import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Img,
  Heading,
  Badge,
  HStack,
  Stack,
  StackDivider,
  Flex,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ArticlePreview = ({ title, path, image, alt, summary, tags }) => (
  <Box as="section" bg={mode("gray.50", "inherit")} py="24">
    <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 24rem" }}
        columnGap={{ base: "12", lg: "20" }}
        rowGap="10"
      >
        <Box
          pos="relative"
          cursor="pointer"
          className="group"
          h="400px"
          overflow="hidden"
        >
          <Img
            as={GatsbyImage}
            image={image}
            w="full"
            h="full"
            objectFit="cover"
            htmlWidth="672"
            htmlHeight="448"
            alt={alt}
            transition="all 0.2s"
            _groupHover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <Flex direction="column" h="full">
          <Box flex="1">
            <Stack
              spacing={{ base: "4", md: "6" }}
              direction={{ base: "column", md: "row" }}
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="wider"
              fontWeight="semibold"
            >
              <Badge colorScheme="blue" variant="solid" alignSelf="flex-start">
                Article
              </Badge>
              <HStack
                divider={<StackDivider h="3" alignSelf="center" />}
                spacing="3"
                color={mode("gray.600", "gray.400")}
              >
               {tags.map((tag) =>  (
                <Box key={tag.id}>{tag.name}</Box>
               ))}
              </HStack>
            </Stack>
            <Link to={`/articles${path}`}>
              <Heading size="xl" mt="6" mb="4">
                {title}
              </Heading>
            </Link>
            {/* <Text
              fontSize="lg"
              color={mode("gray.600", "gray.400")}
              lineHeight="tall"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></Text> */}
            <p dangerouslySetInnerHTML={{ __html: summary }}></p>
          </Box>
        </Flex>
      </Grid>
    </Box>
  </Box>
);

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default ArticlePreview;

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import {
  Box,
  Img,
  Heading,
  Badge,
  HStack,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Article = ({ data }) => {
  const article = data.nodeArticle;

  return (
    <Layout>
      <Box
        pt={30}
        width={`100%`}
        background={mode(`gray.100`, `gray.600`)}
        borderBottomWidth="1px"
      >
        <Container mt="0">
          <Box as="section" bg={mode("gray.50", "inherit")} py="24" width={`800px`}>
            <Box
              maxW={{ base: "xl", md: "7xl" }}
              mx="auto"
              px={{ base: "6", md: "8" }}
            >
              <Box>
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  direction={{ base: "column", md: "row" }}
                  textTransform="uppercase"
                  fontSize="xs"
                  letterSpacing="wider"
                  fontWeight="semibold"
                >
                  <Badge
                    colorScheme="blue"
                    variant="solid"
                    alignSelf="flex-start"
                  >
                    Article
                  </Badge>
                  <HStack
                    divider={<StackDivider h="3" alignSelf="center" />}
                    spacing="3"
                    color={mode("gray.600", "gray.400")}
                  >
                    {article.relationships.field_tags.map((tag) => (
                      <Box key={tag.id}>{tag.name}</Box>
                    ))}
                  </HStack>
                </Stack>
                <Heading size="xl" mt="6" mb="4">
                  {article.title}
                </Heading>
              </Box>
              <Box
                pos="relative"
                cursor="pointer"
                className="group"
                h="400px"
                overflow="hidden"
              >
                <Img
                  as={GatsbyImage}
                  image={
                    article.relationships.field_image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  w="full"
                  h="full"
                  objectFit="cover"
                  htmlWidth="672"
                  htmlHeight="448"
                  alt={article.field_image.alt}
                  transition="all 0.2s"
                  _groupHover={{ transform: "scale(1.05)" }}
                />
              </Box>
              <Box mt={5}>
                <p
                  dangerouslySetInnerHTML={{ __html: article.body.processed }}
                ></p>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    nodeArticle(id: { eq: $id }) {
      id
      title
      body {
        processed
      }
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
        field_tags {
          id
          name
        }
      }
    }
  }
`;

export default Article;

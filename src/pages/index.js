import React from "react";
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Container from "../components/Container";
//import Meta from "../components/Meta";
import ArticlePreview from "../components/ArticlePreview";

const Home = ({ data }) => {
  const articles = data.allNodeArticle.nodes;

  return (
    <Layout>
      {/* <Meta title="My Blog Site" description="An example blog site stareter." /> */}
      <Box
        pt={30}
        width={`100%`}
        background={useColorModeValue(`gray.100`, `gray.600`)}
        borderBottomWidth="1px"
      >
        <Container mt="0">
          {articles.map((article) => (
            <ArticlePreview
              key={article.id}
              title={article.title}
              path={article.path.alias}
              image={
                article.relationships.field_image.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt={article.field_image.alt}
              summary={
                article.body.summary
                  ? article.body.summary
                  : article.body.processed.substring(0, 300)
              }
              tags={article.relationships.field_tags}
            />
          ))}
        </Container>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allNodeArticle(sort: { fields: created, order: DESC }, limit: 10) {
      nodes {
        id
        title
        created
        body {
          processed
          summary
        }
        path {
          alias
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
  }
`;

export default Home;

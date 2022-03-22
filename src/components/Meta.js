import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Meta = ({ description, lang, meta = [], keywords, title }) => {
  const data = useStaticQuery(detailsQuery)

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      htmlAttributes={{
        lang: "en",
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Meta
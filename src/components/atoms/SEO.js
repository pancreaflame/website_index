import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang = "zh", host, url, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{`${title} - ${site.siteMetadata.title}`}</title>

      {/* Generic meta tags */}
      <meta name="description" content={description} />
      <meta
        name="image"
        content={image || `https://${host}/images/og-image.png`}
      />

      {/* OpenGraph tags */}
      <meta property="og:site_name" content={title}></meta>
      <meta property="og:url" content={`https://${host}${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={image || `https://${host}/images/og-image.png`}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image || `https://${host}/images/og-image.png`}
      />
    </Helmet>
  )
}

export default SEO

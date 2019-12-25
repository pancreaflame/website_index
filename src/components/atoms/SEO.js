import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, lang = "zh", host, url, image }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
  >
    <title>{title}</title>

    {/* Generic meta tags */}
    <meta name="description" content={description} />
    <meta name="image" content={image || `https://${host}/logo.png`} />

    {/* OpenGraph tags */}
    <meta property="og:url" content={`https://${host}${url}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
)

export default SEO

import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, url }) => (
  <Helmet>
    {/* Generic meta tags */}
    <meta name="description" content={description} />
    <meta name="image" content="https://yep.com/logo.jpg" />

    {/* OpenGraph tags */}
    <meta property="og:url" content={`https://yep.com${url}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
)

export default SEO

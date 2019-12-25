import React from "react"
// import { Link } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "about.title" })} />
      <h1>{intl.formatMessage({ id: "about.title" })}</h1>
      <p>{intl.formatMessage({ id: "about.para01" })}</p>
      <Link to="/">{intl.formatMessage({ id: "about.back" })}</Link>
    </Layout>
  )
}

export default injectIntl(About)

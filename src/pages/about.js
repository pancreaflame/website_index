import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/atoms/SEO"

import "./index.css"

const About = ({ intl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            host
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Location>
        {({ navigate, location }) => (
          <>
            <SEO
              title={intl.formatMessage({ id: "about.title" })}
              description={intl.formatMessage({ id: "about.title" })}
              host={site.siteMetadata.host}
              url={location.pathname}
            />
          </>
        )}
      </Location>
      <h1>{intl.formatMessage({ id: "about.title" })}</h1>
      <p>{intl.formatMessage({ id: "about.para01" })}</p>
      <Link to="/">{intl.formatMessage({ id: "common.backhome" })}</Link>
    </Layout>
  )
}

export default injectIntl(About)

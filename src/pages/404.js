import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/atoms/SEO"

import "./index.css"

const NotFoundPage = ({ intl }) => {
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
              title={"404: " + intl.formatMessage({ id: "common.notfound" })}
              description={intl.formatMessage({ id: "common.notfound" })}
              host={site.siteMetadata.host}
              url={location.pathname}
            />
          </>
        )}
      </Location>
      <h1>{intl.formatMessage({ id: "common.notfound" })}</h1>
      <p>{intl.formatMessage({ id: "common.notfoundpara01" })}</p>
      <Link to="/">{intl.formatMessage({ id: "common.backhome" })}</Link>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)

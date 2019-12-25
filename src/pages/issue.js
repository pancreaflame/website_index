import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/atoms/SEO"

import "./index.css"

const IssuePage = ({ intl }) => {
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
      <h1>Sub folder page 3</h1>
      <p>Welcome to hell</p>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/page-2/">Go to page 2</Link>

      {/* <button onClick={handleSwitch('zh-hk')}>zh-hk</button> */}
      <h4>{intl.formatMessage({ id: "index.open.title" })}</h4>
    </Layout>
  )
}

export default injectIntl(IssuePage)

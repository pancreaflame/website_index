import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Linkify from "react-linkify"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/atoms/SEO"

import "./index.css"

const componentDecorator = (href, text, key) => (
  <a href={href} key={key} rel="noopener noreferrer" target="_blank">
    {text}
  </a>
)

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
      <h1>{intl.formatMessage({ id: "issue.title" })}</h1>
      <Linkify componentDecorator={componentDecorator}>
        <p>{intl.formatMessage({ id: "issue.para01" })}</p>
      </Linkify>
      <Link to="/">{intl.formatMessage({ id: "common.backhome" })}</Link>
    </Layout>
  )
}

export default injectIntl(IssuePage)

import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby";
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ intl, data }) => {
  const data1 = data.allApLinkCsv.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <p>
        <Link to="/cate/page-3/">Go to page 3</Link>
      </p>
      {intl.formatMessage({ id: "index.open.title" })}
      <ul>
        {data1 &&
          data1.map((item, index) => {
            return (
              <li key={index}>
                <p>
                  <Link to={`/link/${item.node.id}`}>
                    <span>{item.node.id}</span>
                    <span>=></span>
                    <span>{item.node.cname}</span>
                  </Link>
                </p>
              </li>
            )
          })}
      </ul>
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const IndexQuery = graphql`
  query {
    allApLinkCsv {
      edges {
        node {
          id
          cname
          ename
        }
      }
    }
  }
`

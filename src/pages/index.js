import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby";
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ intl, data }) => {
  const data1 = data.allApLinkCsv.edges

  return (
    <Layout>
      <SEO title="Home" />
      {/* {intl.formatMessage({ id: "index.open.title" })} */}
      <ul style={{
        display: "flex",
        flexFlow: "row wrap",
      }}>
        {data1 &&
          data1.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  width: "360px",
                  margin: "10px",
                  padding: "10px",
                }}
              >
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
          description
          url
          subject_tag_ids
          maincategory_tag_ids
          publicity_tag_ids
          media_tag_ids
          tool_tag_ids
          stage_tag_ids
          state_tag_ids
          license_tag_ids
          promotional_article
          dev_team
          founded_time
          source
          added_time
          added_by
        }
      }
    }
  }
`

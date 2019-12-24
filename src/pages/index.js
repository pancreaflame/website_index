import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby";
import { injectIntl, Link } from "gatsby-plugin-intl"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import { FaSearch } from "react-icons/fa"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import TreeHome from "../components/organisms/TreeHome"

import "@reach/tabs/styles.css"
import "./index.css"

const IndexPage = ({ intl, data }) => {
  const tagObj = data.allApTagCsv.edges
  const itemObj = data.allApLinkCsv.edges

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "common.home" })} />

      <div
        className="search_cont"
        style={{
          margin: "4px auto 1rem",
        }}
      >
        <input type="text" placeholder="Search" />
        <button onClick={() => {}}>
          <FaSearch />
        </button>
      </div>

      {/* <div>higlights/popular</div> */}

      <Tabs>
        <TabList>
          <Tab>
            <span className="tab-badge">
              {intl.formatMessage({ id: "index.by" })}
            </span>
            {intl.formatMessage({ id: "index.maincate" })}
          </Tab>
          <Tab>
            <span className="tab-badge">
              {intl.formatMessage({ id: "index.by" })}
            </span>
            {intl.formatMessage({ id: "index.media" })}
          </Tab>
          <Tab>
            <span className="tab-badge">
              {intl.formatMessage({ id: "index.by" })}
            </span>
            {intl.formatMessage({ id: "index.subject" })}
          </Tab>
          <Tab>
            <span className="tab-badge">
              {intl.formatMessage({ id: "index.by" })}
            </span>
            {intl.formatMessage({ id: "index.all" })}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TreeHome
              category_id={"maincategory"}
              tagObj={tagObj}
              itemObj={itemObj}
            />
          </TabPanel>
          <TabPanel>
            <TreeHome category_id={"media"} tagObj={tagObj} itemObj={itemObj} />
          </TabPanel>
          <TabPanel>
            <TreeHome
              category_id={"subject"}
              tagObj={tagObj}
              itemObj={itemObj}
            />
          </TabPanel>
          <TabPanel>
            <div
              style={{
                border: "1px solid #DDD",
                borderWidth: "0 1px 0 1px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                }}
              >
                {itemObj &&
                  itemObj.map((item, index) => {
                    return (
                      <li
                        key={index}
                        style={{
                          maxWidth: "300px",
                          width: "360px",
                          margin: "0 10px 1rem",
                          padding: "0 10px 0 0",
                        }}
                      >
                        <p>
                          <Link
                            to={`/link/${item.node.id}`}
                            style={{
                              borderBottom: "1px solid #c65780",
                            }}
                          >
                            <span>{item.node.cname}</span>
                          </Link>
                        </p>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
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
    allApTagCsv {
      edges {
        node {
          id
          parent_id
          category_id
          zh
          en
          icon
          example
        }
      }
    }
  }
`

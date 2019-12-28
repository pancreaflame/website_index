import React from "react"
import { Location } from "@reach/router"
import { graphql } from "gatsby"
import { injectIntl, IntlContextConsumer, Link } from "gatsby-plugin-intl"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
// import { FaSearch } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/atoms/SEO"
import TreeHome from "../components/organisms/TreeHome"
import RandomLink from "../components/organisms/RandomLink"

import "@reach/tabs/styles.css"
import "./index.css"

const IndexPage = ({ intl, data }) => {
  const tagObj = data.allApTagCsv.edges
  const itemObj = data.allApLinkCsv.edges

  return (
    <Layout>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <Location>
              {({ navigate, location }) => (
                <>
                  <SEO
                    title={intl.formatMessage({ id: "common.home" })}
                    description={intl.formatMessage({ id: "common.home" })}
                    host={data.site.siteMetadata.host}
                    url={location.pathname}
                  />
                </>
              )}
            </Location>

            {/* <div className="search_cont">
              <input type="text" placeholder="Search" />
              <button onClick={() => {}}>
                <FaSearch />
              </button>
            </div> */}

            {/* <div>higlights/popular</div> */}

            <RandomLink itemObj={itemObj} />

            <Tabs
              onChange={index => {
                window.dataLayer &&
                  window.dataLayer.push({
                    event: "yw_tab_switch",
                    eventCategory: "yw_tab_switch",
                    eventAction: `switch_tab_${index}`,
                    eventLabel: JSON.stringify({
                      tab: index,
                      ts: Date.now(),
                    }),
                    eventValue: 1,
                  })
              }}
            >
              <TabList>
                <Tab>
                  <span className="tab_badge">
                    {intl.formatMessage({ id: "index.by" })}
                  </span>
                  {intl.formatMessage({ id: "index.maincate" })}
                </Tab>
                <Tab>
                  <span className="tab_badge">
                    {intl.formatMessage({ id: "index.by" })}
                  </span>
                  {intl.formatMessage({ id: "index.media" })}
                </Tab>
                <Tab>
                  <span className="tab_badge">
                    {intl.formatMessage({ id: "index.by" })}
                  </span>
                  {intl.formatMessage({ id: "index.subject" })}
                </Tab>
                <Tab>
                  <span className="tab_badge">
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
                  <TreeHome
                    category_id={"media"}
                    tagObj={tagObj}
                    itemObj={itemObj}
                  />
                </TabPanel>
                <TabPanel>
                  <TreeHome
                    category_id={"subject"}
                    tagObj={tagObj}
                    itemObj={itemObj}
                  />
                </TabPanel>
                <TabPanel>
                  <div className="home_all_cont">
                    <ul className="home_all_list">
                      {itemObj &&
                        itemObj.map((item, index) => {
                          return (
                            <li key={index} className="home_all_item">
                              <p>
                                <Link
                                  to={`/link/${item.node.id}`}
                                  className="home_all_link"
                                >
                                  <span>
                                    {currentLocale === "zh"
                                      ? item.node.cname || item.node.ename
                                      : item.node.ename || item.node.cname}
                                  </span>
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
          </>
        )}
      </IntlContextConsumer>
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
          subject_tag_ids
          maincategory_tag_ids
          media_tag_ids
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
    site {
      siteMetadata {
        host
      }
    }
  }
`

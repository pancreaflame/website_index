import React from "react"
import { graphql } from "gatsby"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"
import Linkify from "react-linkify"
import { FaChevronCircleLeft } from "react-icons/fa"

import LinkedTag from "../molecules/LinkedTag"
import GeneralPageTemplate from "./generalPageTemplate"

import "../../pages/index.css"

const componentDecorator = (href, text, key) => (
  <a
    href={href}
    key={key}
    rel="noopener noreferrer"
    target="_blank"
    onClick={() => {
      window.dataLayer &&
        window.dataLayer.push({
          event: "yw_general",
          eventCategory: "yw_general_link",
          eventAction: `outbound_link`,
          eventLabel: JSON.stringify({
            url: href,
            ts: Date.now(),
          }),
          eventValue: 1,
        })
    }}
  >
    {text}
  </a>
)

const LinkPageTemplate = ({ pageContext, intl, data }) => {
  const item = pageContext.item
  const categoryObj = data.allApCategoryCsv.edges
  const tagObj = data.allApTagCsv.edges

  return (
    <GeneralPageTemplate title={item.cname || item.ename} data={data}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            {/* <p>{currentLocale === "zh" ? (item.cname || item.ename) : (item.ename || item.cname) }</p> */}

            <div className="item_cont">
              <div>
                <button
                  className="item_back"
                  onClick={e => {
                    window.history.go(-1)
                  }}
                >
                  <FaChevronCircleLeft />
                  <span className="item_back_text">
                    {`${intl.formatMessage({ id: "common.back" })}`}
                  </span>
                </button>
              </div>
              {/* <div>{"Image"}</div> */}
              <h2 className="item_heading_cname">{item.cname}</h2>
              {item.ename && <p>“{item.ename}”</p>}
            </div>

            <div className="item_content_cont">
              <dl>
                <dt>
                  <span>
                    {`${intl.formatMessage({ id: "item.description" })}: `}
                  </span>
                </dt>
                <dd>
                  <Linkify componentDecorator={componentDecorator}>
                    {item.description}
                  </Linkify>
                </dd>

                <dt>
                  <span>{`${intl.formatMessage({ id: "item.url" })}: `}</span>
                </dt>
                <dd>
                  <Linkify componentDecorator={componentDecorator}>
                    {item.url}
                  </Linkify>
                </dd>

                {categoryObj &&
                  categoryObj.map((category, row) => {
                    let cate = `${category.node.id}_tag_ids`

                    return (
                      <React.Fragment key={row}>
                        <dt>
                          <span>
                            {`${intl.formatMessage({ id: `item.${cate}` })}: `}
                          </span>
                        </dt>
                        <dd>
                          {item[cate] ? (
                            item[cate].split(";").map((datatag, index) => {
                              let theTag = ""
                              let tagName = ""
                              let cateName = category.node.id
                              let filteredTag = tagObj.filter(
                                tag => tag.node.id === datatag
                              )

                              if (!filteredTag.length) {
                                return (
                                  <div>
                                    <p>
                                      {intl.formatMessage({
                                        id: `common.notfound`,
                                      })}
                                    </p>
                                    <p>{datatag}</p>
                                    <p>{JSON.stringify(filteredTag)}</p>
                                  </div>
                                )
                              }

                              if (item[cate].length > 0) {
                                theTag = filteredTag[0].node
                                tagName = theTag[currentLocale]
                              } else {
                                tagName = intl.formatMessage({ id: `item.na` })
                                cateName = ""
                              }

                              return (
                                <LinkedTag
                                  value={datatag}
                                  label={tagName}
                                  cate={cateName}
                                  key={index}
                                />
                              )
                            })
                          ) : (
                            <div>
                              <p>
                                {intl.formatMessage({
                                  id: `common.notfound`,
                                })}
                              </p>
                            </div>
                          )}
                        </dd>
                      </React.Fragment>
                    )
                  })}

                <dt>
                  <span>
                    {`${intl.formatMessage({
                      id: "item.promotional_article",
                    })}: `}
                  </span>
                </dt>
                <dd>
                  <Linkify componentDecorator={componentDecorator}>
                    {item.promotional_article}
                  </Linkify>
                </dd>

                <dt>
                  <span>
                    {`${intl.formatMessage({ id: "item.dev_team" })}: `}
                  </span>
                </dt>
                <dd>
                  <Linkify componentDecorator={componentDecorator}>
                    {item.dev_team}
                  </Linkify>
                </dd>

                <dt>
                  <span>
                    {`${intl.formatMessage({ id: "item.founded_time" })}: `}
                  </span>
                </dt>
                <dd>{item.founded_time}</dd>

                <dt>
                  <span>{`${intl.formatMessage({
                    id: "item.source",
                  })}: `}</span>
                </dt>
                <dd>
                  <Linkify componentDecorator={componentDecorator}>
                    {item.source}
                  </Linkify>
                </dd>

                <dt>
                  <span>{`${intl.formatMessage({
                    id: "item.added_time",
                  })}: `}</span>
                </dt>
                <dd>{item.added_time}</dd>

                <dt>
                  <span>{`${intl.formatMessage({
                    id: "item.added_by",
                  })}: `}</span>
                </dt>
                <dd>{item.added_by}</dd>
              </dl>
            </div>

            {/* <div>
              <button>{intl.formatMessage({ id: "item.suggest_edit" })}</button>
            </div> */}
          </>
        )}
      </IntlContextConsumer>
    </GeneralPageTemplate>
  )
}

export default injectIntl(LinkPageTemplate)

export const LinkPageQuery = graphql`
  query {
    allApCategoryCsv {
      edges {
        node {
          id
          zh
          en
          abbr
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
        title
        host
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"
import LinkedTag from "../molecules/LinkedTag"
import GeneralPageTemplate from "./generalPageTemplate"

const LinkPageTemplate = ({ pageContext, intl, data }) => {
  const item = pageContext.item
  const categoryObj = data.allApCategoryCsv.edges
  const tagObj = data.allApTagCsv.edges

  return (
    <GeneralPageTemplate title={item.cname || item.ename}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            {/* <p>{currentLocale === "zh" ? (item.cname || item.ename) : (item.ename || item.cname) }</p> */}

            <div
              style={{
                maxWidth: "700px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <div>{"Image"}</div>
              <h2>{item.cname}</h2>
              <p>{item.ename}</p>
              {/* <p>{JSON.stringify(categoryObj)}</p>
              <p>{JSON.stringify(tagObj)}</p> */}
            </div>

            <div
              style={{
                maxWidth: "400px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <dl>
                <dt>
                  <span>
                    {`${intl.formatMessage({ id: "item.description" })}: `}
                  </span>
                </dt>
                <dd>{item.description}</dd>

                <dt>
                  <span>{`${intl.formatMessage({ id: "item.url" })}: `}</span>
                </dt>
                <dd>{item.url}</dd>

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
                          {item[cate] &&
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
                                  value={tagName}
                                  cate={cateName}
                                  key={index}
                                />
                              )
                            })}
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
                <dd>{item.promotional_article}</dd>

                <dt>
                  <span>
                    {`${intl.formatMessage({ id: "item.dev_team" })}: `}
                  </span>
                </dt>
                <dd>{item.dev_team}</dd>

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
                <dd>{item.source}</dd>

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

            <div>
              <button>{intl.formatMessage({ id: "item.suggest_edit" })}</button>
            </div>
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
  }
`

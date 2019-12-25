import React from "react"
import { graphql } from "gatsby"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"
import Tree from "../organisms/Tree"
import ItemList from "../organisms/ItemList"
import GeneralPageTemplate from "./generalPageTemplate"

const TagsPageTemplate = ({ pageContext, intl, data }) => {
  const item = pageContext.item
  const tagObj = data.allApTagCsv.edges
  const itemObj = data.allApLinkCsv.edges
  const filteredItemObj = itemObj.filter(value => {
    return value.node[`${item.category_id}_tag_ids`].indexOf(item.id) !== -1
  })

  return (
    <GeneralPageTemplate title={item.zh + " " + item.en} data={data}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <div className="tagpage_cont">
            <Tree
              category_id={item.category_id}
              tagObj={tagObj}
              itemObj={itemObj}
            />
            <div className="tagpage_content">
              <p>{item.category_id}</p>
              <h2>{item.zh}</h2>
              <p>{item.en}</p>
              <ItemList
                category_id={item.category_id}
                id={item.id}
                tagObj={tagObj}
                itemObj={filteredItemObj}
              />
            </div>
          </div>
        )}
      </IntlContextConsumer>
    </GeneralPageTemplate>
  )
}

export default injectIntl(TagsPageTemplate)

export const TagsPageQuery = graphql`
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
    site {
      siteMetadata {
        title
        host
      }
    }
  }
`

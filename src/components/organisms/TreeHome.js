import React from "react"
import { injectIntl, IntlContextConsumer, Link } from "gatsby-plugin-intl"

import buildTree from "../../functions/buildTree"

const createTree = (cate_id, tagslist, itemObj) => {
  let relations = []
  let countResult = {}
  let treeResult = {}

  // Count
  itemObj
    .filter(item => item.node[`${cate_id}_tag_ids`] !== "")
    .map(item => {
      item.node[`${cate_id}_tag_ids`].split(";").map(datatag => {
        if (countResult[datatag]) {
          countResult[datatag]++
        } else {
          countResult[datatag] = 1
        }
        return 0
      })
      return 0
    })

  // Relation
  tagslist
    .filter(item => item.node.category_id === cate_id)
    .map(item => {
      let aobj = {}
      if (item.node.parent_id) {
        aobj[item.node.id] = item.node.parent_id
      } else {
        aobj[item.node.id] = null
      }
      relations.push(aobj)
      return 0
    })

  // console.log(`${cate_id}, ${JSON.stringify(relations)}`)

  // Tree
  treeResult = buildTree(relations)

  const assginCount = (tree, id, count) => {
    let newtree = {}

    if (Object.keys(tree).length === 0) {
      newtree["count"] = count[id] || 0
    } else {
      // Sum the count
      let allCount = 0
      Object.keys(tree).map(item => {
        let aobj = assginCount(tree[item], item, count)
        allCount = allCount + aobj["count"]
        newtree[item] = aobj
        return 0
      })

      // Sort the keys by count
      let sortedList = {}
      Object.keys(newtree)
        .sort((a, b) => newtree[b]["count"] - newtree[a]["count"])
        .forEach(key => {
          sortedList[key] = newtree[key]
        })
      newtree = sortedList
      newtree["count"] = allCount + (count[id] || 0)
    }

    return newtree
  }

  // Assign count
  let treeCount = assginCount(treeResult.tree, "root", countResult)

  return {
    treeResult,
    countResult,
    treeCount,
  }
}

const allPathHome = (itemObj, tree, cate_id, tagObj, lang, sep) => {
  return Object.keys(tree).map((item, index) => {
    if (tree[item]["count"]) {
      // i18n
      let nameList = tagObj.filter(name => name.node.id === item)
      let name = item
      if (nameList.length) {
        name = nameList[0]["node"][lang]
      }

      return (
        <li
          key={index}
          style={{
            display: "block",
            position: "relative",
          }}
        >
          <div
            className="list-heading"
            style={{
              display: "flex",
            }}
          >
            <h4
              style={{
                margin: "0 0 4px",
              }}
            >
              <Link
                to={`/${cate_id}/${item}`}
                style={{
                  color: "#c65780",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                }}
              >
                {name}
              </Link>
              <span
                style={{
                  margin: "0 2px",
                  padding: "2px 4px",
                  border: "1px solid #D76890",
                  borderRadius: "4px",
                  display: "inline-block",
                  fontSize: ".6rem",
                  lineHeight: "1",
                  verticalAlign: "middle",
                }}
              >
                {tree[item].count}
              </span>
            </h4>
          </div>
          {Object.keys(tree[item]) ? (
            <ul>
              {allPathHome(
                itemObj,
                tree[item],
                cate_id,
                tagObj,
                lang,
                sep + ">"
              )}
            </ul>
          ) : null}
          <ul>
            {itemObj &&
              itemObj
                .filter(x => {
                  return x.node[`${cate_id}_tag_ids`].indexOf(item) !== -1
                })
                .map((x, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        margin: "0 0 4px",
                      }}
                    >
                      {
                        <Link
                          style={{
                            borderBottom: "1px solid #333",
                            color: "#333",
                            fontSize: ".9rem",
                            textDecoration: "none",
                          }}
                          to={`/link/${x.node.id}`}
                        >
                          {x.node.cname}
                        </Link>
                      }
                    </li>
                  )
                })}
          </ul>
        </li>
      )
    } else {
      return null
    }
  })
}

const TreeHome = ({ intl, tagObj, itemObj, category_id }) => {
  // const item = pageContext.item
  // const categoryObj = data.allApCategoryCsv.edges
  // const tagObj = data.allApTagCsv.edges

  let aobj = createTree(category_id, tagObj, itemObj)

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div
          style={{
            border: "1px solid #DDD",
            borderWidth: "0 1px 0 1px",
          }}
        >
          {/* <p>**{category_id}**</p> */}
          <ul>
            {allPathHome(
              itemObj,
              aobj.treeCount,
              category_id,
              tagObj,
              currentLocale,
              ">"
            )}
          </ul>
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(TreeHome)

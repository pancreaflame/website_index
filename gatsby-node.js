/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const fs = require("fs-extra")
const yaml = require("js-yaml")
const flatten = require("flat")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = () => {
  console.log("Copying locales")

  const zhTranslation = loadTranslationObject("zh")
  const enTranslation = loadTranslationObject("en")

  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/intl")) ||
    fs.mkdirSync(path.join(__dirname, "/public/intl"))

  // Save bundled translation files
  fs.writeFileSync(
    path.join(__dirname, "/public/intl/zh.json"),
    JSON.stringify(flatten(zhTranslation))
  )
  fs.writeFileSync(
    path.join(__dirname, "/public/intl/en.json"),
    JSON.stringify(flatten(enTranslation))
  )

  // Copy favicon
  console.log("Copying favicon")
  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/favicon")) ||
    fs.mkdirSync(path.join(__dirname, "/public/favicon"))

  fs.copy(
    path.join(__dirname, `/src/favicon`),
    path.join(__dirname, "/public/favicon"),
    function(err) {
      if (err) {
        return console.error(err)
      }
      console.log("success!")
    }
  )

  // Copy images
  console.log("Copying images")
  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/images")) ||
    fs.mkdirSync(path.join(__dirname, "/public/images"))

  fs.copy(
    path.join(__dirname, `/src/images`),
    path.join(__dirname, "/public/images"),
    function(err) {
      if (err) {
        return console.error(err)
      }
      console.log("success!")
    }
  )

  // Copy redirects
  // fs.copySync(
  //   path.join(__dirname, "/_redirects"),
  //   path.join(__dirname, "/public/_redirects")
  // );
}

function loadTranslationObject(languageCode) {
  const srcPath = path.join(__dirname, `/src/locales/${languageCode}/`)
  const translationObjects = fs.readdirSync(srcPath).map(file =>
    yaml.load(fs.readFileSync(path.join(srcPath, file)), {
      encoding: "utf-8",
    })
  )
  return Object.assign({}, ...translationObjects)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
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
    `)
      .then(result => {
        result.data.allApLinkCsv.edges.forEach(({ node }) => {
          createPage({
            path: `/link/${node.id}/`,
            component: path.resolve(
              `./src/components/templates/linkPageTemplate.js`
            ),
            context: {
              item: node,
            },
          })
        })
      })
      .then((newsResolve, newsReject) => {
        graphql(`
          {
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
        `).then(result => {
          result.data.allApTagCsv.edges.forEach(({ node }) => {
            createPage({
              path: `/${node.category_id}/${node.id}/`,
              component: path.resolve(
                `./src/components/templates/tagsPageTemplate_${node.category_id}.js`
              ),
              context: {
                item: node,
                regex: `/${node.id}/`,
              },
            })
          })
          resolve()
        })
      })
  })
}

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

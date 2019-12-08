const findChildren = (parentId, rel, sep) => {
  let result = {}

  rel.map(item => {
    Object.keys(item).map(key => {
      if (parentId === item[key]) {
        result[key] = findChildren(key, rel, sep + ">")
      }
      return 0
    })
    return 0
  })
  return result
}

const allorphans = rel => {
  let orphans = {}
  let tree = {}

  // store all nodes
  rel.map(item => {
    Object.keys(item).map(key => {
      // console.log(`key: ${key} val: ${item[key]}`)
      if (key && !orphans[key]) {
        orphans[key] = []
      }
      if (item[key] && !orphans[item[key]]) {
        orphans[item[key]] = []
      }
      return 0
    })
    return 0
  })

  // find those no more parent (top level)
  rel.map(item => {
    Object.keys(item).map(key => {
      if (!item[key]) {
        tree[key] = findChildren(key, rel, ">")
      }
      return 0
    })
    return 0
  })

  // loop all the tree to create path to node
  const allPath = (tree, parent_id) => {
    Object.keys(tree).map(item => {
      if (orphans[parent_id]) {
        orphans[item] = orphans[item].concat(orphans[parent_id])
        orphans[item] = orphans[item].concat([parent_id])
      }

      allPath(tree[item], item)
      return 0
    })
    return 0
  }

  allPath(tree, "root")

  return {
    tree,
    orphans,
  }
}

const BuildTree = relation => {
  let newRel = allorphans(relation)
  let paths = {}

  Object.keys(newRel.orphans).map(item => {
    paths[item] = newRel.orphans[item].join(".")
    return 0
  })

  return {
    tree: newRel.tree,
    paths,
  }
}

export default BuildTree

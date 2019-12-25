import React from "react"
import { Link } from "gatsby-plugin-intl"

import Tag from "../atoms/Tag"

const LinkedTag = props => {
  return (
    <Link
      to={`/${props.cate + "/" || ""}${props.value}`}
      className="item_tag_link"
    >
      <Tag {...props} />
    </Link>
  )
}

export default LinkedTag

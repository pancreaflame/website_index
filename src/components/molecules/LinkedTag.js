import React from "react"
import { Link } from "gatsby-plugin-intl"

import Tag from "../atoms/Tag"

const LinkedTag = props => {
  return (
    <Link
      to={`/${props.cate + "/" || ""}${props.value}`}
      style={{
        display: "inline-block",
      }}
    >
      <Tag {...props} />
    </Link>
  )
}

export default LinkedTag

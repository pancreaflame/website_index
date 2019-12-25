import React from "react"

const Tag = props => {
  return (
    <span
      className="item_tag"
      // fontSize={props.fontsize}
      // textcolor={props.textcolor}
      // backgroundcolor={props.backgroundcolor}
      // bordercolor={props.bordercolor}
      // borderwidth={props.borderwidth}
      label={props.label}
      // size="small"
      // onClick={props.handleClick}
      // className={props.className}
      // icon={props.icon}
    >
      {props.label}
    </span>
  )
}

export default Tag

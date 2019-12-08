import React from "react"

const Tag = props => {
  return (
    <span
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
      style={{
        margin: "4px",
        padding: "4px 12px",
        border: "1px solid #DDD",
        borderRadius: "20px",
        display: "inline-block",
        textDecoration: "none",
        color: "#666",
      }}
    >
      {props.label}
    </span>
  )
}

export default Tag

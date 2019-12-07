import React from "react"

const Tag = props => {
  return (
    <a
      // fontSize={props.fontsize}
      // textcolor={props.textcolor}
      // backgroundcolor={props.backgroundcolor}
      // bordercolor={props.bordercolor}
      // borderwidth={props.borderwidth}
      label={props.value}
      // size="small"
      // onClick={props.handleClick}
      // className={props.className}
      // icon={props.icon}
      href={`/${props.cate + "/" || ""}${props.value}`}
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
      {props.value}
    </a>
  )
}

export default Tag

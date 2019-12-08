import React from "react"
import { injectIntl, IntlContextConsumer, Link } from "gatsby-plugin-intl"

const Item = props => {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div>
          <Link to={`/link/${props.id}`}>
            <h4>
              {currentLocale === "zh"
                ? props.cname || props.ename
                : props.ename || props.cname}
            </h4>
          </Link>
          <p>{props.description}</p>
          {/* <p>{JSON.stringify(props)}</p> */}
          <hr />
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(Item)

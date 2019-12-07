import React from "react"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"

const LinkPageTemplate = ({ pageContext, intl }) => {
  const item = pageContext.item

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <>
          <p>{currentLocale}</p>
          <h1>{currentLocale === "zh" ? item.cname : item.ename}</h1>
          <p>{item.id}</p>
        </>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(LinkPageTemplate)

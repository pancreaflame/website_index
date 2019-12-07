import React from "react"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"
import GeneralPageTemplate from "./generalPageTemplate"

const LinkPageTemplate = ({ pageContext, intl }) => {
  const item = pageContext.item

  return (
    <GeneralPageTemplate>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <p>{currentLocale}</p>
            <h1>{currentLocale === "zh" ? item.cname : item.ename}</h1>
            <p>{item.id}</p>
          </>
        )}
      </IntlContextConsumer>
    </GeneralPageTemplate>
  )
}

export default injectIntl(LinkPageTemplate)

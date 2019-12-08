import React from "react"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"

import Item from "../molecules/Item"

const ItemList = ({ intl, category_id, id, tagObj, itemObj }) => {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div>
          <ul>
            {itemObj &&
              itemObj.map((item, index) => {
                return <Item key={index} {...item.node} />
              })}
          </ul>
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(ItemList)

import React, { useState } from "react"
import { injectIntl, Link, IntlContextConsumer } from "gatsby-plugin-intl"
import { FaSyncAlt } from "react-icons/fa"

import Item from "../molecules/Item"

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const RandomLink = ({ intl, itemObj }) => {
  const [draw, setDraw] = useState(false)

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div>
          <h4>
            {intl.formatMessage({ id: "index.random" })}
            <Link
              to="/"
              className={draw ? "dice animate" : "dice"}
              onClick={() => {
                setDraw(!draw)

                window.dataLayer &&
                  window.dataLayer.push({
                    event: "yw_general",
                    eventCategory: "yw_dice",
                    eventAction: `yw_dice_${currentLocale}`,
                    eventLabel: JSON.stringify({
                      lang: currentLocale,
                      ts: Date.now(),
                    }),
                    eventValue: 1,
                  })
              }}
              aria-label="Random Some Pages"
            >
              <FaSyncAlt aria-label="Shuffle Icon" />
            </Link>
          </h4>
          <ul>
            {itemObj &&
              shuffle(itemObj.slice())
                .slice(0, 3)
                .map((item, index) => {
                  return <Item key={index} {...item.node} />
                })}
          </ul>
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default injectIntl(RandomLink)

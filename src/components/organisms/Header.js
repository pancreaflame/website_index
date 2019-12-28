import PropTypes from "prop-types"
import React from "react"
import { injectIntl, Link, IntlContextConsumer } from "gatsby-plugin-intl"
import LanguageSwitcher from "../languageswitcher"
import { FaBars, FaTimes } from "react-icons/fa"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import "@reach/dialog/styles.css"
import "../../pages/index.css"

const Header = ({ intl, siteTitle, apTag }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => {
    setShowDialog(true)

    window.dataLayer &&
      window.dataLayer.push({
        event: "yw_aside",
        eventCategory: "yw_aside",
        eventAction: `aside_open`,
        eventLabel: JSON.stringify({
          action: "open",
          ts: Date.now(),
        }),
        eventValue: 1,
      })
  }
  const close1 = () => {
    setShowDialog(false)

    window.dataLayer &&
      window.dataLayer.push({
        event: "yw_aside",
        eventCategory: "yw_aside",
        eventAction: `aside_close1`,
        eventLabel: JSON.stringify({
          action: "close",
          ts: Date.now(),
        }),
        eventValue: 1,
      })
  }
  const close2 = () => {
    setShowDialog(false)

    window.dataLayer &&
      window.dataLayer.push({
        event: "yw_aside",
        eventCategory: "yw_aside",
        eventAction: `aside_close2`,
        eventLabel: JSON.stringify({
          action: "close",
          ts: Date.now(),
        }),
        eventValue: 1,
      })
  }

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <header>
          <div className="header_cont">
            <button
              className="header_hamburger"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={open}
            >
              <FaBars />
            </button>

            <DialogOverlay
              className="aside_overlay"
              aria-label="Menu background"
              isOpen={showDialog}
              onDismiss={close1}
            >
              <DialogContent
                className="aside_content"
                aria-label="Menu Content"
              >
                <button className="aside_close" onClick={close2}>
                  <FaTimes />
                </button>
                <ul className="aside_list">
                  <li>
                    <Link to="/">
                      {intl.formatMessage({ id: "common.home" })}
                    </Link>
                  </li>
                  <li>
                    <Link to="/issue">
                      {intl.formatMessage({ id: "menu.report_issue" })}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      {intl.formatMessage({ id: "menu.about" })}
                    </Link>
                  </li>
                </ul>

                <h4>{intl.formatMessage({ id: "common.alltag" })}</h4>
                <ul className="aside_taglist">
                  {// JSON.stringify(apTag)
                  apTag &&
                    apTag
                      .sort((a, b) => {
                        return a.node.en > b.node.en
                      })
                      .map((edge, index) => {
                        let item = edge.node

                        return (
                          <li key={index}>
                            <Link
                              to={`/${item.category_id}/${item.id}`}
                              className="aside_tag"
                            >
                              <span>
                                {item.en === item.zh
                                  ? `${item.en}`
                                  : `${item.en}（${item.zh}）`}
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                </ul>
              </DialogContent>
            </DialogOverlay>
            <h1 className="header_title">
              <Link
                to="/"
                className="header_title_link"
                onClick={() => {
                  window.dataLayer &&
                    window.dataLayer.push({
                      event: "yw_logo_click",
                      eventCategory: "yw_logo_click",
                      eventAction: `click_logo`,
                      eventLabel: JSON.stringify({
                        lang: currentLocale,
                        ts: Date.now(),
                      }),
                      eventValue: 1,
                    })
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            <LanguageSwitcher />
          </div>
        </header>
      )}
    </IntlContextConsumer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)

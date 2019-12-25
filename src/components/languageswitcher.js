// import classNames from 'classnames'
import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from "gatsby-plugin-intl"
import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { FaGlobe } from "react-icons/fa"

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLangMenuOn: false,
    }

    this.handleLangMenuClick = this.handleLangMenuClick.bind(this)
  }

  renderLanguageChoice(code, label, currentLocale) {
    return (
      <button key={code} onClick={() => changeLocale(code)}>
        {label}
      </button>
    )
  }

  handleLangMenuClick(e) {
    this.setState(state => {
      return {
        isLangMenuOn: !state.isLangMenuOn,
      }
    })
  }

  render() {
    const languageNames = [
      { code: "zh", label: "中文" },
      { code: "en", label: "English" },
    ]

    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <div
            className=""
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <Helmet>
              <html lang={currentLocale} />
            </Helmet>
            <button
              className="nav-link dropdown-toggle link-button"
              id="langDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={this.handleLangMenuClick}
              style={{
                padding: "10px",
                border: "0",
                background: "none",
                color: "white",
              }}
            >
              <FaGlobe />
            </button>
            {this.state.isLangMenuOn && (
              <div
                className="dropdown-menu"
                aria-labelledby="langDropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  right: "0",
                  textAlign: "right",
                }}
              >
                {languageNames.map(l =>
                  this.renderLanguageChoice(l.code, l.label, currentLocale)
                )}
              </div>
            )}
          </div>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)

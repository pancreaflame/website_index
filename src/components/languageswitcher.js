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
  //   getImageByCode(code) {
  //     return code === 'en' ? enFlag : nlFlag
  //   }

  renderLanguageChoice(code, label, currentLocale) {
    return (
      <button key={code} className={"xxx"} onClick={() => changeLocale(code)}>
        {label}
      </button>
    )
  }

  render() {
    const languageNames = [
      { code: "en", label: "English" },
      { code: "zh", label: "中文" },
    ]

    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <li className="nav-item dropdown ml-lg-2">
            <Helmet>
              <html lang={currentLocale} />
            </Helmet>
            <button
              className="nav-link dropdown-toggle link-button"
              id="langDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaGlobe />
            </button>
            <div className="dropdown-menu" aria-labelledby="langDropdown">
              {languageNames.map(l =>
                this.renderLanguageChoice(l.code, l.label, currentLocale)
              )}
            </div>
          </li>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)

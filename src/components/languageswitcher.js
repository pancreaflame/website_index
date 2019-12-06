// import classNames from 'classnames'
import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from "gatsby-plugin-intl"
import React, { Component } from "react"
import { Helmet } from "react-helmet"
// import enFlag from './en-flag.svg'
// import nlFlag from './nl-flag.svg'

class LanguageSwitcher extends Component {
  //   getImageByCode(code) {
  //     return code === 'en' ? enFlag : nlFlag
  //   }

  renderLanguageChoice(code, label, currentLocale) {
    return (
      <button key={code} className={"xxx"} onClick={() => changeLocale(code)}>
        {/* <img
          src={this.getImageByCode(code)}
          alt={label}
          className="mr-2"
          width="24px"
        /> */}
        <p>{code}</p>
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
              {/* <img
                src={this.getImageByCode(currentLocale)}
                alt="Language"
                width="24px"
              /> */}
              <p>{currentLocale}</p>
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

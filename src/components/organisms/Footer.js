import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

const Footer = ({ intl }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top border-bottom navbar-light"
      style={{
        background: "#fff",
        borderTop: "3px solid #c00",
      }}
    >
      <div className="container">
        @ 2019 yep.com
        <Link to="/">{intl.formatMessage({ id: `index.news` })}</Link>
      </div>
    </nav>
  )
}

export default injectIntl(Footer)

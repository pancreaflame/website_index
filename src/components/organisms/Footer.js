import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

const Footer = ({ intl }) => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      <Link to="/about">{intl.formatMessage({ id: `menu.about` })}</Link>
    </footer>
  )
}

export default injectIntl(Footer)

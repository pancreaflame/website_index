import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

const Footer = ({ intl }) => {
  return (
    <footer
      style={{
        background: "#fff",
        paddingTop: "4px",
        borderTop: "2px solid #D76890",
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      <Link to="/">{`About` + intl.formatMessage({ id: `index.news` })}</Link>
    </footer>
  )
}

export default injectIntl(Footer)

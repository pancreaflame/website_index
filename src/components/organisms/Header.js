// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import LanguageSwitcher from "../languageswitcher"
import { FaBars } from "react-icons/fa"

const Header = ({ intl, siteTitle }) => (
  <header
    style={{
      background: `#D76890`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`
      }}
    >
      <button>
        <FaBars />
      </button>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <LanguageSwitcher />

      {/* {intl.formatMessage({ id: "index.news" })} */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)

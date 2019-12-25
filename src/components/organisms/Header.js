import PropTypes from "prop-types"
import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import LanguageSwitcher from "../languageswitcher"
import { FaBars, FaTimes } from "react-icons/fa"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import "@reach/dialog/styles.css"
import "../../pages/index.css"

const Header = ({ intl, siteTitle }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
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
          onDismiss={close}
        >
          <DialogContent className="aside_content" aria-label="Menu Content">
            <button className="aside_close" onClick={close}>
              <FaTimes />
            </button>
            <ul className="aside_list">
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
          </DialogContent>
        </DialogOverlay>
        <h1 className="header_title">
          <Link to="/" className="header_title_link">
            {siteTitle}
          </Link>
        </h1>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)

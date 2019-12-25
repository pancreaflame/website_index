// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import LanguageSwitcher from "../languageswitcher"
import { FaBars, FaTimes } from "react-icons/fa"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

const Header = ({ intl, siteTitle }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <header
      style={{
        background: "#D76890",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          height: "2.4rem",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          aria-haspopup="true"
          aria-expanded="false"
          onClick={open}
          style={{
            padding: "10px",
            border: "0",
            background: "none",
            color: "white",
          }}
        >
          <FaBars />
        </button>

        <DialogOverlay
          aria-label="Menu background"
          style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
          isOpen={showDialog}
          onDismiss={close}
        >
          <DialogContent
            aria-label="Menu Content"
            style={{
              width: "250px",
              height: "100vh",
              margin: "0",
              position: "fixed",
              top: "0",
              left: "0",
              boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
            }}
          >
            <button
              onClick={close}
              style={{
                width: "3rem",
                height: "3rem",
                margin: "0",
                padding: "0",
                border: "0",
                position: "absolute",
                top: "0",
                right: "0",
                lineHeight: "3rem",
                backgroundColor: "#FFF",
              }}
            >
              <FaTimes />
            </button>
            <ul
              style={{
                marginTop: "1rem",
              }}
            >
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
        <h1
          style={{
            margin: 0,
            fontSize: "1.2rem",
          }}
        >
          <Link
            to="/"
            style={{
              lineHeight: "2.4rem",
              color: `white`,
              textDecoration: `none`,
            }}
          >
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

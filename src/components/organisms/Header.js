// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import LanguageSwitcher from "../languageswitcher"
import { FaBars } from "react-icons/fa"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

const Header = ({ intl, siteTitle }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <header
      style={{
        background: `#D76890`,
        marginBottom: `1rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `.5rem 1.0875rem`,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <button
          aria-haspopup="true"
          aria-expanded="false"
          onClick={open}
          style={{
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
          // onClick={close}
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
            <button onClick={close}>x</button>
            <p>Report Issues</p>
            <p>About</p>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)

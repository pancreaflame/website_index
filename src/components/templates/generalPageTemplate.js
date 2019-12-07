import React from "react"
import Helmet from "react-helmet"
import { Location } from "@reach/router"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import SEO from "../atoms/SEO"
import "./index.css"

export default function PageTemplate({ title, children }) {
  const pageTitle = title ? `${title} - ` : ""

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100%" }}>
      <Location>
        {({ navigate, location }) => (
          <>
            <SEO
              title={pageTitle}
              description={pageTitle}
              url={location.pathname}
            />
          </>
        )}
      </Location>
      <Helmet title={pageTitle} />
      <Header />
      <div className="d-flex flex-column flex-grow-1">
        <div className="container text-page-container pb-2">
          <div
            style={{
              flex: "auto",
            }}
          >
            {/* <h1 className="border-bottom text-center mb-4">{title}</h1> */}
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

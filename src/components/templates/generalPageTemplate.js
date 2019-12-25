import React from "react"
import Helmet from "react-helmet"
import { Location } from "@reach/router"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import SEO from "../atoms/SEO"
import "./index.css"

export default function PageTemplate({ title, children, data }) {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="">
        <div className="container text-page-container pb-2">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import React from "react"
import { Location } from "@reach/router"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import SEO from "../atoms/SEO"
import "../../pages/index.css"

export default function PageTemplate({ title, children, data }) {
  const pageTitle = title ? `${title}` : ""

  return (
    <div className="general d-flex flex-column">
      <Location>
        {({ navigate, location }) => (
          <>
            <SEO
              title={pageTitle}
              description={pageTitle}
              host={data.site.siteMetadata.host}
              url={location.pathname}
            />
          </>
        )}
      </Location>
      <Header
        siteTitle={data.site.siteMetadata.title}
        apTag={data.allApTagCsv.edges}
      />
      <div className="">
        <div className="container text-page-container pb-2">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

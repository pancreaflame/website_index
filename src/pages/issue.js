import React from "react"
// import { Link } from "gatsby";
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IssuePage = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Page three" />
      <h1>Sub folder page 3</h1>
      <p>Welcome to hell</p>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/page-2/">Go to page 2</Link>

      {/* <button onClick={handleSwitch('zh-hk')}>zh-hk</button> */}
      <h4>{intl.formatMessage({ id: "index.open.title" })}</h4>
    </Layout>
  )
}

export default injectIntl(IssuePage)

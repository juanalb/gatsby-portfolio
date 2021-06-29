import * as React from "react"

import GatsbySeo from "../components/gatsby-seo/gatsby-seo"
import { Header } from "../components/header/layout"

const NotFoundPage = () => (
  <div className={"page-wrapper"}>
    <Header />
    <GatsbySeo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage

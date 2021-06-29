import * as React from "react"
import { PageProps } from "gatsby"

import GatsbySeo from "../components/gatsby-seo/gatsby-seo"
import { Landing } from "../components/page-sections/landing"
import { Work } from "../components/page-sections/work"
import { Header } from "../components/header/header"
import "../stylesheet.css"

type DataProps = {}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path, children }) => (
  <div className={"page-wrapper"}>
    <GatsbySeo title="Portfolio of Juan Albergen, Front-end developer - Software engineer" />

    <Header />
    <main>
      <Landing />
      <Work />
    </main>
    <footer />
  </div>
)

export default IndexPage

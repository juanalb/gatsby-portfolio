import * as React from "react"
import { PageProps } from "gatsby"

import GatsbySeo from "../components/gatsby-seo/gatsby-seo"
import { Landing } from "../components/page-sections/landing/layout"
import { Work } from "../components/page-sections/work"
import { Header } from "../components/header/layout"
import "../stylesheet.css"
import styled from "styled-components"

type DataProps = {}

const Main = styled.main`
  height: 100%;
  min-height: calc(100vh - 48px);
  margin: 0 auto;
  padding: 0 0.5rem;
  max-width: 1440px;
  @media only screen and (min-width: 786px) {
    padding: 0 45px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 90px;
  }
`

const IndexPage: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  children,
}) => (
  <div className={"page-wrapper"}>
    <GatsbySeo title="Portfolio of Juan Albergen, Front-end developer - Software engineer" />

    <Header />
    <Main>
      <Landing />
      <Work />
    </Main>
    <footer />
  </div>
)

export default IndexPage

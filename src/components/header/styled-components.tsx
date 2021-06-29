import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import { fadeInAnimation } from "../keyframes"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 8px;
  animation: ${fadeInAnimation(0.2)};
  -webkit-animation: ${fadeInAnimation(0.2)};
  
  > a {
    color: white;

    :visited {
      color: white;
    }
  }

  @media only screen and (min-width: 786px) {
    padding: 0 45px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 90px;
  }
`
export const Banner = styled.div`
  flex-basis: 33.33%;

  > span {
    width: 33%;
    background-color: black;
  }
  
  a {
    font-size: 14px;
    white-space: pre-line;
    //background-color: black;
  //  padding: 10px 12px;
    text-align: center;
  }
  
`

export const Socials = styled.menu`
  display: flex;
  flex-basis: 33.33%;
  justify-content: center;
  gap: 8px;
`

export const Nav = styled.nav`
  flex-basis: 33.33%;

  > ul {
    display: flex;
    justify-content: flex-end;
  }

  > ul > li {
    margin-left: 32px;
  }
`

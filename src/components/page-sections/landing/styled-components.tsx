import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { fadeInAnimation } from "../../keyframes"
import { Link } from "gatsby"
import React from "react"

export const Copy = styled.div`
  grid-column: col-start 1 / span 1;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    grid-column: col-start 1 / span 4;
    align-self: center;
  }

  @media only screen and (min-width: 1024px) {
    grid-column: col-start 2 / span 5;
    align-self: center;
  }
`



export const Image = styled.div`
  grid-column: col-start 1 / span 1;

  @media only screen and (min-width: 768px) {
    grid-column: col-start 5 / span 4;
    align-self: center;
  }

  @media only screen and (min-width: 1024px) {
    grid-column: col-start 8 / span 4;
    align-self: center;
  }

  animation: ${fadeInAnimation(1.5)};
  -webkit-animation: ${fadeInAnimation(1.5)};
`

export const Grid = styled.section`
  min-height: calc(100vh - 48px);
  display: grid;
  grid-template-columns: repeat(1, [col-start] 1fr);
  gap: 20px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, [col-start] 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`

export const Title = styled.h1`
  animation: ${fadeInAnimation(1.5)};
  -webkit-animation: ${fadeInAnimation(1.5)};
`

export const Subtitle = styled.p`
  margin-bottom: 34px;
  width: 90%;
  line-height: 25px;

  animation: ${fadeInAnimation(1.5)};
  -webkit-animation: ${fadeInAnimation(1.5)};
`

export const CtaTitle = styled.p`
  margin-bottom: 8px;

  animation: ${fadeInAnimation(1.5)};
  -webkit-animation: ${fadeInAnimation(1.5)};

  :after {
    display: inline-block;
    content: "";
    width: 8px;
    height: 8px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: rgb(52, 199, 89);
    position: absolute;
    transform: translateY(-2px);
  }
`

export const CtaButton = styled.button`
  transform: translateX(1px);

  animation: ${fadeInAnimation(1.5)};
  -webkit-animation: ${fadeInAnimation(1.5)};
`

export const ScrollGesture = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  height: 10%;
  border-left: 1px black solid;

  animation: ${fadeInAnimation(2.5)};
  -webkit-animation: ${fadeInAnimation(2.5)};
  
  :after {
    content: "Get to know me better";
    display: inline-block;
    font-size: 16px;
    margin-left: 4px;
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

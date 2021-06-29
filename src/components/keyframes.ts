import { css, keyframes } from "styled-components"

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeInAnimation = (duration: number) =>
  css`
    ${fadeIn} ${duration}s cubic-bezier(0.770, 0.000, 0.175, 1.000) 1.5s both
  `

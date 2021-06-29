import * as React from "react"
import { content } from "./content"
import {
  Image,
  Copy,
  CtaButton,
  CtaTitle,
  Grid,
  ScrollGesture,
  Subtitle,
  Title,
} from "./styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const Landing = () => {
  const { title, subtitle, p, cta_button } = content

  return (
    <Grid>
      <Copy>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <CtaTitle>{p}</CtaTitle>
        <CtaButton>{cta_button}</CtaButton>

        <ScrollGesture />
      </Copy>
      <Image>
        <StaticImage
          src="../../../images/gatsby-portrait.jpg"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A portrait photo of myself. The photo is in black and white, I am wearing a black crewneck and am smiling whilst looking at something funny."
        />
      </Image>
    </Grid>
  )
}

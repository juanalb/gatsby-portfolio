import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { content } from "./content"

export const Landing = () => {
  const { title, subtitle, p, cta_button } = content

  return (
    <section>
      <div className="grid-item1">
        <h1 className="fade-in">{title}</h1>
        <p className="fade-in-delay-1p5" style={{ marginBottom: "34px", width: "90%", lineHeight: "25px" }}>{subtitle}</p>
        <p className="fade-in-delay-1p5 notification" style={{ marginBottom: "8px" }}>{p}</p>
        <button className="fade-in-delay-1p5" style={{ transform: "translateX(1px)" }}>{cta_button}</button>

        <span className="scroll-promoter fade-in-delay-1p5"/>
      </div>
      <StaticImage
        src="../../../images/gatsby-portait.jpg"
        // width={300}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="A portrait photo of myself. The photo is in black and white, I am wearing a black crewneck and am smiling whilst looking at something funny."
        className="grid-item2 fade-in"
      />
    </section>
  )
}

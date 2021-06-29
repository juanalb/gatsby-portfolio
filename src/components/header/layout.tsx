import * as React from "react"
import { Link } from "gatsby"
import { LinkedInRounded } from "../../assets/icons/LinkedInRounded"
import { GithubRounded } from "../../assets/icons/GithubRounded"
import { SpotifyRounded } from "../../assets/icons/SpotifyRounded"
import { Banner, Nav, Socials, StyledHeader } from "./styled-components"

export const Header: React.FC = () => {
  const items = [
    {
      to: "#work",
      label: "my work"
    },
    {
      to: "#technologies",
      label: "technologies"
    },
    {
      to: "#contact",
      label: "contact"
    }
  ]

  return (
    <StyledHeader>
      <Banner>
        {/*<span>*/}
        {/*<Link to={"/"}>Juan Albergen {"\n"} Personal portfolio</Link>*/}
        {/*  </span>*/}
      </Banner>
      <Socials>
        <Link to={"/"}>
          <LinkedInRounded />
        </Link>
        <Link to={"/"}>
          <GithubRounded />
        </Link>
        <Link to={"/"}>
          <SpotifyRounded />
        </Link>
      </Socials>
      <Nav>
        <ul>
          {items.map(item => {
            return (
              <li>
                <Link to={item.to}>{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </Nav>
    </StyledHeader>
  )
}

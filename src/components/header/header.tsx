import * as React from "react"
import { Link } from "gatsby"
import { LinkedInRounded } from "../../assets/icons/LinkedInRounded"
import { GithubRounded } from "../../assets/icons/GithubRounded"
import { SpotifyRounded } from "../../assets/icons/SpotifyRounded"

export const Header: React.FC = () => {
  const items = [
    {
      to: "#work",
      label: "my work",
    },
    {
      to: "#technologies",
      label: "technologies",
    },
    {
      to: "#contact",
      label: "contact",
    },
  ]

  return (
    <header>
      <Link to={"/"}>Juan Albergen Personal portfolio</Link>
      <menu>
        <Link to={"/"}>
          <LinkedInRounded/>
        </Link>
        <Link to={"/"}>
          <GithubRounded/>
        </Link>
        <Link to={"/"}>
          <SpotifyRounded/>
        </Link>
      </menu>
      <nav>
        <ul>
          {items.map(item => {
            return (
              <li>
                <Link to={item.to}>{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

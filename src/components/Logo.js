import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = props => {
  return (
    <StaticImage
      src="../images/icon.png"
      alt="Gatsby Logo"
      loading="eager"
      layout="fixed"
      width={50}
    />
  )
}

export default Logo
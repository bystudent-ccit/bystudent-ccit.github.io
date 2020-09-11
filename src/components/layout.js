import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar"
import Footer from "./footer"

/**
 * Main layout that handles NavBar and Footer.
 *
 * @param {object} children
 */
const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          canonical
          github
        }
      }
    }
  `)
  const [siteUrl, githubUrl] = [
    site.siteMetadata.canonical,
    site.siteMetadata.github,
  ]

  return (
    <div>
      <NavBar url={siteUrl} />
      {children}
      <Footer url={githubUrl} />
    </div>
  )
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

/**
 * Main NavBar with transparency and overlaying component.
 *
 * @param {object} param0
 */
const NavBar = ({ url }) => (
  <div>
    <nav
      className="uk-navbar-container uk-navbar-transparent uk-position-z-index uk-position-top"
      uk-navbar="true"
    >
      <div className="uk-navbar-left">
        <a
          href={url}
          className="uk-navbar-item uk-logo uk-light"
          style={{
            textTransform: "uppercase",
            fontFamily: "Bebas Neue",
            fontSize: 42,
          }}
        >
          <StaticQuery
            query={graphql`
              {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => {
              return <div>{data.site.siteMetadata.title}</div>
            }}
          ></StaticQuery>
        </a>
      </div>
    </nav>
  </div>
)

NavBar.propTypes = {
  url: PropTypes.string.isRequired
}

export default NavBar

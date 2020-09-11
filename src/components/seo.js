import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/** GraphQL query for staticQuery (see component SEO below) */
const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        defaultUrl: canonical
      }
    }
  }
`

/**
 * A component that handle Helmet for the whole page.
 * 
 * NOTE: Use this component to each page and I personally don't prefer to use it inside a layout.
 * 
 * @param {object} param0 React property.
 */
const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    defaultUrl,
  } = site.siteMetadata
  const url = new URL(defaultUrl)
  const baseUrl = url.origin

  /** Value mapping for Helmet content. */
  const values = {
    name: "ByStudent",
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: new URL(image || defaultImage, defaultUrl),
    url: url.origin + url.pathname,
    theme: "#D23746",
  }

  /**
   * TODO: Better implementation of React Helmet
   *
   * I.e. Use its properties in proper way (meta, link, etc).
   *
   * @see https://github.com/nfl/react-helmet#server-usage
   * @see https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
   */
  return (
    <Helmet title={values.title}>
      {/* General */}
      <meta name="description" content={values.description} />
      {values.image && <meta name="image" content={values.image} />}
      <link rel="canonical" href={values.url} />

      {/* Manifest */}
      <link rel="manifest" href={baseUrl + "/site.webmanifest"} />

      {/* Chrome and its derived browser */}
      <meta name="theme-color" content={values.theme} />
      <meta name="application-name" content={values.name} />

      {/* Favicons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={baseUrl + "/favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={baseUrl + "/favicon-16x16.png"}
      />

      {/* Apple */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={baseUrl + "/apple-touch-icon.png"}
      />
      <link
        rel="mask-icon"
        href={baseUrl + "/safari-pinned-tab.svg"}
        color={values.theme}
      />
      <meta name="apple-mobile-web-app-title" content={values.name} />

      {/* Microsoft */}
      <meta name="msapplication-TileColor" content={values.theme} />
      <meta name="msapplication-tooltip" content={values.description} />

      {/* OpenGraph */}
      <meta property="og:url" content={values.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={values.title} />
      <meta property="og:description" content={values.description} />
      <meta property="og:image" content={values.image} />
      <meta property="og:site_name" content={values.name} />
      <meta property="article:author" content={values.name + " Team"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={values.url} />
      <meta name="twitter:title" content={values.title} />
      <meta name="twitter:description" content={values.description} />
      <meta name="twitter:image" content={values.image} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}

export default SEO

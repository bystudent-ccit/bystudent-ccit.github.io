/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "ByStudent",
    description: "A small group of people waxing magic on the computer!",
    canonical: "https://bystudent-ccit.github.io",
    github: "https://github.com/bystudent-ccit",
    /**
     * Relative path to the image.
     * This is an image that used for SEO banner (I.e. OG, Twitter, etc).
     *
     * Path (`/`) will lookup all inside `static` folder.
     */
    image: "/tile-wide.png",
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`, "gatsby-plugin-react-helmet"],
}

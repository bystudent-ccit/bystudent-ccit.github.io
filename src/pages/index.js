import React from "react"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import brainstorming from "../assets/images/brainstorming.png"
import connection from "../assets/images/connection.png"
import diamond from "../assets/images/diamond.png"

/**
 * Landing page's hero component.
 */
const Hero = () => (
  <div
    className="uk-cover-container"
    uk-height-viewport="true"
    style={{ background: "#D33847" }}
  >
    <div className="uk-container uk-position-center uk-text-center uk-light">
      <h1
        className="uk-h1 uk-animation-scale-up uk-transform-origin-bottom-center"
        style={{
          fontWeight: 700,
        }}
      >
        By Student, for Student.
      </h1>
      <h3 className="uk-h3 uk-margin-remove-top uk-animation-scale-up uk-transform-origin-bottom-center">
        A small group of people waxing magic on the computer!
      </h3>
    </div>
  </div>
)

/**
 * Landing page's goals collection.
 */
const Goals = () => (
  <div className="uk-section uk-section-muted" uk-height-viewport="true">
    {/* Section title */}
    <div className="uk-section uk-section-xsmall">
      <h2 className="my-section-title uk-h2 uk-text-center uk-dark">
        Our goals
      </h2>
    </div>

    <div
      className="uk-child-width-expand@m uk-grid-match uk-padding"
      uk-grid="true"
      uk-scrollspy="target: > div;cls: uk-animation-fade; delay: 500;"
    >
      {/* Item 1 */}
      <div>
        <div className="uk-card uk-card-default uk-text-center">
          <div className="uk-card-header">
            <img width="150" height="150" src={brainstorming} alt="" />
            <h3 className="my-card-title uk-card-title">Learning</h3>
          </div>
          <div className="uk-card-body">
            <p>
              Bersama mengembangkan perangkat lunak terbaru dan berbagi
              informasi atau pengalaman dalam memecahkan suatu permasalahan.
            </p>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div>
        <div className="uk-card uk-card-default uk-text-center">
          <div className="uk-card-header">
            <img width="150" height="150" src={connection} alt="" />
            <h3 className="my-card-title uk-card-title">Connections</h3>
          </div>
          <div className="uk-card-body">
            <p>
              Berkembang bersama dalam tim dan membangun koneksi antar anggota.
            </p>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div>
        <div className="uk-card uk-card-default uk-text-center">
          <div className="uk-card-header">
            <img width="150" height="150" src={diamond} alt="" />
            <h3 className="my-card-title uk-card-title">Producing</h3>
          </div>
          <div className="uk-card-body">
            <p>
              Mampu menghasilkan suatu karya sesuai dengan kemampuan yang
              dikuasai dan memiliki kualitas unggul.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

class Index extends React.Component {
  constructor() {
    super()

    /** Reference to UIkit object */
    this.UIkit = UIkit
    this.UIkit.use(Icons)
  }

  render() {
    return (
      <div>
        <SEO />
        <Layout>
          <Hero />
          <Goals />
        </Layout>
      </div>
    )
  }
}

export default Index

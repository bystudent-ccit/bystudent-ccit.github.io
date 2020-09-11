import React from "react"
import PropTypes from "prop-types"

/**
 * Standard footer component.
 *
 * @param {object} param0
 */
const Footer = ({ url }) => (
  <div>
    <div className="uk-section uk-section-secondary uk-section-xsmall">
      <div className="uk-text-center uk-overflow-hidden uk-padding-small">
        Made with <a href={url}>&hearts;</a> by ByStudent
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  url: PropTypes.string.isRequired
}

export default Footer

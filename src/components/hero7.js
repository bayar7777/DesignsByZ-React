import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content">
          <h1 className="hero7-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero7-text4">Creative Design Portfolio</span>
              </Fragment>
            )}
          </h1>
          <p className="hero7-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero7-text5">
                  Welcome to our showcase of custom logos, flyers, posters,
                  business cards, and social media content. Discover clean and
                  modern designs tailored to your needs.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero7-actions">
            <div className="hero7-container1"></div>
            <div className="hero7-container2">
              <Link to="/contact" className="hero7-button thq-button-outline">
                <span className="hero7-text3 thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero7-text6">Contact Us</span>
                    </Fragment>
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero7.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
  action2: undefined,
}

Hero7.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  action2: PropTypes.element,
}

export default Hero7

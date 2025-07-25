import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Gallery3 from './gallery3'
import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <p className="hero2-text1 thq-body-large">
        {props.content1 ?? (
          <Fragment>
            <span className="hero2-text6">
              Convince yourself with our designs and logos!
            </span>
          </Fragment>
        )}
      </p>
      <h1 className="hero2-text2 thq-heading-1">
        {props.heading1 ?? (
          <Fragment>
            <span className="hero2-text5">Welcome to Our Design Gallery</span>
          </Fragment>
        )}
      </h1>
      <div className="hero2-container1">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <div className="hero2-actions">
                <div className="hero2-container2"></div>
                <div className="hero2-container3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery3
        content1={
          <Fragment>
            <span className="hero2-text3">
              We design custom logos company card designs Flyers Instagram
              revamp and Bold Posters
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="hero2-text4">Photo Gallery</span>
          </Fragment>
        }
        image1Src="/modern-creative-business-card-and-name-card-horizontal-simple-clean-template-design-layout-in-rectangle-size-stylish-business-card-template-or-visiting-card-design-template-free-free-vector-600w.jpg"
        image3Src="/free-blue-business-card-design-template-600w.jpg"
        image7Src="/pngtree-business-flyer-template-vector-png-image_12239978-600w.png"
        image8Src="/lgbt-pride-month-flyer-design-template-967dca3a389fcc0d55e986e25ed59d1f_screen-600w.jpg"
      ></Gallery3>
    </div>
  )
}

Hero2.defaultProps = {
  heading1: undefined,
  content1: undefined,
}

Hero2.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero2

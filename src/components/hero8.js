import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <div className="hero8-container1">
              <div className="hero8-container2">
                <div className="hero8-container3">
                  <h1 className="hero8-text10 thq-heading-1">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="hero8-text12">
                          Welcome to Our Design Portfolio
                        </span>
                      </Fragment>
                    )}
                  </h1>
                </div>
              </div>
              <span className="hero8-text11">
                {props.text ?? (
                  <Fragment>
                    <span className="hero8-text13">
                      <span>Whether you need</span>
                      <span>a clean logo, a bold</span>
                      <br></br>
                      <span>   poster, or a full-on</span>
                      <span>Instagram revamp —</span>
                      <br></br>
                      <span>  I’m here to help bring</span>
                      <span>your vision to life.</span>
                      <br></br>
                      <br></br>
                      <span>Custom requests? No</span>
                      <br></br>
                      <span>problem.👇</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="hero8-actions"></div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/designs_by_z_studio/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="hero8-hero-image thq-img-ratio-16-9"
          />
        </a>
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Alt: 'Creative Design Portfolio',
  image1Src:
    'https://images.unsplash.com/photo-1689852501130-e89d9e54aa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzA5NjMyMHw&ixlib=rb-4.1.0&q=80&w=1400',
  heading1: undefined,
  text: undefined,
}

Hero8.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  text: PropTypes.element,
}

export default Hero8

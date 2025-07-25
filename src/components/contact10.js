import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div
      className={`contact10-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text5">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text7">
                    Have a question or need a custom design? Feel free to       
                                                                               
                                                                               
                                                                               
                        reach out to me on Instagram anytime!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <p className="contact10-text3 thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text8">
                    Fast replies, fair prices, and unique results guaranteed.
                  </span>
                </Fragment>
              )}
            </p>
            <h3 className="contact10-text4 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text6">Instagram: @yourname</span>
                </Fragment>
              )}
            </h3>
            <div className="contact10-container3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: undefined,
  location1: undefined,
  content1: undefined,
  rootClassName: '',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1707573057034-3a26f6110a17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MHw&ixlib=rb-4.1.0&q=80&w=1500',
  location1Description: undefined,
  location1ImageAlt: 'Instagram Logo',
}

Contact10.propTypes = {
  heading1: PropTypes.element,
  location1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
}

export default Contact10

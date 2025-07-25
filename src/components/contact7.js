import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact7-text16">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact7-text18">
                    contact@designportfolio.com
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text17">Email</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact7-text20">
                    Send us an email at contact@designportfolio.com for
                    inquiries and project requests.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact7-text19">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact7-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  heading1: undefined,
  location1: undefined,
  location2ImgAlt: 'image2Alt',
  location1ImgAlt: 'Email Icon',
  content1: undefined,
  location2: undefined,
  location1Description: undefined,
  location2Description: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1527239441953-caffd968d952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NTIwOHw&ixlib=rb-4.1.0&q=80&w=1080',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1734547458538-ca2af39f3328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NTIwOXw&ixlib=rb-4.1.0&q=80&w=1080',
}

Contact7.propTypes = {
  heading1: PropTypes.element,
  location1: PropTypes.element,
  location2ImgAlt: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  content1: PropTypes.element,
  location2: PropTypes.element,
  location1Description: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location2ImgSrc: PropTypes.string,
}

export default Contact7

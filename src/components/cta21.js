import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta21.css'

const CTA21 = (props) => {
  return (
    <div className="cta21-container1 thq-section-padding">
      <div className="cta21-max-width thq-section-max-width">
        <div className="cta21-content">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta21-text3">
                  Ready to elevate your brand?
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta21-text6">
                  Explore our portfolio and let our designs speak for
                  themselves. Contact us today to discuss your project needs.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta21-container2">
            <div className="cta21-row thq-flex-column">
              <div className="cta21-container3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="thq-input"
                />
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta21-text5">Contact Us</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta21-text4">
                    Looking for custom designs that make an impact? You&apos;re
                    in the right place.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA21.defaultProps = {
  heading1: undefined,
  content2: undefined,
  action1: undefined,
  content1: undefined,
}

CTA21.propTypes = {
  heading1: PropTypes.element,
  content2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA21

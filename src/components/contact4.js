import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact4.css'

const Contact4 = (props) => {
  return (
    <div className="contact4-contact20 thq-section-padding">
      <div className="contact4-max-width thq-section-max-width">
        <div className="contact4-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact4-text24">
                  We are available Monday to Friday, 9am-5pm.
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact4-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact4-text26">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact4-text22">
                    Interested in working together or have any questions? Feel
                    free to reach out to us.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact4-row">
          <div className="contact4-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact4-contact-info1">
              <div className="contact4-content3">
                <h3 className="contact4-text13 thq-heading-3">Email</h3>
                <p className="contact4-text14 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact4-text21">
                        Follow us on social media:
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact4-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact4-text20">
                      contact@yourcompany.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact4-content4">
            <svg
              viewBox="0 0 1024 1024"
              className="contact4-icon3 thq-icon-medium"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact4-contact-info2">
              <div className="contact4-content5">
                <h3 className="contact4-text15 thq-heading-3">Phone</h3>
                <p className="contact4-text16 thq-body-large">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="contact4-text27">@yourcompanyname</span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact4-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact4-text23">+1 (123) 456-7890</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact4-content6">
            <svg
              viewBox="0 0 1024 1024"
              className="contact4-icon5 thq-icon-medium"
            >
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact4-contact-info3">
              <div className="contact4-content7">
                <h3 className="contact4-text17 thq-heading-3">Office</h3>
                <p className="contact4-text18 thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact4-text25">
                        Join our newsletter for updates and promotions.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact4-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact4-text19">
                      123 Main Street, City, Country
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact4.defaultProps = {
  address1: undefined,
  email1: undefined,
  content3: undefined,
  content1: undefined,
  phone1: undefined,
  content2: undefined,
  content5: undefined,
  heading1: undefined,
  content4: undefined,
}

Contact4.propTypes = {
  address1: PropTypes.element,
  email1: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  content4: PropTypes.element,
}

export default Contact4

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div
      className={`contact3-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <div className="contact3-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact3-text7">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="contact3-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact3-text5">
                    Interested in working together or have any questions? Feel
                    free to reach out to us.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact3-row">
          <div className="contact3-content2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="contact3-icon1"
            >
              <path
                d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772a4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153a4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772a4.9 4.9 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="contact3-contact-info">
              <div className="contact3-content3">
                <a
                  href="https://www.instagram.com/direct/t/17842205445540829"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact3-link"
                >
                  <h3 className="contact3-text3 thq-heading-3">Designs.By.Z</h3>
                </a>
                <p className="contact3-text4 thq-body-large">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="contact3-text6">
                        Thank you for considering us for your design needs!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  content1: undefined,
  content4: undefined,
  heading1: undefined,
  rootClassName: '',
}

Contact3.propTypes = {
  content1: PropTypes.element,
  content4: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Contact3

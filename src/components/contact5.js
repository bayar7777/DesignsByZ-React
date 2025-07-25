import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact5.css'

const Contact5 = (props) => {
  return (
    <div className="contact5-container thq-section-padding">
      <div className="contact5-max-width thq-section-max-width">
        <div className="contact5-section-title">
          <div className="contact5-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact5-text22">Contact us</span>
                </Fragment>
              )}
            </h2>
            <p className="contact5-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact5-text19">
                    If you have any questions or any request you can also
                    contact us in different ways!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact5-content2 thq-flex-row">
          <div className="contact5-content3">
            <div className="contact5-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact5-contact-info1">
                <h3 className="contact5-text12 thq-heading-3">Email</h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact5-text20">
                        Contact us on Email if you have any requests or
                        questions.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact5-text17">
                        designs.by.z.studio@gmail.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact5-content5">
              <svg
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
                className="contact5-icon3"
              >
                <path
                  d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="contact5-contact-info2">
                <h3 className="contact5-text14 thq-heading-3">Instagram</h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact5-text18">
                        Contact us on Instagram if you have any requests or
                        question.
                      </span>
                    </Fragment>
                  )}
                </p>
                <a
                  href="https://www.instagram.com/direct/t/17842205445540829"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact5-text16 thq-body-small"
                >
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact5-text21">
                        designs_by_z_studio
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="contact5-image thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
  )
}

Contact5.defaultProps = {
  email: undefined,
  content3: undefined,
  content1: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1721069662098-f2031c2319b8?ixid=M3w5MTMyMXwwfDF8YWxsfDIyfHx8fHx8Mnx8MTcyMTE0NDMwMHw&ixlib=rb-4.0.3&w=800',
  content2: undefined,
  imageAlt: 'image',
  phone1: undefined,
  heading1: undefined,
}

Contact5.propTypes = {
  email: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  imageSrc: PropTypes.string,
  content2: PropTypes.element,
  imageAlt: PropTypes.string,
  phone1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact5

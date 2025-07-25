import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial18.css'

const Testimonial18 = (props) => {
  return (
    <div
      className={`testimonial18-testimonial17 thq-section-padding ${props.rootClassName} `}
    >
      <div className="testimonial18-max-width thq-section-max-width">
        <div className="testimonial18-container1 thq-grid-2">
          <span className="testimonial18-text10">
            {props.text ?? (
              <Fragment>
                <span className="testimonial18-text20">
                  Designed by [designs_by_z_studio]
                </span>
              </Fragment>
            )}
          </span>
          <div className="testimonial18-column1 thq-card">
            <div className="testimonial18-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial18-text11 thq-body-small">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial18-text21">
                    &quot;Absolutely loved the logo they created for my brand!
                    It was clean, modern, and exactly what I had in mind.
                    Communication was smooth and delivery was fast. Highly
                    recommend!&quot;
                  </span>
                </Fragment>
              )}
            </span>
            <div className="testimonial18-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial18-avatar-image1 thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial18-avatar-content1">
                <span className="testimonial18-text12 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial18-text15">
                        <span>
                          Anna
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="testimonial18-text17">M</span>
                        <span>yers </span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial18-section-title">
            <div className="testimonial18-container2">
              <div className="testimonial18-container3"></div>
            </div>
          </div>
        </div>
        <div className="testimonial18-column2 thq-card">
          <div className="testimonial18-stars2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
          </div>
          <span className="testimonial18-text13 thq-body-small">
            {props.review2 ?? (
              <Fragment>
                <span className="testimonial18-text22">
                  &quot;Great experience from start to finish. The poster design
                  stood out and made my event look professional. Will definitely
                  come back for future projects!&quot;
                </span>
              </Fragment>
            )}
          </span>
          <div className="testimonial18-avatar2">
            <img
              alt={props.author2Alt}
              src={props.author2Src}
              className="testimonial18-avatar-image2 thq-img-round thq-img-ratio-1-1"
            />
            <div className="testimonial18-avatar-content2">
              <span className="testimonial18-text14 thq-body-small">
                {props.author2 ?? (
                  <Fragment>
                    <span className="testimonial18-text19">Roger Kean</span>
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

Testimonial18.defaultProps = {
  author2Alt: 'Author Avatar',
  author1Alt: 'Author Avatar',
  rootClassName: '',
  author1Name: undefined,
  author2: undefined,
  text: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=2000',
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
  review2: undefined,
}

Testimonial18.propTypes = {
  author2Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  author1Name: PropTypes.element,
  author2: PropTypes.element,
  text: PropTypes.element,
  author1Src: PropTypes.string,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  review2: PropTypes.element,
}

export default Testimonial18

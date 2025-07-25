import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div
      className={`features1-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text22">
                    Unlock Your Brand&apos;s Potential with Our Designs
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text14">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text21">
                  Explore the key features of our design portfolio
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text20">
                        Custom Design Concepts
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text16">
                        Receive unique and tailored design concepts based on
                        your specific needs
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text15">Feedback Loop</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text13">
                        Engage in a collaborative process by providing feedback
                        to refine designs
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text18">Finalize Designs</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Get ready-to-use final designs that elevate your brand
                        identity
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <Link to="/about1" className="features1-button thq-button-filled">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text17">Browse Gallery</span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1630734242539-98264700d612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzA5NjMyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImageAlt: 'Feedback Loop Image',
  feature2Description: undefined,
  sectionTitle: undefined,
  rootClassName: '',
  feature2Title: undefined,
  feature1Description: undefined,
  mainAction: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1704138031624-7aec2ed01304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzA5NjMyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
  sectionDescription: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1676565415279-2beea7ea080f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzA5NjMyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  slogan: undefined,
  feature1ImageAlt: 'Custom Design Concepts Image',
  feature3ImageAlt: 'Finalize Designs Image',
}

Features1.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
}

export default Features1

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div
      className={`stats2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text21">
                  We have designed over 100 unique custom logos for our clients.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text31">Our Stats</span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text23">
                  Our designs are tailored to each brand&apos;s identity and
                  vision.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text30">100+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text29">Custom Logos Created</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text27">50+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text22">
                      Flyers and Posters Designed
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text24">200+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      Business Cards Printed
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text28">Social Media Content</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Engaging social media content created for various brands.
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

Stats2.defaultProps = {
  content1: undefined,
  stat2Description: undefined,
  image1Alt: 'Custom Logo Design',
  content2: undefined,
  stat3: undefined,
  stat4Description: undefined,
  stat3Description: undefined,
  stat2: undefined,
  stat4: undefined,
  stat1Description: undefined,
  rootClassName: '',
  stat1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1713944183427-f4636cb62325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzA5NjMxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
}

Stats2.propTypes = {
  content1: PropTypes.element,
  stat2Description: PropTypes.element,
  image1Alt: PropTypes.string,
  content2: PropTypes.element,
  stat3: PropTypes.element,
  stat4Description: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  stat4: PropTypes.element,
  stat1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  stat1: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Stats2

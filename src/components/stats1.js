import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container2 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats1-text23">Customer Feedback</span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats1-text30">
                  Customer results presented in a fashion way
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats1-text31">
                  Business improvements emphasized with numbers to increase
                  creadibility
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats1-container3">
            <div className="stats1-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats1-text25">80%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats1-text22">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats1-text24">90%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats1-text26">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats1-container6">
            <div className="stats1-container7">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats1-text29">95%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats1-text27">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container8">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats1-text28">100%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats1-text21">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="stats1-container9">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat4Description: undefined,
  stat1Description: undefined,
  content1: undefined,
  stat2: undefined,
  stat1: undefined,
  stat2Description: undefined,
  stat3Description: undefined,
  stat4: undefined,
  stat3: undefined,
  image1Alt: 'Design Portfolio',
  heading1: undefined,
  content2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1618244965061-1d27b208d6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Stats1.propTypes = {
  stat4Description: PropTypes.element,
  stat1Description: PropTypes.element,
  content1: PropTypes.element,
  stat2: PropTypes.element,
  stat1: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3Description: PropTypes.element,
  stat4: PropTypes.element,
  stat3: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Stats1

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq12.css'

const FAQ12 = (props) => {
  return (
    <div className={`faq12faq7 thq-section-padding ${props.rootClassName} `}>
      <div className="faq12-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <div className="faq12-content2">
            <h2 className="thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq12-text3">Still have a question?</span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="faq12-container">
            <Link to="/contact" className="faq12-button thq-button-outline">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="faq12-text2">Contact</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ12.defaultProps = {
  rootClassName: '',
  action1: undefined,
  heading2: undefined,
}

FAQ12.propTypes = {
  rootClassName: PropTypes.string,
  action1: PropTypes.element,
  heading2: PropTypes.element,
}

export default FAQ12

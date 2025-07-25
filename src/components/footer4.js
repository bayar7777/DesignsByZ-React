import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="footer4-text1 thq-body-small">
                ©2025 Webs.By.B
              </span>
            </div>
            <div className="footer4-footer-links">
              <Link to="/legal2" className="footer4-text2 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text6">Privacy Policy</span>
                  </Fragment>
                )}
              </Link>
              <Link to="/legal" className="footer4-text3 thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text7">Terms of Service</span>
                  </Fragment>
                )}
              </Link>
              <Link to="/legal1" className="footer4-text4 thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text5">Cookies Settings</span>
                  </Fragment>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  rootClassName: '',
  cookiesLink: undefined,
  privacyLink: undefined,
  termsLink: undefined,
}

Footer4.propTypes = {
  rootClassName: PropTypes.string,
  cookiesLink: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
}

export default Footer4

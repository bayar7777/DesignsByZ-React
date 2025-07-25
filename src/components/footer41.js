import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer41.css'

const Footer41 = (props) => {
  return (
    <footer className="footer41-footer7 thq-section-padding">
      <div className="footer41-max-width thq-section-max-width">
        <div className="footer41-content">
          <div className="footer41-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer41-logo2"
            />
          </div>
        </div>
        <div className="footer41-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer41-row">
            <div className="footer41-container">
              <span className="footer41-text1 thq-body-small">© Webs.By,B</span>
            </div>
            <div className="footer41-footer-links">
              <Link to="/legal2" className="footer41-text2 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer41-text7">Privacy Policy</span>
                  </Fragment>
                )}
              </Link>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer41-text6">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <Link to="/legal1" className="footer41-text4 thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer41-text5">Cookies Settings</span>
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

Footer41.defaultProps = {
  cookiesLink: undefined,
  termsLink: undefined,
  logoAlt: 'Logo',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  privacyLink: undefined,
}

Footer41.propTypes = {
  cookiesLink: PropTypes.element,
  termsLink: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer41

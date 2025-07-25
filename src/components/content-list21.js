import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list21.css'

const ContentList21 = (props) => {
  return (
    <div
      className={`content-list21-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list21-max-width thq-flex-column thq-section-max-width">
        <div className="content-list21-content2 thq-flex-column">
          <ul>
            <li className="content-list21-li1 thq-flex-column list-item">
              <h2 className="content-list21-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list21-text66">
                      Welcome to Our Design Portfolio
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list21-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list21-text67">
                      Explore our collection of custom logos, flyers, posters,
                      business cards, and social media content.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list21-ul2 thq-flex-column"></ul>
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="content-list21-text11">
                      <span>Privacy Policy</span>
                      <br></br>
                      <span>Last updated: July 11, 2025</span>
                      <br></br>
                      <br></br>
                      <span>
                        At Designs.By.Z, your privacy is important to us. This
                        Privacy Policy explains what limited information we may
                        collect, how it’s used, and your rights.
                      </span>
                      <br></br>
                      <br></br>
                      <span>1. Information We Collect</span>
                      <br></br>
                      <span>
                        We do not collect personal information such as names,
                        addresses, or phone numbers directly through this
                        website.
                      </span>
                      <br></br>
                      <span>However, we may collect:</span>
                      <br></br>
                      <br></br>
                      <span>
                        General website usage data (e.g. page views, device
                        type) via analytics tools
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Messages or project requests sent through Instagram or
                        email
                      </span>
                      <br></br>
                      <br></br>
                      <span>2. How We Use Information</span>
                      <br></br>
                      <span>
                        Any information you choose to share (like messages via
                        Instagram or email) is only used to:
                      </span>
                      <br></br>
                      <br></br>
                      <span>Respond to your inquiries</span>
                      <br></br>
                      <br></br>
                      <span>Discuss design services</span>
                      <br></br>
                      <br></br>
                      <span>Deliver agreed-upon work</span>
                      <br></br>
                      <br></br>
                      <span>
                        We do not sell or share your data with third parties.
                      </span>
                      <br></br>
                      <br></br>
                      <span>3. Third-Party Links</span>
                      <br></br>
                      <span>
                        Our website may link to external platforms like
                        Instagram. We are not responsible for how those sites
                        handle your data. Please review their privacy policies
                        if you visit them.
                      </span>
                      <br></br>
                      <br></br>
                      <span>4. Contact Us</span>
                      <br></br>
                      <span>Have questions or concerns about your data?</span>
                      <br></br>
                      <span>You can reach out anytime via:</span>
                      <br></br>
                      <span>📧 designs.by.z.studio@gmail.com</span>
                      <br></br>
                      <span>
                        📱 Or DM us on Instagram: @designs_by_z_studio
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </li>
          </ul>
        </div>
        <div className="content-list21-content3 thq-flex-column">
          <ul>
            <li className="content-list21-li2 thq-flex-column list-item"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList21.defaultProps = {
  text: undefined,
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

ContentList21.propTypes = {
  text: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ContentList21

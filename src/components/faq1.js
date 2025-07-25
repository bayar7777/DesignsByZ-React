import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className={`faq1faq7 thq-section-padding ${props.rootClassName} `}>
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="faq1-text22">FAQs</span>
              </Fragment>
            )}
          </h2>
          <p className="faq1-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="faq1-text16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question ?? (
                <Fragment>
                  <span className="faq1-text27">
                    What type of design services do you offer?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq1Answer ?? (
                <Fragment>
                  <span className="faq1-text14">
                    We offer custom logo design, flyer design, poster design,
                    business card design, and social media content design
                    services.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question ?? (
                <Fragment>
                  <span className="faq1-text25">
                    How can I contact you for pricing or project discussions?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq2Answer ?? (
                <Fragment>
                  <span className="faq1-text19">
                    You can contact us through the contact form on our website
                    or email us directly at [email protected]
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question ?? (
                <Fragment>
                  <span className="faq1-text24">
                    Do you provide revisions for the designs?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq3Answer ?? (
                <Fragment>
                  <span className="faq1-text23">
                    Yes, we provide a certain number of revisions based on the
                    package you choose. Additional revisions may be subject to
                    extra charges.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question ?? (
                <Fragment>
                  <span className="faq1-text21">
                    What is the typical turnaround time for a design project?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq4Answer ?? (
                <Fragment>
                  <span className="faq1-text18">
                    The turnaround time varies depending on the scope of the
                    project. We will provide you with an estimated timeline once
                    we discuss your project requirements.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question ?? (
                <Fragment>
                  <span className="faq1-text17">
                    Do you offer printing services for the designs?
                  </span>
                </Fragment>
              )}
            </p>
            <span className="thq-body-small">
              {props.faq5Answer ?? (
                <Fragment>
                  <span className="faq1-text15">
                    We do not offer printing services directly, but we can
                    recommend trusted printing partners to bring your designs to
                    life.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content2">
            <h2 className="thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq1-text20">Still have a question?</span>
                </Fragment>
              )}
            </h2>
            <p className="faq1-text13 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="faq1-text28">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="faq1-container">
            <Link to="/contact" className="faq1-button thq-button-outline">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="faq1-text26">Contact</span>
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

FAQ1.defaultProps = {
  rootClassName: '',
  faq1Answer: undefined,
  faq5Answer: undefined,
  content1: undefined,
  faq5Question: undefined,
  faq4Answer: undefined,
  faq2Answer: undefined,
  heading2: undefined,
  faq4Question: undefined,
  heading1: undefined,
  faq3Answer: undefined,
  faq3Question: undefined,
  faq2Question: undefined,
  action1: undefined,
  faq1Question: undefined,
  content2: undefined,
}

FAQ1.propTypes = {
  rootClassName: PropTypes.string,
  faq1Answer: PropTypes.element,
  faq5Answer: PropTypes.element,
  content1: PropTypes.element,
  faq5Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq2Answer: PropTypes.element,
  heading2: PropTypes.element,
  faq4Question: PropTypes.element,
  heading1: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq3Question: PropTypes.element,
  faq2Question: PropTypes.element,
  action1: PropTypes.element,
  faq1Question: PropTypes.element,
  content2: PropTypes.element,
}

export default FAQ1

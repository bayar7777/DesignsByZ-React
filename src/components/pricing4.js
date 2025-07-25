import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing4.css'

const Pricing4 = (props) => {
  return (
    <div className="pricing4-pricing10 thq-section-padding">
      <div className="pricing4-max-width thq-section-max-width">
        <div className="pricing4-section-title">
          <span className="pricing4-text10 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="pricing4-text43">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="pricing4-content1">
            <h2 className="pricing4-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing4-text42">Pricing plan</span>
                </Fragment>
              )}
            </h2>
            <p className="pricing4-text12 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="pricing4-text39">
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
        </div>
        <div className="pricing4-content2">
          <div className="pricing4-column1 thq-card">
            <div className="pricing4-content3">
              <div className="pricing4-price1">
                <p className="pricing4-text13 thq-body-large">
                  {props.plan1 ?? (
                    <Fragment>
                      <span className="pricing4-text34">Basic plan</span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text14 thq-heading-3">
                  {props.plan1Price ?? (
                    <Fragment>
                      <span className="pricing4-text36">$20/mo</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text15 thq-body-large">
                  {props.plan1Yearly ?? (
                    <Fragment>
                      <span className="pricing4-text45">or $200 yearly</span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list1">
                <div className="pricing4-list-item1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text35">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text37">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item3">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text44">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className="pricing4-button1 thq-button-outline">
              <span className="thq-body-small">
                {props.plan1Action ?? (
                  <Fragment>
                    <span className="pricing4-text31">Get started</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="pricing4-column2 thq-card">
            <div className="pricing4-price2">
              <div className="pricing4-price3">
                <p className="pricing4-text20 thq-body-large">
                  {props.plan2 ?? (
                    <Fragment>
                      <span className="pricing4-text46">Business plan</span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text21 thq-heading-3">
                  {props.plan2Price ?? (
                    <Fragment>
                      <span className="pricing4-text38">$29/mo</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text22 thq-body-large">
                  {props.plan2Yearly ?? (
                    <Fragment>
                      <span className="pricing4-text29">or $299 yearly</span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list2">
                <div className="pricing4-list-item4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text40">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item5">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text30">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item6">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text47">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item7">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature4 ?? (
                      <Fragment>
                        <span className="pricing4-text41">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item8">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature5 ?? (
                      <Fragment>
                        <span className="pricing4-text32">
                          Feature text goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className="pricing4-button2 thq-button-filled">
              <span className="thq-body-small">
                {props.plan2Action ?? (
                  <Fragment>
                    <span className="pricing4-text33">Get started</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing4.defaultProps = {
  plan2Yearly: undefined,
  plan2Feature2: undefined,
  plan1Action: undefined,
  plan2Feature5: undefined,
  plan2Action: undefined,
  plan1: undefined,
  plan1Feature1: undefined,
  plan1Price: undefined,
  plan1Feature2: undefined,
  plan2Price: undefined,
  content2: undefined,
  plan2Feature1: undefined,
  plan2Feature4: undefined,
  heading1: undefined,
  content1: undefined,
  plan1Feature3: undefined,
  plan1Yearly: undefined,
  plan2: undefined,
  plan2Feature3: undefined,
}

Pricing4.propTypes = {
  plan2Yearly: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan1Action: PropTypes.element,
  plan2Feature5: PropTypes.element,
  plan2Action: PropTypes.element,
  plan1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Price: PropTypes.element,
  content2: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Feature4: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan2: PropTypes.element,
  plan2Feature3: PropTypes.element,
}

export default Pricing4

import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing141.css'

const Pricing141 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing141-pricing23 thq-section-padding">
      <div className="pricing141-max-width thq-section-max-width">
        <div className="pricing141-section-title">
          <span className="pricing141-text10 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="pricing141-text85">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="pricing141-content">
            <h2 className="pricing141-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing141-text53">Pricing plan</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="pricing141-tabs">
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button1 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button2 thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly === true && (
          <div className="pricing141-container1">
            <div className="pricing141-column1 thq-card">
              <div className="pricing141-price10">
                <div className="pricing141-price11">
                  <p className="pricing141-text14 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="pricing141-text65">
                          Social Media Brand Kit
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing141-text15 thq-heading-3">
                    {props.plan1Price ?? (
                      <Fragment>
                        <span className="pricing141-text59">$20 (1 Pack)</span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="pricing141-list1">
                  <div className="pricing141-list-item10">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing141-icon10 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="pricing141-text73">
                            Profile pic, banner, story highlights
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item11">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing141-icon12 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="pricing141-text79">
                            Color palette + typography suggestions
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item12">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing141-icon14 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="pricing141-text74">
                            Logo resizing for all platforms
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/direct/t/17842205445540829"
                target="_blank"
                rel="noreferrer noopener"
                className="pricing141-button3 thq-button-animated thq-button-outline"
              >
                <span className="thq-body-small">
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing141-text86">Get started</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
            <div className="pricing141-column2 thq-card">
              <div className="pricing141-price12">
                <div className="pricing141-price13">
                  <p className="pricing141-text20 thq-body-large">
                    {props.plan2 ?? (
                      <Fragment>
                        <span className="pricing141-text70">
                          Flyer or Poster Design
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing141-text21 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="pricing141-text80">
                          $20 (2 Designs)
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="pricing141-list2">
                  <div className="pricing141-list-item13">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing141-icon16 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="pricing141-text72">
                            A4 or social media formats
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item14">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing141-icon18 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="pricing141-text75">
                            Bold, clean designs
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item15">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing141-icon20 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="pricing141-text55">
                            Ready to print or post online
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/direct/t/17842205445540829"
                target="_blank"
                rel="noreferrer noopener"
                className="pricing141-button4 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing141-text68">Get started</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        )}
        {isMonthly === false && (
          <div className="pricing141-container2">
            <div className="pricing141-column3 thq-card">
              <div className="pricing141-price14">
                <div className="pricing141-price15">
                  <span className="pricing141-text26 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="pricing141-text50">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing141-text27 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="pricing141-text77">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing141-text78">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list3">
                  <div className="pricing141-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="pricing141-text66">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="pricing141-text71">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="pricing141-text82">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button5 thq-button-animated thq-button-outline">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="pricing141-text58">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column4 thq-card">
              <div className="pricing141-price16">
                <div className="pricing141-price17">
                  <span className="pricing141-text33 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="pricing141-text69">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing141-text34 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="pricing141-text81">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing141-text63">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list4">
                  <div className="pricing141-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="pricing141-text84">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="pricing141-text83">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="pricing141-text76">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="pricing141-text61">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button6 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="pricing141-text60">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column5 thq-card">
              <div className="pricing141-price18">
                <div className="pricing141-price19">
                  <span className="pricing141-text41 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="pricing141-text51">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing141-text42 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="pricing141-text52">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing141-text62">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list5">
                  <div className="pricing141-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="pricing141-text67">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="pricing141-text64">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="pricing141-text56">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="pricing141-text57">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="pricing141-text87">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button7 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="pricing141-text54">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing141.defaultProps = {
  plan11: undefined,
  plan31: undefined,
  plan3Price1: undefined,
  heading1: undefined,
  plan3Action1: undefined,
  plan2Feature3: undefined,
  plan3Feature31: undefined,
  plan3Feature41: undefined,
  plan1Action1: undefined,
  plan1Price: undefined,
  plan2Action1: undefined,
  plan2Feature41: undefined,
  plan3Yearly1: undefined,
  plan2Yearly1: undefined,
  plan3Feature21: undefined,
  plan1: undefined,
  plan1Feature11: undefined,
  plan3Feature11: undefined,
  plan2Action: undefined,
  plan21: undefined,
  plan2: undefined,
  plan1Feature21: undefined,
  plan2Feature1: undefined,
  plan1Feature1: undefined,
  plan1Feature3: undefined,
  plan2Feature2: undefined,
  plan2Feature31: undefined,
  plan1Price1: undefined,
  plan1Yearly1: undefined,
  plan1Feature2: undefined,
  plan2Price: undefined,
  plan2Price1: undefined,
  plan1Feature31: undefined,
  plan2Feature21: undefined,
  plan2Feature11: undefined,
  content1: undefined,
  plan1Action: undefined,
  plan3Feature51: undefined,
}

Pricing141.propTypes = {
  plan11: PropTypes.element,
  plan31: PropTypes.element,
  plan3Price1: PropTypes.element,
  heading1: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan1: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan2Action: PropTypes.element,
  plan21: PropTypes.element,
  plan2: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Feature11: PropTypes.element,
  content1: PropTypes.element,
  plan1Action: PropTypes.element,
  plan3Feature51: PropTypes.element,
}

export default Pricing141

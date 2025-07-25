import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features243.css'

const Features243 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div
      className={`features243-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features243-container2 thq-section-max-width">
        <div className="features243-image-container">
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features243-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features243-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features243-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features243-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features243-tab-horizontal1"
          >
            <div className="features243-divider-container1">
              {activeTab === 0 && (
                <div className="features243-container3"></div>
              )}
            </div>
            <div className="features243-content1">
              <h2 className="features243-feature1-title thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features243-text5">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <span className="features243-feature1-description thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features243-text1">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features243-tab-horizontal2"
          >
            <div className="features243-divider-container2">
              {activeTab === 1 && (
                <div className="features243-container4"></div>
              )}
            </div>
            <div className="features243-content2">
              <h2 className="features243-feature2-title thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features243-text2">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features243-text6">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features243-tab-horizontal3"
          >
            <div className="features243-divider-container3">
              {activeTab === 2 && (
                <div className="features243-container5"></div>
              )}
            </div>
            <div className="features243-content3">
              <h2 className="features243-feature3-title thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features243-text3">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features243-text4">Prop Content</span>
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

Features243.defaultProps = {
  feature2ImgAlt: 'Business Card Design Image',
  feature1ImgAlt: 'Custom Logo Design',
  feature1Description: undefined,
  feature2Title: undefined,
  rootClassName: '',
  feature3Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1639437038507-749a056cd07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MXw&ixlib=rb-4.1.0&q=80&w=1400',
  feature3ImgAlt: 'Poster Design Image',
  feature3Description: undefined,
  feature1ImgSrc: '/bild_2025-07-20_134619005-1400w.png',
  feature1Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1730324902640-185c867d93d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MHw&ixlib=rb-4.1.0&q=80&w=1400',
  feature2Description: undefined,
}

Features243.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features243

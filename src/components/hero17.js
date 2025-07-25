import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text10 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text14">
                  Welcome to my Creative Design Portfolio!
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text15">
                  I offer custom logos, flyers, posters, business cards, and
                  social media content tailored to your brand or project.
                  Explore a gallery of clean, modern, and eye-catching designs
                  that speak for themselves.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <Link to="/about1" className="hero17-text12 thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text16">Explore Designs</span>
                </Fragment>
              )}
            </Link>
          </button>
          <button className="thq-button-outline hero17-button2">
            <Link to="/contact" className="hero17-text13 thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text17">Contact Me</span>
                </Fragment>
              )}
            </Link>
          </button>
        </div>
      </div>
      <div className="hero17-container1">
        <div className="hero17-container2">
          <div className="hero17-content2">
            <div className="thq-mask-image-horizontal thq-animated-group-container-horizontal hero17-row-container">
              <div className="hero17-strip thq-animated-group-horizontal">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="hero17-image"
                />
              </div>
            </div>
          </div>
          <a
            href="https://www.instagram.com/designs_by_z_studio/"
            target="_blank"
            rel="noreferrer noopener"
            className="hero17-link"
          >
            {props.text1 ?? (
              <Fragment>
                <span className="hero17-text18">
                  <span className="hero17-text19">
                    We’re a creative design company bringing bold ideas to life
                    — from logos to posters and more. Known for quality, speed,
                    and standout visuals. Want to discuss prices or start your
                    project? Just click the   link and message us on Instagram: 
                                                                         
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hero17-text20">👉</span>
                  <span className="hero17-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hero17-text22">@designs_by_z_studio</span>
                </span>
              </Fragment>
            )}
          </a>
        </div>
      </div>
      <div>
        <div className="hero17-container4">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  heading1: undefined,
  imageSrc2: '/screenshot%202025-07-20%20220117-900w.jpg',
  content1: undefined,
  action1: undefined,
  action2: undefined,
  text1: undefined,
  rootClassName: '',
  imageAlt2: 'image',
}

Hero17.propTypes = {
  heading1: PropTypes.element,
  imageSrc2: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Hero17

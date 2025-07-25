import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div
      className={`features23-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container1">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="features23-text36">Explore Our Features</span>
              </Fragment>
            )}
          </h2>
          <span className="features23-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="features23-text28">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
          <Link to="/contact" className="features23-button thq-button-filled">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="features23-text35">Contact Us</span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features23-text37">Custom Logos</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text13 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features23-text29">
                    Unique and personalized logos tailored to your brand
                    identity.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features23-text27">Flyers</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text15 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features23-text34">
                    Eye-catching flyers designed to make a statement for your
                    events or promotions.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features23-text24">Posters</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text17 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features23-text32">
                    Creative posters that grab attention and convey your message
                    effectively.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature4Title ?? (
                <Fragment>
                  <span className="features23-text25">Business Cards</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text19 thq-body-small">
              {props.feature4Description ?? (
                <Fragment>
                  <span className="features23-text26">
                    Professional business card designs that leave a lasting
                    impression on clients.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature5Title ?? (
                <Fragment>
                  <span className="features23-text31">
                    Social Media Content
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text21 thq-body-small">
              {props.feature5Description ?? (
                <Fragment>
                  <span className="features23-text38">
                    Engaging social media graphics to enhance your online
                    presence and engagement.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container8 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image6 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature6Title ?? (
                <Fragment>
                  <span className="features23-text30">Custom Projects</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text23 thq-body-small">
              {props.feature6Description ?? (
                <Fragment>
                  <span className="features23-text33">
                    Bespoke design solutions for unique projects tailored to
                    your specific needs.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature3ImageAlt: 'Posters Image',
  feature3Title: undefined,
  rootClassName: '',
  feature4Title: undefined,
  feature4Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1726047949351-d4ec0ff0fd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  content1: undefined,
  feature1Description: undefined,
  feature2ImageAlt: 'Flyers Image',
  feature6Title: undefined,
  feature5Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1718670014007-39db58612bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1667085568155-962658aab658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1688816639089-d7e7dab4169e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature6Description: undefined,
  feature4ImageAlt: 'Business Cards Image',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1539710066450-2b50b7d3f9e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature6ImageAlt: 'Custom Projects Image',
  feature2Description: undefined,
  action1: undefined,
  heading1: undefined,
  feature5ImageAlt: 'Social Media Content Image',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1676565415268-76b36c46b6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
  feature5Description: undefined,
  feature1ImageAlt: 'Custom Logos Image',
}

Features23.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature4Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  content1: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature6Title: PropTypes.element,
  feature5Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature6Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature5Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features23

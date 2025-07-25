import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div
      className={`testimonial16-testimonial13 thq-section-padding ${props.rootClassName} `}
    >
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial16-text29">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial16-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial16-text23">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container12 thq-card">
            <div className="testimonial16-container13">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container14">
                <strong className="testimonial16-text12 thq-body-large">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial16-text27">John Smith</span>
                    </Fragment>
                  )}
                </strong>
              </div>
            </div>
            <span className="testimonial16-text13 thq-body-small">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial16-text24">
                    I was amazed by the creativity and attention to detail in
                    the designs provided by this company. Highly recommended!
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container15 thq-card">
            <div className="testimonial16-container16">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container17">
                <strong className="testimonial16-text14 thq-body-large">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial16-text26">
                        Emily Johnson
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
            </div>
            <span className="testimonial16-text15 thq-body-small">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial16-text20">
                    The team delivered exactly what I was looking for in a
                    timely manner. Will definitely work with them again!
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container18 thq-card">
            <div className="testimonial16-container19">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container20">
                <strong className="thq-body-large">
                  {props.author3Name ?? (
                    <Fragment>
                      <span className="testimonial16-text21">
                        Michael Brown
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
            </div>
            <span className="testimonial16-text17 thq-body-small">
              {props.review3 ?? (
                <Fragment>
                  <span className="testimonial16-text28">
                    Professionalism and quality are the hallmarks of this design
                    portfolio. I couldn&apos;t be happier with the results.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container21 thq-card">
            <div className="testimonial16-container22">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image4"
              />
              <div className="testimonial16-container23">
                <strong className="thq-body-large">
                  {props.author4Name ?? (
                    <Fragment>
                      <span className="testimonial16-text22">Sarah Davis</span>
                    </Fragment>
                  )}
                </strong>
              </div>
            </div>
            <span className="testimonial16-text19 thq-body-small">
              {props.review4 ?? (
                <Fragment>
                  <span className="testimonial16-text25">
                    Exceptional service and top-notch designs. They understood
                    my vision and brought it to life beyond my expectations.
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

Testimonial16.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  author4Src:
    'https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'image',
  review2: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NzAwNHw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Alt: 'image',
  author3Name: undefined,
  author4Name: undefined,
  content1: undefined,
  review1: undefined,
  review4: undefined,
  author2Name: undefined,
  author1Name: undefined,
  author1Alt: 'image',
  author4Alt: 'image',
  review3: undefined,
  heading1: undefined,
}

Testimonial16.propTypes = {
  author3Src: PropTypes.string,
  rootClassName: PropTypes.string,
  author4Src: PropTypes.string,
  author2Src: PropTypes.string,
  author2Alt: PropTypes.string,
  review2: PropTypes.element,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.element,
  heading1: PropTypes.element,
}

export default Testimonial16

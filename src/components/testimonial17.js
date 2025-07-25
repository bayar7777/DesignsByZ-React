import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text25">
                  Client Testimonials
                </span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text24">
                  Working with yourname was a game-changer for our brand. The
                  logo and social media designs elevated our online presence and
                  helped us connect with our target audience in a meaningful
                  way.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Founder, Tech Startup X
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        Amazing designs and excellent service!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Michael Chen
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Artist &amp; Illustrator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        I was blown away by the creativity and attention to
                        detail in the flyer design yourname created for my art
                        exhibition. It captured the essence of my work
                        perfectly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Emily Rodriguez
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Small Business Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        I couldn&apos;t be happier with the business card design
                        yourname crafted for my bakery. It&apos;s stylish,
                        professional, and has received so many compliments from
                        my customers.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            David Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Fashion Entrepreneur
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        The poster design yourname created for our fashion event
                        was a showstopper! It captured the essence of our brand
                        and attracted a lot of attention. Highly recommended!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Alt: 'Image of David Lee',
  content1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MHw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  author2Position: undefined,
  review3: undefined,
  author2Alt: 'Image of Michael Chen',
  author1Src:
    'https://images.unsplash.com/photo-1623252729328-9941b271ad48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MHw&ixlib=rb-4.1.0&q=80&w=1080',
  review2: undefined,
  author1Name: undefined,
  author1Alt: 'Image of Sarah Johnson',
  review4: undefined,
  review1: undefined,
  author3Position: undefined,
  author4Name: undefined,
  author3Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzAwODk3MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: undefined,
  author1Position: undefined,
  author2Name: undefined,
  author3Alt: 'Image of Emily Rodriguez',
}

Testimonial17.propTypes = {
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author2Src: PropTypes.string,
  heading1: PropTypes.element,
  author2Position: PropTypes.element,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  author1Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review4: PropTypes.element,
  review1: PropTypes.element,
  author3Position: PropTypes.element,
  author4Name: PropTypes.element,
  author3Name: PropTypes.element,
  author3Src: PropTypes.string,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
}

export default Testimonial17

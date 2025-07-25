import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list2.css'

const ContentList2 = (props) => {
  return (
    <div
      className={`content-list2-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list2-max-width thq-flex-column thq-section-max-width">
        <div className="content-list2-content10 thq-flex-column">
          <ul>
            <li className="content-list2-li1 thq-flex-column list-item">
              <h2 className="content-list2-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list2-text22">Custom Logos</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list2-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list2-text10">
                      Explore our collection of unique and personalized logos
                      designed to make your brand stand out.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list2-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list2-text14">Flyers</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list2-text15">
                          Check out our eye-catching flyer designs perfect for
                          promoting events, products, or services.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list2-text12">Posters</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list2-text21">
                          Discover our creative poster designs that grab
                          attention and convey messages effectively.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="content-list2-text24">
                          Business Cards
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="content-list2-text13">
                          View our professional business card designs that leave
                          a lasting impression on potential clients.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list2-text18">
                          Social Media Content
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="content-list2-text26">
                          Browse through our social media content creations
                          tailored to enhance your online presence.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="content-list2-text16">
                          Modern Designs
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content6 ?? (
                      <Fragment>
                        <span className="content-list2-text25">
                          We specialize in clean and modern design aesthetics
                          that align with current trends and industry standards.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list2-content11 thq-flex-column">
          <ul>
            <li className="content-list2-li7 thq-flex-column list-item">
              <h2 className="content-list2-heading7 thq-heading-2">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list2-text20">Contact Us</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list2-content7 thq-body-small">
                {props.content7 ?? (
                  <Fragment>
                    <span className="content-list2-text11">
                      Reach out to discuss pricing, project requirements, or any
                      inquiries you may have. We&apos;re here to help!
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list2-ul4 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="content-list2-text23">
                          General Terms and Conditions
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list2-text15">
                          Check out our eye-catching flyer designs perfect for
                          promoting events, products, or services.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading9 ?? (
                      <Fragment>
                        <span className="content-list2-text19">
                          Products and Services
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content9 ?? (
                      <Fragment>
                        <span className="content-list2-text17">
                          Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                          aliquam tempore aut ipsam iusto in sunt repellat ex
                          voluptatum inventore ab facilis galisum ea consequatur
                          consequuntur. Ab voluptas voluptatem eum consequatur
                          aspernatur non laboriosam atque est labore asperiores
                          a neque quos. Ea nemo modi hic dicta saepe et
                          veritatis maiores At praesentium aliquid. Sed dolores
                          architecto non doloribus quia eos consectetur commodi
                          non tenetur vitae est neque omnis. Non perspiciatis
                          velit At aliquam rerum ut officiis ipsa id minima eius
                          ut sapiente nobis et nemo neque. Aut maiores tempora
                          in officiis sunt eum voluptatem tenetur sit iste
                          reprehenderit ea nisi dolor. Ea impedit omnis ad
                          internos autem ut esse sunt ad saepe maiores vel
                          perferendis veritatis. Ex magni fugiat ut
                          reprehenderit laudantium sit galisum ipsam eos tempora
                          doloribus sed accusantium nobis eum praesentium quod.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList2.defaultProps = {
  content1: undefined,
  content7: undefined,
  heading3: undefined,
  content4: undefined,
  heading2: undefined,
  content2: undefined,
  rootClassName: '',
  heading6: undefined,
  content9: undefined,
  heading5: undefined,
  heading9: undefined,
  heading7: undefined,
  content3: undefined,
  heading1: undefined,
  heading8: undefined,
  heading4: undefined,
  content6: undefined,
  content5: undefined,
}

ContentList2.propTypes = {
  content1: PropTypes.element,
  content7: PropTypes.element,
  heading3: PropTypes.element,
  content4: PropTypes.element,
  heading2: PropTypes.element,
  content2: PropTypes.element,
  rootClassName: PropTypes.string,
  heading6: PropTypes.element,
  content9: PropTypes.element,
  heading5: PropTypes.element,
  heading9: PropTypes.element,
  heading7: PropTypes.element,
  content3: PropTypes.element,
  heading1: PropTypes.element,
  heading8: PropTypes.element,
  heading4: PropTypes.element,
  content6: PropTypes.element,
  content5: PropTypes.element,
}

export default ContentList2

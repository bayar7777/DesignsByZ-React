import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list3.css'

const ContentList3 = (props) => {
  return (
    <div
      className={`content-list3-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list3-max-width thq-flex-column thq-section-max-width">
        <div className="content-list3-content1 thq-flex-column">
          <ul>
            <li className="content-list3-li1 thq-flex-column list-item">
              <ul className="content-list3-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="content-list3-text1">Cookies</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content6 ?? (
                      <Fragment>
                        <span className="content-list3-text2">
                          <span>
                            This website uses cookies to provide you with a
                            smooth and personalized browsing experience. Cookies
                            help us understand how our visitors use the site, so
                            we can improve our content, optimize performance,
                            and deliver better design services tailored to your
                            needs.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Some cookies are essential for basic site
                            functionality, while others allow us to analyze
                            usage patterns, support social media features, and
                            display relevant content or offers. You can choose
                            to accept all cookies or manage your preferences at
                            any time.
                          </span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list3-content2 thq-flex-column">
          <ul></ul>
        </div>
        <div className="content-list3-content3 thq-flex-column">
          <ul>
            <li className="content-list3-li3 thq-flex-column list-item">
              <h2 className="content-list3-heading10 thq-heading-2">
                {props.heading10 ?? (
                  <Fragment>
                    <span className="content-list3-text8">Refund Policy</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list3-content10 thq-body-small">
                {props.content10 ?? (
                  <Fragment>
                    <span className="content-list3-text7">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList3.defaultProps = {
  rootClassName: '',
  heading6: undefined,
  content6: undefined,
  content10: undefined,
  heading10: undefined,
}

ContentList3.propTypes = {
  rootClassName: PropTypes.string,
  heading6: PropTypes.element,
  content6: PropTypes.element,
  content10: PropTypes.element,
  heading10: PropTypes.element,
}

export default ContentList3

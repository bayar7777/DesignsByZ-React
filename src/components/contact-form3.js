import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Contact5 from './contact5'
import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div
      className={`contact-form3-contact9 thq-section-padding ${props.rootClassName} `}
    >
      <Contact5
        email={
          <Fragment>
            <span className="contact-form3-text1">
              designs.by.z.studio@gmail.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-form3-text2">designs_by_z_studio</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-form3-text3">
              If you have any questions or any request you can also contact us
              in different ways!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-form3-text4">
              Contact us on Email if you have any requests or questions.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-form3-text5">
              Contact us on Instagram if you have any requests or question.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-form3-text6">Contact us</span>
          </Fragment>
        }
      ></Contact5>
    </div>
  )
}

ContactForm3.defaultProps = {
  rootClassName: '',
}

ContactForm3.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactForm3

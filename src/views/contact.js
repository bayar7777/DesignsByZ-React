import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - www,Designs.By.Z</title>
        <meta property="og:title" content="Contact - www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Pricing</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/pricing"
        link2Url="/about"
        rootClassName="navbar8root-class-name3"
        page1Description={
          <Fragment>
            <span className="contact-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm3 rootClassName="contact-form3root-class-name"></ContactForm3>
      <Footer4
        termsLink={
          <Fragment>
            <span className="contact-text24">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text25">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text26">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name2"
      ></Footer4>
    </div>
  )
}

export default Contact

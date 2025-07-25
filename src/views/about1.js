import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero2 from '../components/hero2'
import Testimonial16 from '../components/testimonial16'
import Features23 from '../components/features23'
import Footer4 from '../components/footer4'
import './about1.css'

const About1 = (props) => {
  return (
    <div className="about1-container">
      <Helmet>
        <title>About1 - www,Designs.By.Z</title>
        <meta property="og:title" content="About1 - www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about1-text10">Pricing</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about1-text11">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about1-text12">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about1-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about1-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about1-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about1-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about1-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about1-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about1-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/pricing"
        link2Url="/about"
        rootClassName="navbar8root-class-name4"
        page1Description={
          <Fragment>
            <span className="about1-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about1-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about1-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about1-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero2
        content1={
          <Fragment>
            <span className="about1-text24">
              Convince yourself with our designs and logos!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about1-text25">Welcome to Our Design Gallery</span>
          </Fragment>
        }
      ></Hero2>
      <Testimonial16
        review1={
          <Fragment>
            <span className="about1-text26">
              I was amazed by the creativity and attention to detail in the
              designs provided by this company. Highly recommended!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="about1-text27">
              The team delivered exactly what I was looking for in a timely
              manner. Will definitely work with them again!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="about1-text28">
              Professionalism and quality are the hallmarks of this design
              portfolio. I couldn&apos;t be happier with the results.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="about1-text29">
              Exceptional service and top-notch designs. They understood my
              vision and brought it to life beyond my expectations.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about1-text30">
              Here’s what our clients say about their experience — from smooth
              communication to high-quality, standout designs that bring ideas
              to life.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about1-text31">Other Reviews</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="about1-text32">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="about1-text33">Emily Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="about1-text34">Michael Brown</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="about1-text35">Sarah Davis</span>
          </Fragment>
        }
        rootClassName="testimonial16root-class-name"
      ></Testimonial16>
      <Features23
        action1={
          <Fragment>
            <span className="about1-text36">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about1-text37">
              From concept to final delivery — see how our features support your
              vision
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about1-text38">Explore Our Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about1-text39">Custom Logos</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about1-text40">Flyers</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about1-text41">Posters</span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="about1-text42">Business Cards</span>
          </Fragment>
        }
        feature5Title={
          <Fragment>
            <span className="about1-text43">Social Media Content</span>
          </Fragment>
        }
        feature6Title={
          <Fragment>
            <span className="about1-text44">Custom Projects</span>
          </Fragment>
        }
        rootClassName="features23root-class-name"
        feature1Description={
          <Fragment>
            <span className="about1-text45">
              Unique and personalized logos tailored to your brand identity.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about1-text46">
              Eye-catching flyers designed to make a statement for your events
              or promotions.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about1-text47">
              Creative posters that grab attention and convey your message
              effectively.
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="about1-text48">
              Professional business card designs that leave a lasting impression
              on clients.
            </span>
          </Fragment>
        }
        feature5Description={
          <Fragment>
            <span className="about1-text49">
              Engaging social media graphics to enhance your online presence and
              engagement.
            </span>
          </Fragment>
        }
        feature6Description={
          <Fragment>
            <span className="about1-text50">
              Bespoke design solutions for unique projects tailored to your
              specific needs.
            </span>
          </Fragment>
        }
      ></Features23>
      <Footer4
        termsLink={
          <Fragment>
            <span className="about1-text51">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about1-text52">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about1-text53">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name3"
      ></Footer4>
    </div>
  )
}

export default About1

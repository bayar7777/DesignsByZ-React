import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Logos1 from '../components/logos1'
import Stats2 from '../components/stats2'
import Features1 from '../components/features1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - www,Designs.By.Z</title>
        <meta property="og:title" content="About - www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10">
              <span className="about-text11">Pricing</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text13">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text14">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text15">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text16">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text17">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text18">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text19">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text20">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text21">Secondary Action</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name1"
        page1Description={
          <Fragment>
            <span className="about-text22">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text23">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text24">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text25">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        text={
          <Fragment>
            <span className="about-text26">
              <span>Whether you need </span>
              <span>a clean logo, a bold</span>
              <br></br>
              <span>   poster, or a full-on</span>
              <span>Instagram revamp —</span>
              <br></br>
              <span>  I’m here to help bring</span>
              <span>your vision to life.</span>
              <br></br>
              <br></br>
              <span>Custom requests? No</span>
              <br></br>
              <span>problem.</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text40">
              Welcome to Our Design Portfolio
            </span>
          </Fragment>
        }
      ></Hero8>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text41">
              Explore Our Custom Logo Designs
            </span>
          </Fragment>
        }
        logo1Src="/screenshot%202025-07-21%20224048-1400w.jpg"
        logo3Src="/screenshot%202025-07-21%20224107-1400w.jpg"
        logo4Src="/screenshot%202025-07-21%20224121-1400w.jpg"
        logo5Src="/screenshot%202025-07-21%20224134-1400w.jpg"
        logo6Src="/bild_2025-07-21_224228928-1400w.png"
        rootClassName="logos1root-class-name"
      ></Logos1>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text42">1000+</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text43">500+</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text44">2000+</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text45">Social Media Content</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text46">
              We have designed over 1000 unique custom logos for our clients.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text47">
              Our designs are tailored to each brand&apos;s identity and vision.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text48">Our Stats</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1688750997529-88a14e49d15c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzE3NDQ5OXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        rootClassName="stats2root-class-name"
        stat1Description={
          <Fragment>
            <span className="about-text49">Custom Logos Created</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text50">Flyers and Posters Designed</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text51">Business Cards Printed</span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text52">
              Engaging social media content created for various brands.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Features1
        slogan={
          <Fragment>
            <span className="about-text53">
              Unlock Your Brand&apos;s Potential with Our Designs
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="about-text54">Browse Gallery</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text55">Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text56">Custom Design Concepts</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text57">Feedback Loop</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text58">Finalize Designs</span>
          </Fragment>
        }
        rootClassName="features1root-class-name"
        sectionDescription={
          <Fragment>
            <span className="about-text59">
              Explore the key features of our design portfolio
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text60">
              Receive unique and tailored design concepts based on your specific
              needs
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text61">
              Engage in a collaborative process by providing feedback to refine
              designs
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text62">
              Get ready-to-use final designs that elevate your brand identity
            </span>
          </Fragment>
        }
      ></Features1>
      <Footer4
        termsLink={
          <Fragment>
            <span className="about-text63">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text64">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text65">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name1"
      ></Footer4>
    </div>
  )
}

export default About

import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features243 from '../components/features243'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>www,Designs.By.Z</title>
        <meta property="og:title" content="www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Pricing</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/pricing"
        link2Url="/about"
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        text1={
          <Fragment>
            <span className="home-text24">
              <span className="home-text25">
                We’re a creative design company bringing bold ideas to life —
                from logos to posters and more. Known for quality, speed, and
                standout visuals. Want to discuss prices or start your project?
                Just click the   link and message us on Instagram:             
                                                         
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text26">👉</span>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text28">@designs_by_z_studio</span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text29">Explore Designs</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text30">Contact Me</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text31">
              I offer custom logos, flyers, posters, business cards, and social
              media content tailored to your brand or project. Explore a gallery
              of clean, modern, and eye-catching designs that speak for
              themselves.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text32">Welcome to Designs By Z!</span>
          </Fragment>
        }
        image1Src="/bild_2025-07-20_134502633-1500w.png"
        image2Src="/bild_2025-07-20_132059465-1500w.png"
        image4Src="/bild_2025-07-20_220134119-1500w.png"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features243
        feature1Title={
          <Fragment>
            <span className="home-text33">Logos?</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text34">Designs?</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text35">Bold Posters?</span>
          </Fragment>
        }
        rootClassName="features243root-class-name"
        feature1ImgSrc="/bild_2025-07-20_134619005-1400w.png"
        feature1Description={
          <Fragment>
            <span className="home-text36">
              <span>
                We design unique, professional logos that reflect your
                brand&apos;s identity. Clean, bold, and memorable — perfect for
                businesses, creators, or startups.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text40">
              We create custom designs for brands, events, and content — from
              social media posts to flyers and more. Clean, modern, and made to
              stand out.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text41">
              We design bold, eye-catching posters that grab attention and
              deliver your message with impact. Perfect for events, promotions,
              and campaigns.
            </span>
          </Fragment>
        }
      ></Features243>
      <Footer4
        termsLink={
          <Fragment>
            <span className="home-text42">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text43">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text44">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
    </div>
  )
}

export default Home

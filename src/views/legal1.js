import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero7 from '../components/hero7'
import ContentList3 from '../components/content-list3'
import Contact3 from '../components/contact3'
import Footer4 from '../components/footer4'
import './legal1.css'

const Legal1 = (props) => {
  return (
    <div className="legal1-container">
      <Helmet>
        <title>Legal1 - www,Designs.By.Z</title>
        <meta property="og:title" content="Legal1 - www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="legal1-text10">Pricing</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="legal1-text11">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="legal1-text12">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="legal1-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="legal1-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="legal1-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="legal1-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="legal1-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="legal1-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="legal1-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/pricing"
        link2Url="/about"
        rootClassName="navbar8root-class-name6"
        page1Description={
          <Fragment>
            <span className="legal1-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="legal1-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="legal1-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="legal1-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero7
        action2={
          <Fragment>
            <span className="legal1-text24">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="legal1-text25">
              Welcome to our showcase of custom logos, flyers, posters, business
              cards, and social media content. Discover clean and modern designs
              tailored to your needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="legal1-text26">Creative Design Portfolio</span>
          </Fragment>
        }
        rootClassName="hero7root-class-name"
      ></Hero7>
      <ContentList3
        content6={
          <Fragment>
            <span className="legal1-text27">
              <span>We value your privacy and your experience.</span>
              <br></br>
              <span>
                This website uses cookies to provide you with a smooth and
                personalized browsing experience. Cookies help us understand how
                our visitors use the site, so we can improve our content,
                optimize performance, and deliver better design services
                tailored to your needs.
              </span>
              <br></br>
              <br></br>
              <span>
                Some cookies are essential for basic site functionality, while
                others allow us to analyze usage patterns, support social media
                features, and display relevant content or offers. You can choose
                to accept all cookies or manage your preferences at any time.
              </span>
              <br></br>
              <br></br>
              <span>
                By continuing to browse or clicking &quot;Accept,&quot; you
                consent to the use of cookies in accordance with our [Privacy
                Policy].
              </span>
              <br></br>
              <span>[Accept All]</span>
            </span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="legal1-text39">Cookies</span>
          </Fragment>
        }
        content10={
          <Fragment>
            <span className="legal1-text40">
              We want you to be happy with your design! If you&apos;re not
              satisfied and have a valid reason, just send us a message or email
              — we&apos;re open to discussing refunds on a case-by-case basis.
              Your satisfaction matters, and we&apos;ll do our best to find a
              fair solution.
            </span>
          </Fragment>
        }
        heading10={
          <Fragment>
            <span className="legal1-text41">Refund Policy</span>
          </Fragment>
        }
        rootClassName="content-list3root-class-name"
      ></ContentList3>
      <Contact3
        content1={
          <Fragment>
            <span className="legal1-text42">
              Interested in working together or have any questions? Feel free to
              reach out to us.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="legal1-text43">
              Thank you for considering us for your design needs!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="legal1-text44">Contact Us</span>
          </Fragment>
        }
        rootClassName="contact3root-class-name"
      ></Contact3>
      <Footer4
        termsLink={
          <Fragment>
            <span className="legal1-text45">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="legal1-text46">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="legal1-text47">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name5"
      ></Footer4>
    </div>
  )
}

export default Legal1

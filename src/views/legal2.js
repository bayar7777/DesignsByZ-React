import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContentList21 from '../components/content-list21'
import FAQ12 from '../components/faq12'
import Footer4 from '../components/footer4'
import './legal2.css'

const Legal2 = (props) => {
  return (
    <div className="legal2-container">
      <Helmet>
        <title>Legal2 - www,Designs.By.Z</title>
        <meta property="og:title" content="Legal2 - www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="legal2-text10">Pricing</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="legal2-text11">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="legal2-text12">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="legal2-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="legal2-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="legal2-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="legal2-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="legal2-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="legal2-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="legal2-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/pricing"
        link2Url="/about"
        rootClassName="navbar8root-class-name7"
        page1Description={
          <Fragment>
            <span className="legal2-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="legal2-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="legal2-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="legal2-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <ContentList21
        text={
          <Fragment>
            <span className="legal2-text24">
              <span>Privacy Policy</span>
              <br></br>
              <span>Last updated: July 11, 2025</span>
              <br></br>
              <br></br>
              <span>
                At Designs.By.Z, your privacy is important to us. This Privacy
                Policy explains what limited information we may collect, how
                it’s used, and your rights.
              </span>
              <br></br>
              <br></br>
              <span>1. Information We Collect</span>
              <br></br>
              <span>
                We do not collect personal information such as names, addresses,
                or phone numbers directly through this website.
              </span>
              <br></br>
              <span>However, we may collect:</span>
              <br></br>
              <br></br>
              <span>
                General website usage data (e.g. page views, device type) via
                analytics tools
              </span>
              <br></br>
              <br></br>
              <span>
                Messages or project requests sent through Instagram or email
              </span>
              <br></br>
              <br></br>
              <span>2. How We Use Information</span>
              <br></br>
              <span>
                Any information you choose to share (like messages via Instagram
                or email) is only used to:
              </span>
              <br></br>
              <br></br>
              <span>Respond to your inquiries</span>
              <br></br>
              <br></br>
              <span>Discuss design services</span>
              <br></br>
              <br></br>
              <span>Deliver agreed-upon work</span>
              <br></br>
              <br></br>
              <span>We do not sell or share your data with third parties.</span>
              <br></br>
              <br></br>
              <span>3. Third-Party Links</span>
              <br></br>
              <span>
                Our website may link to external platforms like Instagram. We
                are not responsible for how those sites handle your data. Please
                review their privacy policies if you visit them.
              </span>
              <br></br>
              <br></br>
              <span>4. Contact Us</span>
              <br></br>
              <span>Have questions or concerns about your data?</span>
              <br></br>
              <span>You can reach out anytime via:</span>
              <br></br>
              <span>📧 designs.by.z.studio@gmail.com</span>
              <br></br>
              <span>📱 Or DM us on Instagram: @designs_by_z_studio</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="legal2-text79">
              Explore our collection of custom logos, flyers, posters, business
              cards, and social media content.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="legal2-text80">Welcome to Our Privacy Policy</span>
          </Fragment>
        }
        rootClassName="content-list21root-class-name"
      ></ContentList21>
      <FAQ12
        action1={
          <Fragment>
            <span className="legal2-text81">Contact</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="legal2-text82">Still have a question?</span>
          </Fragment>
        }
        rootClassName="faq12root-class-name"
      ></FAQ12>
      <Footer4
        termsLink={
          <Fragment>
            <span className="legal2-text83">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="legal2-text84">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="legal2-text85">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name6"
      ></Footer4>
    </div>
  )
}

export default Legal2

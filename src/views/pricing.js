import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Pricing8 from '../components/pricing8'
import Testimonial18 from '../components/testimonial18'
import Footer41 from '../components/footer41'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - www,Designs.By.Z</title>
        <meta property="og:title" content="Pricing - www,Designs.By.Z" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="pricing-text10">Pricing</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="pricing-text11">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="pricing-text12">Designs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="pricing-text13">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="pricing-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="pricing-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="pricing-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="pricing-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="pricing-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="pricing-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="#Pricing14"
        link2Url="/about"
        rootClassName="navbar8root-class-name2"
        page1Description={
          <Fragment>
            <span className="pricing-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="pricing-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="pricing-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="pricing-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Pricing8
        plan1={
          <Fragment>
            <span className="pricing-text24">Logo Design</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="pricing-text25">Business Card Design</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="pricing-text26">Instagram Post Pack</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="pricing-text27">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="pricing-text28">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="pricing-text29">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing-text30">Pricing plans</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing-text31">
              Choose the Plan That Fits Your Vision
            </span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="pricing-text32">$18 (4 Logos)</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="pricing-text33">$15 (3 Cards)</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="pricing-text34">$15 (1 Posts)</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="pricing-text35">Get started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="pricing-text36">$200/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="pricing-text37">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="pricing-text38">$299/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="pricing-text39">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="pricing-text40">$499/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="pricing-text41">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="pricing-text42">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="pricing-text43">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="pricing-text44">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="pricing-text45">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="pricing-text46">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="pricing-text47">Unique, high-resolution logo</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="pricing-text48">
              Multiple design options to choose from
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="pricing-text49">
              <span>Delivered in transparent and printable formats</span>
              <br className="pricing-text51"></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="pricing-text53">Front &amp; back design</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="pricing-text54">
              {' '}
              Includes contact info, logo, QR (if needed)
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="pricing-text55">
              <span>Print-ready file included</span>
              <br className="pricing-text57"></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="pricing-text59">Fully branded designs</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="pricing-text60">
              Custom graphics, colors, and fonts
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="pricing-text61">Ready to upload</span>
          </Fragment>
        }
        rootClassName="pricing8root-class-name"
        plan1Feature11={
          <Fragment>
            <span className="pricing-text62">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="pricing-text63">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="pricing-text64">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="pricing-text65">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="pricing-text66">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="pricing-text67">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="pricing-text68">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="pricing-text69">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="pricing-text70">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="pricing-text71">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="pricing-text72">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="pricing-text73">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing8>
      <Testimonial18
        text={
          <Fragment>
            <span className="pricing-text74">
              Designed by [designs_by_z_studio]
            </span>
          </Fragment>
        }
        author2={
          <Fragment>
            <span className="pricing-text75">Roger Kean</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="pricing-text76">
              &quot;Absolutely loved the logo they created for my brand! It was
              clean, modern, and exactly what I had in mind. Communication was
              smooth and delivery was fast. Highly recommend!&quot;
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="pricing-text77">
              &quot;Great experience from start to finish. The poster design
              stood out and made my event look professional. Will definitely
              come back for future projects!&quot;
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="pricing-text78">
              <span>
                Anna
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="pricing-text80">M</span>
              <span>yers </span>
            </span>
          </Fragment>
        }
        rootClassName="testimonial18root-class-name"
      ></Testimonial18>
      <Footer41
        termsLink={
          <Fragment>
            <span className="pricing-text82">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="pricing-text83">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="pricing-text84">Privacy Policy</span>
          </Fragment>
        }
      ></Footer41>
    </div>
  )
}

export default Pricing

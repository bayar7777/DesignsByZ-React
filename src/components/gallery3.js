import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery3.css'

const Gallery3 = (props) => {
  return (
    <div className="gallery3-gallery3 thq-section-padding">
      <div className="gallery3-max-width thq-section-max-width">
        <h2 className="gallery3-text1 thq-heading-2">
          {props.heading1 ?? (
            <Fragment>
              <span className="gallery3-text3">Photo Gallery</span>
            </Fragment>
          )}
        </h2>
        <div className="gallery3-section-title">
          <span className="gallery3-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery3-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery3-container1 thq-grid-4">
          <div className="gallery3-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery3-image1 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container3">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery3-image2 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container4">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery3-image3 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container5">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery3-image4 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container6">
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="gallery3-image5 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container7">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="gallery3-image6 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container8">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="gallery3-image7 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container9">
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="gallery3-image8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery3.defaultProps = {
  heading1: undefined,
  image3Alt: 'PlaceholderImage1302',
  image4Src: '/okay-modern-logo-design-template-600w.webp',
  image2Src: '/istockphoto-1522211769-612x612-600w.jpg',
  image2Alt: 'PlaceholderImage1302',
  image7Alt: 'PlaceholderImage1302',
  image1Src: 'b55c3170-2885-45c4-b1cb-e6906484a6da',
  image4Alt: 'PlaceholderImage1302',
  image3Src: '/free-blue-business-card-design-template-600w.jpg',
  image5Alt: 'PlaceholderImage1302',
  image7Src: '/360_f_445546580_o6j9n8rkncoh9dhz4vfektiatd4rcww2-600w.jpg',
  image1Alt: 'PlaceholderImage1302',
  image6Alt: 'PlaceholderImage1302',
  image6Src: '/creative-corporate-logo-design-template-600w.jpg',
  image8Src: '/business-flyer-templates-400h.jpg',
  image8Alt: 'PlaceholderImage1302',
  content1: undefined,
  image5Src: '/color-hex-logo-template-400h.jpg',
}

Gallery3.propTypes = {
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image8Src: PropTypes.string,
  image8Alt: PropTypes.string,
  content1: PropTypes.element,
  image5Src: PropTypes.string,
}

export default Gallery3

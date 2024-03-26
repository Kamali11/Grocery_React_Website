import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

const Carousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='silder'>
          <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img className='slide_img' src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
      
    </div>
  )
}

export default Carousel

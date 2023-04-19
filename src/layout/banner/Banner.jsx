import React from 'react'
import './banner.css';
import { Fade } from 'react-reveal';
import Bounce from 'react-reveal';
import Slider from "react-slick";
import banner1 from '../../image/banner.jpg';
import banner2 from '../../image/banner2.jpg';
import banner3 from '../../image/banner3.jpg';

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='banner'>
        <Slider {...settings} >
          <div className='img-container'>
            <img src={banner1} alt="" />
            <Fade top>
              <div className='nature'> <h3>We Are The Nature</h3></div>
              <div className='act'><h1>Act Today</h1></div>
            </Fade>
          </div>
          <div className='img-container'>
            <img src={banner2} alt="" />
            <Bounce top>
              <div className='act1'><h3>Act Today</h3></div>
              <div className='nature1'><h1>WE ARE FROM NATURE</h1></div>
            </Bounce>
          </div>
          <div className='img-container'>
            <img src={banner3} alt="" />
            <Bounce bottom>
              <div className='time'><h3>Time has come for an action.. Plant and nurture a tree</h3></div>
              <div className='save'><h1>Save The World</h1></div>
              <div className='There'><h3>There are no planet B. Together we can save the planet earth!!</h3></div>
            </Bounce>
          </div>
        </Slider>
      </div>

    </>
  )
}
export default Banner
import React from 'react'

// const Carousel = () => {
//   return (
//     <div>
//         Carousel


 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import Img1 from '../assets/reviewcar/img1.svg'
import Img2 from '../assets/reviewcar/img2.svg' 
import Img3 from '../assets/reviewcar/img3.svg' 
import Img4 from '../assets/reviewcar/img4.svg'
import Img5 from '../assets/reviewcar/img1.svg' 

import { FaGithubSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import './Carousel.css'

export const Carousel = () =>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    
    <section className='section-white'>
      <div className='container'>
        
      <div className='col-md-12 text-center text-gray-200'>
                     
                     
                 </div>

        

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        autoplay={{ delay: 2000 }} // AutoPlay with delay of 2000ms
          
        className="flex ml-36"
      >

        <SwiperSlide {...settings}>
            <div className="team-item">
              <img src={Img1} className='team-img' alt="" height={300} width={300}/>
                <h3>ARNABH SINHA</h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CST B, Wev developer, MERN </p>
                        <ul className='team-icon'>
                          <li><a href='https://github.com/ArnabhS' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide {...settings}>
            <div className="team-item">
              <img src={Img4} className='team-img' alt="" height={300} width={300}/>
                <h3>SWARNAVO MUKHERJEE </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CST A, Web develeoper, AI/ML enthusiast </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide {...settings}>
            <div className="team-item">
              <img src={Img3} className='team-img' alt="" height={300} width={300}/>
                <h3>MRINMAY DAS </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CSE-A, Web develeoper, AI/ML enthusiast</p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='liadd nkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide {...settings}>
            <div className="team-item">
              <img src={Img5} className='team-img' alt="" height={300} width={300}/>
                <h3>HAIMANTI CHAKRABORTY  </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p> CST A </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide {...settings}>
            <div className="team-item">
              <img src={Img1} className='team-img' alt="" height={300} width={300}/>
                <h3>YUBARAJ BARUA </h3>
                  <div className='team-info'>
                    <p>Member</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, tenetur explicabo. </p>
                        <ul className='team-icon'>
                          <li><a href='#' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <SwiperSlide {...settings}>
            <div className="team-item">
              <img src={Img2} className='team-img' alt="" height={300} width={300}/>
                <h3>SAMADRITA BHATTACHARYA</h3>
                  <div className='team-info'>
                    <p>Member </p>
                      <p> CSIT B, Web developer, Java enthusiast, MERN Stack, Nextjs </p>
                        <ul className='team-icon'>
                          <li><a href='https://github.com/SamadritaBhattacharya' className='github'>
                            <FaGithubSquare/>
                              </a></li>
                              <li><a href='#' className='linkedin'>
                                <BsLinkedin/>
                              </a>
                          </li>
                                
                        </ul>
                    </div>
              </div>

        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>


      </Swiper>

      </div>
    </section>
  )

}





export default Carousel
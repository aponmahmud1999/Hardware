import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination,Autoplay } from "swiper";
import offer1 from './Images/offer1.jpg'
import offer2 from './Images/offer2.jpg'
import offer3 from './Images/offer3.jpg'

const Offers = () => {
    return (
        <div className='mx-3 md:mx-[10%] mt-5 md:mt-20 '>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-3 md:mb-12' data-aos="fade-up"   data-aos-duration="3000">Our Offers</h1>
              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
     <div >
     <SwiperSlide>
            <img className='rounded-2xl shadow-2xl h-[300px] md:h-[500px] w-[100%] ' data-aos="zoom-in"   data-aos-duration="3000" src={offer1}/>
            </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-2xl  h-[300px] md:h-[500px] w-[100%]' data-aos="zoom-in"   data-aos-duration="3000" src={offer2}/>

        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-2xl  h-[300px] md:h-[500px] w-[100%]' data-aos="zoom-in"   data-aos-duration="3000" src={offer3}/>
        </SwiperSlide>
     </div>
    
      </Swiper>
      <h1 className=' text-2xl md:text-5xl text-center font-bold mt-5 md:mt-20' data-aos="fade-up"   data-aos-duration="3000">Customize in your Rugs</h1>
        </div>
    );
};


export default Offers;
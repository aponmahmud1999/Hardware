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
        <div className='mx-[10%] w-[full] border-r-[25px] h-[500px]'>
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
        <SwiperSlide>
            <img className='' src={offer1}/>
            </SwiperSlide>
        <SwiperSlide>
            <img className='' src={offer2}/>

        </SwiperSlide>
        <SwiperSlide>
            <img className='' src={offer3}/>
        </SwiperSlide>
    
      </Swiper>
        </div>
    );
};


export default Offers;
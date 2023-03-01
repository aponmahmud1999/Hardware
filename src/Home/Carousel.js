import React from 'react';
import carousel1 from './Images/Carousel1.jpeg'
import carousel2 from './Images/carouesel2.jpg'
import carousel3 from './Images/carousel3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper";

const Carousel = () => {
    return (
        <div >

<Swiper
        slidesPerView={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
           <SwiperSlide><img className='w-[100%]' src={carousel3}/></SwiperSlide>
           <SwiperSlide><img className='w-[100%]' src={carousel3}/></SwiperSlide> 
           <SwiperSlide><img className='w-[100%]' src={carousel3}/></SwiperSlide> 
           <SwiperSlide><img className='w-[100%]' src={carousel3}/></SwiperSlide> 
       
        </Swiper>

</div>
    );
};

export default Carousel;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Collection = () => {
    return (
        <div>
                <h1 className="font-Poppins text-[20px] md:text-[40px] font-semibold text-black ml-10">
            App Development
        </h1>
     <div className="mx-7 md:mx-14 mt-10 md:mt-16">
     <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>
            <div className="bannerbg shadow-2xl W-[390px] h-[230px] rounded-2xl px-5 md:px-10 ">
 
              <p className='font-bold pt-7 text-xl md:text-2xl text-black'>Connecting skills</p>
              <p className='font-Poppins mt-2 text-xs  md:text-sm text-[#767272]'>Connecting skills is a Job consultancy platform based in Machilipatnam, serving jobs to freshers all over India. They are the consultants for many startups and a solution for agencies looking to hire resources.</p>
              <div className='flex space-x-2 mt-2'>

                <button className='text-black font-Poppins underline text-xs md:mt-2'>Visit Site </button>

                <p className='md:mt-[7px] text-black  '><AiOutlineArrowRight /></p>
              </div>
            </div></SwiperSlide>
        </Swiper>
     </div>
    );
};

export default Collection;
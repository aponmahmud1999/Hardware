import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper";
import pho from './Images/Collwct.jpg'
const Collection = () => {
    return (
        <div className='mx-[8%] mt-2 md:mt-20' data-aos="fade-up"   data-aos-duration="3000">
              <p className='text-center text-4xl md:text-5xl font-bold mb-4 md:mb-10' >Our Collection</p>  
                 <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
      
            <div className='border-2 hover:border-b-0 border-blue-900 mb-8'>
          
           
           

          
            <img src={pho}/>
            <p className='text-black text-center text-base '>Our Product 001</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 hover:border-b-0 border-blue-900 mb-8'>
            <img src={pho}/>
            <p className='text-black text-center text-base'>Our Product 001</p>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 hover:border-b-0 border-blue-900 mb-8' href="#" >
            <img src={pho}/>
            <p className='text-black text-center text-base'>Our Product 001</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 hover:border-b-0 border-blue-900 mb-8' href="#" >
            <img src={pho}/>
            <p className='text-black text-center text-base '>Our Product 001</p>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 hover:border-b-0 border-blue-900 mb-8' href="#" >
            <img src={pho}/>
            <p className='text-black text-center text-base'>Our Product 001</p>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 hover:border-b-0 border-blue-900 mb-8'>
            <img src={pho}/>
            <p className='text-black text-center text-base '>Our Product 001</p>
            </div>

        </SwiperSlide>
        
      </Swiper>
     </div>
    );
};

export default Collection;
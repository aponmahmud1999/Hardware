import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper";
import pho from './Images/Collwct.jpg'
const Collection = () => {
    return (
        <div className='mx-[8%] mt-20' data-aos="fade-up"   data-aos-duration="3000">
              <p className='text-center text-4xl font-bold mb-10' >Our Collection</p>  
                 <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
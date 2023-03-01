import React from 'react';
import CountUp from 'react-countup'
import {BsEmojiSmile} from 'react-icons/bs'

const Counter = () => {
    return (
        <div>
       
        <div className='lg:grid grid-cols-4 gap-x-5 mt-10 mx-10' data-aos="fade-up"   data-aos-duration="3000">
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[32px] -mt-5 border-4 text-white rounded-[50%]  mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex '><BsEmojiSmile/></p>
            <p className='mt-3 ml-5 text-3xl'><CountUp end={300} duration={5} /></p>
           <p className='mt-3  text-lg mb-2 ml-5'>Senior Service</p>
            </div>
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[32px] -mt-5 border-4 text-white rounded-[50%]  mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex '><BsEmojiSmile/></p>
            <p className='mt-3 ml-5 text-3xl'><CountUp end={500} duration={5} /></p>
           <p className='mt-3  text-lg mb-2 ml-5'>Project</p>
            </div>
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[32px] -mt-5 border-4 text-white rounded-[50%]  mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex  '><BsEmojiSmile/></p>
            <p className='mt-3 ml-5 text-3xl'><CountUp end={1000} duration={5} /></p>
           <p className='mt-3  text-lg mb-2 ml-5'>Our of Suppert</p>
            </div>
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[32px] -mt-5 border-4 text-white rounded-[50%]  mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex  '><BsEmojiSmile/></p>
            <p className='mt-3 ml-5 text-3xl'><CountUp end={30} duration={5} /></p>
           <p className='mt-3  text-lg mb-2 ml-5'>Hard Worker</p>
            </div>
        
        </div>
    </div>
    );
};

export default Counter;
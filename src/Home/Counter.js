import React from 'react';
import CountUp from 'react-countup'
import {BsEmojiSmile} from 'react-icons/bs'
import {BsFillFileTextFill} from 'react-icons/bs'
import {BsHeadset} from 'react-icons/bs'
import {RiGroupLine} from 'react-icons/ri'

const Counter = () => {
    return (
        <div>
       
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-5 gap-y-6 md:gap-y-0 mt-10 mx-1 md:mx-10' data-aos="fade-up"   data-aos-duration="3000">
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[20px] md:text-[32px] -mt-5 border-4 text-white rounded-[50%] mx-[160px]  md:mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex '><BsEmojiSmile/></p>
            <p className='md:mt-3 md:ml-5 text-2xl font-semibold md:text-3xl'><CountUp end={300} duration={5} /></p>
           <p className='md:mt-3  md:text-lg mb-3 md:mb-2 ml-5'>Happy CLiets</p>
            </div>
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[20px] md:text-[32px] -mt-5 border-4 text-white rounded-[50%] mx-[160px]  md:mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex '><BsFillFileTextFill/></p>
            <p className='md:mt-3 md:ml-5 text-2xl font-semibold md:text-3xl'><CountUp end={500} duration={5} /></p>
           <p className='md:mt-3  md:text-lg mb-3 md:mb-2 ml-5'>Project</p>
            </div>
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[20px] md:text-[32px] -mt-5 border-4 text-white rounded-[50%] mx-[160px]  md:mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex  '><BsHeadset/></p>
            <p className='md:mt-3 md:ml-5 text-2xl font-semibold md:text-3xl'><CountUp end={1000} duration={5} /></p>
           <p className='md:mt-3  md:text-lg mb-3 md:mb-2 ml-5'>Our of Suppert</p>
            </div>
            <div className='text-black bg-slate-300 text-center border'>
                <p className='text-[20px] md:text-[32px] -mt-5 border-4 text-white rounded-[50%] mx-[160px]  md:mx-[140px] bg-blue-800 border-white   p-[10px] justify-center flex  '><RiGroupLine/></p>
            <p className='md:mt-3 md:ml-5 text-2xl font-semibold md:text-3xl'><CountUp end={30} duration={5} /></p>
           <p className='md:mt-3  md:text-lg mb-3 md:mb-2 ml-5'>Hard Worker</p>
            </div>
        
        </div>
    </div>
    );
};

export default Counter;
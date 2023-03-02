import React from 'react';
import {SlLocationPin} from 'react-icons/sl'
import {BiPhoneCall} from 'react-icons/bi'
import {TbWorld} from 'react-icons/tb'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsSkype} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const ContactInfo = () => {
    return (
        <div>
                <div className='bg-slate-400 pb-5' data-aos="fade-up"   data-aos-duration="3000">
            <p className='text-center md:text-lg'>Home/Contact</p>
                <p className='text-center text-2xl md:text-4xl font-bold text-blue-800'>Contact US</p>

            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-y-5 md:gap-y-0 md:gap-10 mx-3 md:mx-20 md:mt-10'>
                <div className='rounded  border-2'>
                    <div className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] md:mx-32 mx-[120px] text-blue-800 border-blue-800  p-[10px] justify-center flex '><SlLocationPin/></div>
                    <h1 className='md:text-xl font-bold text-center'>Our Adress</h1>
                    <p className='md:text-xl text-sm text-center'>KANAKSARAI KACHHAWA</p>
                    <p className='md:text-xl text-sm text-center'>MIRZAPUR UTTER PRADESH</p>
                    <p className='md:text-xl text-sm text-center mb-3'>231501 INDIA</p>
                    </div>
                <div className='rounded  border-2'>
                    <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] md:mx-32 mx-[120px] text-blue-800 border-blue-800  p-[10px] justify-center flex '><BiPhoneCall/></p>
                    <h1 className='md:text-xl text-sm text-center font-bold'>Call Us</h1>
                    <p className='md:text-xl text-sm text-center'>+91 7985133614</p>
                    <p className='md:text-xl text-sm text-center mb-3'>+91 7985133614</p>
                </div>
                <div className='rounded  border-2'>
                    <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] md:mx-32 mx-[120px] text-blue-800 border-blue-800  p-[10px] justify-center flex '><TbWorld/></p>
                    <p className='md:text-xl text-sm text-center font-bold'>Also find us on social Media Platform</p>
                    <div className='grid grid-cols-4 mx-12  gap-x-7  mb-3'>
                        <p className=' text-[20px] mt-3 border-2 border-dotted rounded-[50%]  mx-[-10px] text-blue-800 border-blue-800 p-[12px]   justify-center flex '><BsTwitter/></p>
                      <p className='text-[20px] mt-3 border-2 border-dotted rounded-[50%] mx-[-10px] text-blue-800 border-blue-800 p-[12px]  justify-center flex '><FaFacebook/></p>  
                      <p className=' text-[20px] mt-3 border-2 border-dotted rounded-[50%]  mx-[-10px] text-blue-800 border-blue-800 p-[12px]   justify-center flex '><BsLinkedin/></p>  
                      <p className='text-[20px] mt-3 border-2  border-dotted rounded-[50%] mx-[-10px] text-blue-800 border-blue-800 p-[12px]   justify-center flex '><BsSkype/></p>  
                    </div>
                </div>
                <div className='rounded  border-2'>
                    <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] md:mx-32 mx-[120px] text-blue-800 border-blue-800  p-[10px] justify-center flex '><MdOutlineEmail/></p>
                    <h1 className='md:text-xl text-sm text-center font-bold'>Email Us</h1>
                    <p className='md:text-xl text-sm text-center mb-3'>finehandwovenrug@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
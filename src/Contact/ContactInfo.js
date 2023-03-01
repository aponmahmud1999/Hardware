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
           <p className='text-center text-lg'>Home/Contact</p>
            <p className='text-center text-4xl'>Contact US</p>

           </div>
            <div className='grid grid-cols-4 gap-10 mx-20 mt-10'>
                <div className='rounded  border-2'>
                    <div className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] mx-32   p-[10px] justify-center flex '><SlLocationPin/></div>
                    <h1 className='text-xl text-center'>Our Adress</h1>
                    <p className='text-xl text-center'>KANAKSARAI KACHHAWA</p>
                    <p className='text-xl text-center'>MIRZAPUR UTTER PRADESH</p>
                    <p className='text-xl text-center mb-3'>231501 INDIA</p>
                    </div>
                <div className='rounded  border-2'>
                    <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] mx-32   p-[10px] justify-center flex '><BiPhoneCall/></p>
                    <h1 className='text-xl text-center'>Call Us</h1>
                    <p className='text-xl text-center'>+91 7985133614</p>
                    <p className='text-xl text-center mb-3'>+91 7985133614</p>
                </div>
                <div className='rounded  border-2'>
                    <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] mx-32   p-[10px] justify-center flex '><TbWorld/></p>
                    <p className='text-xl text-center'>Also find us on social Media Platform</p>
                    <div className='grid grid-cols-4 mx-16 gap-4'>
                        <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%]  justify-center flex '><BsTwitter/></p>
                      <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%]  justify-center flex '><FaFacebook/></p>  
                      <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%]   justify-center flex '><BsLinkedin/></p>  
                      <p className='mb-3 text-[32px] mt-3 border-2 border-dotted rounded-[50%]     justify-center flex '><BsSkype/></p>  
                    </div>
                </div>
                <div className='rounded  border-2'>
                    <p className='text-[32px] mt-3 border-2 border-dotted rounded-[50%] mx-32   p-[10px] justify-center flex '><MdOutlineEmail/></p>
                    <h1 className='text-xl text-center'>Email Us</h1>
                    <p className='text-xl text-center mb-3'>finehandwovenrug@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
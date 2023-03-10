import React from 'react';
import Map from '../Home/Map';
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsSkype} from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='md:mt-20 '>
            <div className='bg-[#000080] text-white sm:grid sm:grid-cols-1  md:flex md:justify-center gap-x-10 pt-10 pb-10'>
                <div>
                    <h1 className='text-2xl ml-2 md:ml-0 md:text-4xl font-bold'>TOOLS World</h1>
                    <p className='text-base md:text-xl  ml-2 md:ml-0  mt-5 '>KANAKSARAI KACHHAWA</p>
                    <p className='text-base md:text-xl ml-2 md:ml-0   mt-2'>MIRZAPUR UTTER PRADESH</p>
                    <p className='text-base md:text-xl ml-2 md:ml-0   mt-2'>231501 INDIA</p>
                    <p className='text-base md:text-xl ml-2 md:ml-0    mt-5'>+91 7985133614</p>
                    <p className='text-base md:text-xl ml-2 md:ml-0   mt-2'>+91 7985133614</p>
                </div>
                <div><Map/>
                </div>
                <div className='md:ml-0 ml-3'>
                    <p className='text-xl md:text-4xl md:text-center md:mt-0 mt-3 mb-3'>Our Social Network</p>
                    <div className="flex gap-x-5 mt-5" >
        <button className='text-2xl'><BsTwitter/></button>
        <button className='text-2xl'><FaFacebook/></button>
        <button className='text-2xl'><BsLinkedin/></button>
        <button className='text-2xl'><BsSkype/></button>
       
      </div>
                </div>

            </div>
  <div className='flex justify-between  px-10 bg-[#007aff] py-5  text-white'>
    <p>© Copyright TOOL WORLD. All Rights Reserve</p>
    <p>Devlop & Designed by SD IT Solution</p>
  </div>
    
        </div>
    );
};

export default Footer;
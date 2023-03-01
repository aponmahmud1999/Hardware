import React from 'react';
import Map from '../Map';
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsSkype} from 'react-icons/bs'


const Footer = () => {
    return (
        <div>
            <div className='bg-[#000080] text-white flex justify-center gap-x-10 pt-10 pb-10'>
                <div>
                    <h1 className='text-4xl font-bold'>TOOLS World</h1>
                    <p className='text-xl mt-5 '>KANAKSARAI KACHHAWA</p>
                    <p className='text-xl mt-2'>MIRZAPUR UTTER PRADESH</p>
                    <p className='text-xl mt-2'>231501 INDIA</p>
                    <p className='text-xl  mt-5'>+91 7985133614</p>
                    <p className='text-xl mt-2'>+91 7985133614</p>
                </div>
                <div><Map/>
                </div>
                <div className=''>
                    <p className='text-4xl text-center mb-3'>Our Social Network</p>
                    <div className="flex gap-x-5 mt-5" >
        <button className='text-2xl'><BsTwitter/></button>
        <button className='text-2xl'><FaFacebook/></button>
        <button className='text-2xl'><BsLinkedin/></button>
        <button className='text-2xl'><BsSkype/></button>
       
      </div>
                </div>

            </div>
  <div className='flex justify-between px-10 bg-[#007aff] py-5  text-white'>
    <p>© Copyright TOOL WORLD. All Rights Reserve</p>
    <p>Devlop & Designed by SD IT Solution</p>
  </div>
    
        </div>
    );
};

export default Footer;
import React from "react";
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsSkype} from 'react-icons/bs'

const MiddleNavbar = () => {
  return (
    <div className="bg-[#040440] md:flex sm:grid sm:grid-cols-1  md:justify-between text-white px-[10%]">
      <div className="md:flex sm:grid sm:grid-cols-1  gap-x-2">
        <button>emailaddress@example.com</button>
        <button>0158725555552</button>
      </div>
      <div className="flex gap-x-2 md:mt-0 mt-2">
        <button><BsTwitter/></button>
        <button><FaFacebook/></button>
        <button><BsLinkedin/></button>
        <button><BsSkype/></button>
       
      </div>
    </div>
  );
};

export default MiddleNavbar;

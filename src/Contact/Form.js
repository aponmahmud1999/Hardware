import React from 'react';
import DeliveryPartner from '../Home/DeliveryPartner';
import Map from '../Home/Map';

const Form = () => {
    return (
       <div>
         <div className='mt-20 flex justify-center gap-10'>
            <div data-aos="fade-right">
            <Map/>
            </div>
            <div>
            <form >
        <div className='grid grid-cols-2 gap-4 px-5 lg:px-0 ' data-aos="fade-left">
            <input type="text" name="user_name" placeholder="Name" className="input input-bordered w-full lg:w-60    " />
            <input type="email" name="email" placeholder="Email" className="input input-bordered  w-full lg:w-60" />
            <input type="text" name="message" placeholder="Subject" className="input input-bordered mt-5 w-full lg:w-[31rem] col-span-2" />
            <input type="text" name="message" placeholder="Message" className="input input-bordered mt-5 w-full py-20 lg:w-[31rem]  col-span-2" />
        </div>
        <button type="submit" className="btn ml-20 lg:ml-[45%] mt-5 bg-[#d74b39] lg:w-50">Send Message</button> 
        </form>
            </div>
        </div>
        <DeliveryPartner/>
       </div>
    );
};

export default Form;
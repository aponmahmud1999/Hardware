import React from 'react';
import logo1 from './Images/png-transparent-package-delivery-courier-cargo-united-parcel-service-others-text-service-logo.png'
import logo2 from './Images/dhl logo.png'
import logo3 from './Images/ups.png'
import logo4 from './Images/fedex-logo-11530965326t3fisnyxki.png'

const DeliveryPartner = () => {
    return (
        <div >
            
            <div className="divider mt-10"></div> 
            <div className='flex justify-between gap-x-10 mx-20 mt-20'>
                <div><img className='w-[45%]' data-aos="zoom-in"   data-aos-duration="3000" src={logo1}/></div>
                <div><img className='w-[45%]' data-aos="zoom-in"   data-aos-duration="3000" src={logo2}/></div>
                <div><img className='w-[100%]' data-aos="zoom-in"   data-aos-duration="3000" src={logo3}/></div>
                <div><img className='w-[45%]' data-aos="zoom-in"   data-aos-duration="3000" src={logo4}/></div>
            </div>
        </div>
    );
};

export default DeliveryPartner;
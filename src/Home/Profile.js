import React from 'react';
import img from './Images/companyprofile.jpg'

const Profile = () => {
    return (
        <div>
            <h1 className='text-4xl md:text-5xl font-bold text-center mt-5 md:mt-16' data-aos="fade-up"   data-aos-duration="3000">Company Profile</h1>
            <p className='text-base md:text-xl text-center mt-5 ' data-aos="fade-up"   data-aos-duration="3000">WEAVING THE MAGIC OF CREATIVITY</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 mt-3 md:mt-5 md:gap-20 mx-2  md:mx-20'>
                <div>
                    <img data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='md:h-[500px] w-full' src={img}/>
                </div>
                <div data-aos="fade-up"   data-aos-duration="3000">
                    <h1 className='text-2xl md:text-3xl font-semibold'>Manufacture</h1>
                    <p className='mt-3 sm:w-full text-justify'>A leader in the rug retail industry since long time , carpet world is dedicated to bringing you high-quality rugs, furniture, and home decor from the most talented artisan in Rural India at rock-bottom prices. With our low-price commitment and dedication to customer service, we aim to make your next rug purchase a pleasant and enjoyable experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
import React from 'react';
import Carousel from './Carousel';
import Collection from './Collection';
import DeliveryPartner from './DeliveryPartner';
import Offers from './Offers';
import Profile from './Profile';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Collection/>
            <Profile/>
            <Offers/>
            <DeliveryPartner/>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Bride from '../components/Bride';
import Quote from '../components/Quote';
import Lovegift from '../components/Lovegift';
import Akad from '../components/Akad';

export default function Lander() {
    return (
        <>
            {/* <Header /> */}
            <Home />
            <Bride />
            <Quote />
            <Akad />
            <Lovegift />
            <Footer />
        </>
    );
}

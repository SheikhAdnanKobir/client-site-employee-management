import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

const Handellayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet  />
            <Footer />
        </div>
    );
};

export default Handellayout;
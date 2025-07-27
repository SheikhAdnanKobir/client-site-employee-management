import React from 'react';
import Banner from './Banner/Banner';
import Section1st from './Section/Section1st';
import Section2nd from './Section/Section2nd';
import Section3rd from './Section/Section3rd';
import Section4th from './Section/Section4th';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Section1st/>
            <Section2nd/>
            <Section3rd/>
            <Section4th/>
        </div>
    );
};

export default Home;
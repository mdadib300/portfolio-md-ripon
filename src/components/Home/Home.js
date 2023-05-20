import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Achievement from '../Achievement/Achievement';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Experience />
            <Achievement />
        </div>
    );
};

export default Home;
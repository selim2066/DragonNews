import React from 'react';
import Header from '../components/header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <section className='w-11/12 mx-auto'>
                <LatestNews/>
            </section>
            <nav  className='w-11/12 mx-auto'>
            <Navbar/>

            </nav>
        </div>
    );
};

export default HomeLayout;
import React from 'react';
import Header from '../components/header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <section className='w-11/12 mx-auto'>
                <LatestNews/>
            </section>
        </div>
    );
};

export default HomeLayout;
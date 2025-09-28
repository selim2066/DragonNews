import React from 'react';
import Header from '../components/header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/layoutComponent/LeftNav';

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
            <main className='w-11/12 mx-auto grid grid-cols-12 pt-5 font-poppins'>
                <aside className='col-span-3'><LeftNav/></aside>
                <section className='col-span-6'>Main Content</section>
                <aside className='col-span-3'>Right Navbar</aside>


            </main>
        </div>
    );
};

export default HomeLayout;
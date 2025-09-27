import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className='flex gap-4'>
            <p className='bg-red-700 text-white px-3 py-2 font-bold'>Latest </p>
            <Marquee pauseOnHover={true} className='gap-x-20 bg-gray-400 px-5' >
               <Link to="/news"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, perferendis.</Link>
               <Link to="/home"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, perferendis.</Link>

               <Link to="/news"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, perferendis.</Link>
            </Marquee>
            


        </div>
    );
};

export default LatestNews;
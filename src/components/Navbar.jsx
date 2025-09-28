import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-7 px-3'>
            <div></div>
            <div className='space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/carrer">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={userIcon} alt="" />
                <button className='btn bg-black/50 text-white font-bold'>Login</button>

            </div>
            
        </div>
    );
};

export default Navbar;
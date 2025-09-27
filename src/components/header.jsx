import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <>
        <div className='flex
        flex-col justify-center items-center gap-3 p-5'>
            <div><img src={logo} alt="" />
            </div>
            <div><p className='text-gray-500 font-bold text-xl'>Tell the truth to the World</p></div>

            
        </div>
        </>
    );
};

export default Header;
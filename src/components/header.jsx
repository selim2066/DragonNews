import React from 'react';
import logo from "../assets/logo.png"
import moment from "moment";

const Header = () => {
     const now = moment().format("MMMM Do YYYY, h:mm a");
//  const birthday = moment("2008-01-12").format("dddd, MMMM Do YYYY");

    return (
        <>
        <div className='flex
        flex-col justify-center items-center gap-3 p-5 font-poppins'>
            <div><img src={logo} alt="" />
            </div>
            <div><p className='text-gray-500 font-bold text-xl'>Tell the truth to the World</p></div>
            <div>
                <p>{now}</p>
                {/* <p>{birthday}</p> */}
            </div>

            
        </div>
        </>
    );
};

export default Header;
import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNav = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-lg'>Login With</h1>
            <SocialLogin/>
            <FindUs/>
        </div>
    );
};

export default RightNav;
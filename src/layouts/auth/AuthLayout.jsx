import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Header from '../../components/header';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <div className=''>
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;
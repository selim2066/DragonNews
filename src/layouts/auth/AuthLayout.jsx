import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <h2>this is auth</h2>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;
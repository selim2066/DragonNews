import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../pages/Loader';

const PrivateRoutes = ({children}) => {
const {user, loader}= useContext(AuthContext)

const location =useLocation()
console.log(location.pathname)

if(loader){
    return <Loader/>
}
if(user && user?.email){
    return children
}

    return (
        <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoutes;
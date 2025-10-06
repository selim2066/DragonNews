import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../pages/Loader';

const PrivateRoutes = ({children}) => {
const {user, loader}= useContext(AuthContext)


if(loader){
    return <Loader/>
}
if(user && user?.email){
    return children
}

    return (
        <Navigate to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoutes;
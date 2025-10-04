import React, { createContext, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

const [user, setUser]=useState({
    name:"selim",
    email:"mdselimreza2066@gmail.com"
})

const authInfo ={
    user, setUser,
}

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const logOut =()=>{
    return signOut(auth)
}

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut
  };

  console.log(user)

  useEffect(
    ()=>{
        const unssubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return unssubscribe;
    },[]
  )

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

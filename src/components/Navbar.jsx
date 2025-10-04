import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className="flex justify-between items-center py-7 px-3">
      <div>{user && user.name}</div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/carrer">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-2 items-center">
        <img src={userIcon} alt="" />
        <Link to="auth/login" className="btn bg-black/50 text-white font-bold">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  //console.log("🟡 Photo URL entered:", user.photoURL);
  //console.log(user.displayName)
  return (
    <div className="flex justify-between items-center py-7 px-3">
      <div>{user && user.email}</div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/carrer">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {user && user?.email ? (
          <div>
            <img
              className="h-10 rounded-full object-cover"
              src={user?.photoURL || userIcon}
              alt=""
            />
            <p className="font-semibold text-center">{user.displayName}</p>
          </div>
        ) : (
          <img src={userIcon} alt="" />
        )}
        {user && user?.email ? (
          <button
            className="btn bg-black/50 text-white font-bold"
            onClick={logOut}
          >
            Log-Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-black/50 text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

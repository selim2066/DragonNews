import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center p-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-center text-2xl translate-y-4">
          Registration
        </legend>

        <label className="label">Name</label>
        <input type="name" className="input" placeholder="Full Name" />

        <label className="label">Photo Url</label>
        <input type="url" className="input" placeholder="photoURL" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default Register;

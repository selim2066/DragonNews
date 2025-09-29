import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="pt-5">
      <h1 className="text-lg font-bold text-black/70 pb-2">Find Us On</h1>

      <div className="join flex join-vertical *:justify-start *:bg-base-100">
        <button className="btn join-item">
          <FaFacebookSquare /> Facebook
        </button>
        <button className="btn join-item">
          <FaSquareXTwitter /> X
        </button>
        <button className="btn join-item">
          <FaLinkedin /> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default FindUs;

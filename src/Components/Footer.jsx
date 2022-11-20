/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="w-screen mt-30 flex justify-center items-center flex-col">
      <div className="h-[350px] w-screen text-center text-white font-extrabold bg-custom-green flex justify-center items-center flex-col gap-10">
        <h1 className="text-5xl">Get started today!</h1>
        <button className="px-6 py-3  bg-white text-custom-green text-lg">
          PICK A PLAN
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-start items-start gap-10  mt-20">
        <div className="flex justify-start items-start gap-4">
          <img src={logo} alt="NinjaMail" className="lg:w-20" />
          <h1 className="font-extrabold text-xl lg:text-2xl">NinjaMail</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 font-semibold gap-10">
          <div className="flex flex-col justify-start  items-start">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Services</a>
            <a href="#">Partners</a>
          </div>

          <div className="flex flex-col justify-start items-start">
            <a href="#">About Us</a>
            <a href="#">Tutorials</a>
            <a href="#">Resources</a>
            <a href="#">Help Center</a>
            <a href="#">Templates</a>
            <a href="#">Case Studies</a>
          </div>

          <div className="flex flex-col justify-start items-start">
            <a href="#">Medium</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            <a href="#">FaceBook</a>
          </div>

          <div className="flex flex-col justify-start items-start">
            <a href="#">Contact Us</a>
            <a href="#">Slack</a>
            <a href="#">Job</a>
          </div>
        </div>
      </div>

      <div className="border-2 w-4/5 sm:w-2/3 mt-10 mb-10"></div>
      <div className="w-screen text-sm font-semibold flex justify-start sm:justify-center  items-start flex-wrap gap-10 mb-10 px-10">
        <p className="w-10/12 sm:w-2/3">
          NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
          rights reserved.
        </p>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </section>
  );
};

export default Footer;

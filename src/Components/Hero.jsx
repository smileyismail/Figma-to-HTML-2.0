import React from "react";

import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <section className="w-screen px-6 sm:px-20 lg:px-44 h-[55vh] sm:h-[75vh] flex justify-center items-center">
      <div className="w-screen relative flex justify-center items-start flex-col gap-8">
        <h1 className="text-5xl lg:text-6xl font-black font-heading">
          Create Stunning <br /> Email Campaigns
        </h1>
        <p className="text-base w-full lg:w-1/2 font-text font-medium pt-10 sm:pt-0">
          Create and launch email campaigns that captivate your customers in
          just a few clicks.
        </p>
        <div className="w-full flex justify-center md:justify-start items-center gap-10 font-black text-sm md:text-xl  font-text">
          <button className="px-6 py-3 lg:px-8 lg:py-4 text-white font-extrabold bg-custom-green border-4 border-custom-green">
            TRY NOW
          </button>
          <button className="px-6 py-3 lg:px-8 lg:py-4 text-custom-green font-extrabold bg-white border-4 border-custom-green">
            GET A DEMO
          </button>
        </div>

        <img
          src={heroImage}
          alt="heroImage"
          className="absolute w-auto right-0 top-center -z-10"
        />
      </div>
    </section>
  );
};

export default Hero;

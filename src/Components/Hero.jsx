import React from "react";

import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <section className=" w-screen h-[60vh] md:h-[75vh]  flex justify-center items-center gap-7 m-auto   px-4 lg:px-56">
      <div className="relative w-full h-auto flex flex-col justify-center items-start gap-8">
        <h1 className="text-5xl lg:text-6xl font-black font-heading">
          Create Stunning <br /> Email Campaigns
        </h1>
        <p className="text-base lg:w-1/2 font-text font-medium">
          Create and launch email campaigns that captivate your customers in
          just a few clicks.
        </p>
        <div className="w-screen flex justify-center md:justify-start items-center gap-10 font-black text-sm md:text-xl  font-text">
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
          className="absolute right-0 top-center -z-10"
        />
      </div>
    </section>
  );
};

export default Hero;

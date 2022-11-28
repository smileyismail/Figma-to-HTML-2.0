/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { membersData } from "../Utils/membersData";

import SlashBlack from "../assets/slash_black.png";
import SlashWhite from "../assets/slash_white.png";
import VideoImage from "../assets/VIDEOBG.png";
import SlantedGreen from "../assets/SlantedGreenBG.png";
import Photo1 from "../assets/photo1.png";
import Photo2 from "../assets/photo2.png";

const Services = () => {
  return (
    <section className="relative w-screen font-text py-10  sm:py-2">
      <img
        src={SlashBlack}
        alt="SlashBlack"
        className="absolute left-1 top-1"
      />
      <img
        src={SlashWhite}
        alt="SlashWhite"
        className="absolute right-1 bottom-1 z-20"
      />

      <div className="relative w-screen flex justify-center items-center px-6">
        <img src={VideoImage} alt="VideoImage" />
        <div className="absolute flex justify-center items-center flex-col gap-4 sm:gap-8">
          <h1 className="text-white font-extrabold z-10 text-2xl md:text-5xl text-center font-heading">
            Reach More Customers
          </h1>
          <button className="px-4 text-sm sm:text-xl md:px-8 py-2 md:py-4 bg-white text-custom-green font-black cursor-pointer">
            LEARN HOW
          </button>
        </div>
      </div>

      <div className="relative w-screen h-[770px] flex flex-col sm:flex-row justify-center sm:justify-around items-start sm:items-center gap-0 sm:gap-8 text-sm md:text-lg font-medium">
        <img
          src={SlantedGreen}
          alt="slantedGreen"
          className="absolute top-32 sm:-top-40 -z-10 left-0 h-[1000px] w-full sm:h-[1100px]"
        />
        <div className="w-56 md:w-80 bg-white translate-y-28 sm:translate-y-0 sm:mb-56 ml-4  sm:ml-auto mt-56 sm:mt-0">
          <img src={Photo1} alt="Photo1" className="w-full" />
          <div className="p-3 sm:p-6 bg-white">
            <p className="text-sm mb-2">
              Launch campaigns but also find new customers. Our unique platform
              handles campaigns from start to end.
            </p>
            <a href="#" className="text-custom-green text-sm font-semibold">
              Learn More {">"}
            </a>
          </div>
        </div>

        <div className="w-56 md:w-80 ml-auto mr-8 sm:mr-auto mt-32 sm:mt-0">
          <img src={Photo2} alt="Photo2" className="w-full" />
          <div className="p-3 sm:p-6 bg-white">
            <p className="text-sm mb-2">
              Start building and sharing with your team today. NinjaMail is
              renowned for its industry leading team collaboration tools.
            </p>
            <a href="#" className="text-custom-green text-sm font-semibold">
              Learn More {">"}
            </a>
          </div>
        </div>

        <div className="w-56 md:w-80 -translate-y-28 sm:translate-y-0 ml-10 sm:ml-0 sm:mr-auto mt-32">
          <h1 className="font-black text-3xl md:text-5xl font-heading">
            The source for proven, engaging email campaigns
          </h1>
          <p className="text-sm md:text-lg">
            Whether you’re a startup, small business, e-commerce store, or want
            to promote your app, NinjaMail has the feature set tailored for your
            business.
          </p>
        </div>
      </div>

      {/* members cards */}

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-56 sm:mt-0 px-4 w-screen">
        {membersData.map((member) => (
          <div key={member.id} className="relative z-40 text-white">
            <img src={member.img} alt="Frankie" />
            <h2 className="absolute left-2 bottom-10 text-3xl font-bold">
              {member.name}
            </h2>
            <p className="absolute left-2 bottom-4">
              Member Since {member.memberSince}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

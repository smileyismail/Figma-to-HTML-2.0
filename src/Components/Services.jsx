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
    <section className="relative w-screen font-text">
      <img
        src={SlashBlack}
        alt="SlashBlack"
        className="absolute left-2 top-2"
      />
      <img
        src={SlashWhite}
        alt="SlashWhite"
        className="absolute right-2 bottom-28 z-20"
      />
      <div className="w-full h-[60vh] lg:h-[80vh] bg-[#f7f7f7] px-4 flex justify-center md:items-center items-start">
        <div className="relative bg-center z-20 bg-no-repeat flex justify-center items-center flex-col gap-10">
          <img src={VideoImage} alt="videoImage" />
          <div className="absolute top-center right-center flex justify-center items-center flex-col gap-10">
            <h1 className="text-white lg:text-5xl font-extrabold z-10 text-3xl md:text-4xl text-center font-heading">
              Reach More Customers
            </h1>
            <button
              type="button"
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-custom-green font-black cursor-pointer z-10"
            >
              LEARN HOW
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-[770px] -translate-y-48 flex justify-center items-start text-sm md:text-lg font-medium mt-36">
        <img
          src={SlantedGreen}
          alt="slantedGreen"
          className="h-[700px] w-full sm:h-[1000px]"
        />

        <div className="absolute w-[220px] md:w-[310px] bg-white left-4 -top-52 md:top-48 md:left-[15%]">
          <img src={Photo1} alt="Photo1" className="w-full" />
          <div className="p-6 bg-white">
            <p className="text-sm mb-2">
              Launch campaigns but also find new customers. Our unique platform
              handles campaigns from start to end.
            </p>
            <a href="#" className="text-custom-green text-sm font-semibold">
              Learn More {">"}
            </a>
          </div>
        </div>

        <div className="absolute w-[220px] md:w-[310px] right-4 bottom-56 md:top-72 md:left-[45%]">
          <img src={Photo2} alt="Photo2" className="w-full" />
          <div className="p-6 bg-white">
            <p className="text-sm mb-2">
              Start building and sharing with your team today. NinjaMail is
              renowned for its industry leading team collaboration tools.
            </p>
            <a href="#" className="text-custom-green text-sm font-semibold">
              Learn More {">"}
            </a>
          </div>
        </div>

        <div className="absolute w-[220px] md:w-[310px] left-8 md:left-auto bottom-0 md:bottom-36 md:right-20">
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

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 px-4 w-screen">
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

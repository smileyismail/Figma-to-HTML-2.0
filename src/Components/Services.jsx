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
    <section className="relative w-screen ">
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
            <h1 className="text-white lg:text-5xl font-extrabold z-10 text-4xl text-center">
              Reach More Customers
            </h1>
            <button
              type="button"
              className="px-8 py-4 bg-white text-custom-green font-extrabold cursor-pointer z-10"
            >
              LEARN HOW
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-[700px] -translate-y-48 flex justify-center items-start">
        <img
          src={SlantedGreen}
          alt="slantedGreen"
          className="h-[700px] w-full sm:h-[1000px]"
        />

        <div className="absolute w-[209px] bg-white left-4 -top-20 sm:top-48 sm:left-[15%]">
          <img src={Photo1} alt="Photo1" />
          <p className="px-4 text-sm">
            Launch campaigns but also find new customers. Our unique platform
            handles campaigns from start to end.
          </p>
          <a href="#" className="text-custom-green p-4 text-sm font-semibold">
            Learn More {">"}
          </a>
        </div>

        <div className="absolute w-[209px] bg-white right-4 bottom-32 sm:top-62 sm:left-[45%]">
          <img src={Photo2} alt="Photo2" />
          <p className="px-4 text-sm">
            Start building and sharing with your team today. NinjaMail is
            renowned for its industry leading team collaboration tools.
          </p>
          <a href="#" className="text-custom-green p-4 text-sm font-semibold">
            Learn More {">"}
          </a>
        </div>

        <div className="absolute w-[209px] left-8 -bottom-24 sm:bottom-40 sm:left-[75%]">
          <h1 className="font-bold text-2xl">
            The source for proven, engaging email campaigns
          </h1>
          <p className="text-sm">
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

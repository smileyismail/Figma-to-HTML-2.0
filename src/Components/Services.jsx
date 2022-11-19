/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

// import SlashBlack from "../assets/slash_black.png";
// import SlashWhite from "../assets/slash_white.png";
import VideoImage from "../assets/VIDEOBG.png";
import SlantedGreen from "../assets/SlantedGreenBG.png";
// import Photo1 from "../assets/photo.png";

const Services = () => {
  return (
    <section className="w-screen">
      <div className="w-full h-[60vh] lg:h-[80vh] bg-[#f7f7f7] px-4 flex justify-center md:items-center items-start">
        <div className="relative bg-center z-10 bg-no-repeat flex justify-center items-center flex-col gap-10">
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

      <div className="relative border-4 border-red-400 -translate-y-36 flex justify-center items-start">
        <img src={SlantedGreen} alt="slantedGreen" />
        <div className="absolute z-110">
          <img src="" alt="" />
          <p>
            Launch campaigns but also find new customers. Our unique platform
            handles campaigns from start to end.
          </p>
          <a href="#" className="text-custom-green">
            Learn More {">"}
          </a>
        </div>
      </div>
      {/* <img
        src={SlashBlack}
        alt="slashBlack"
        className="absolute left-0 top-0"
      />
      <img
        src={SlashWhite}
        alt="slashBlack"
        className="absolute right-0 bottom-40 z-10"
      />
      
      


      <div className="relative -translate-y-48 w-screen h-[1050px] bg-[#f7f7f7] flex justify-center items-center">
        <img
          src={SlantedGreen}
          alt="slantedGreen"
          className="absolute left-0 top-0 w-full"
        />
        <div className="z-10 bg-white w-[200px] ">
          <div>
            <img src={Photo1} alt="" />
            <p className="p-4 text-sm">
              Launch campaigns but also find new customers. Our unique platform
              handles campaigns from start to end.
            </p>
            <a
              href="_blank"
              className="px-4 mb-4 font-bold text-sm text-custom-green"
            >
              Learn More {">"}
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Services;

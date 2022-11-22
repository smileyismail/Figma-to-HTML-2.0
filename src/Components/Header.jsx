import React from "react";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center lg:px-20 py-5 font-text">
      <div className="flex justify-center items-center gap-4">
        <img src={logo} alt="NinjaMail" className="lg:w-24" />
        <h1 className="font-extrabold text-3xl lg:text-4xl">NinjaMail</h1>
      </div>
      <nav className="flex justify-center items-center gap-8">
        <ul className="md:flex justify-center items-center gap-8 hidden">
          <li className="font-bold underline underline-offset-8 decoration-4 cursor-pointer text-sm decoration-custom-green ">
            FEATURES
          </li>
          <li className="font-bold underline underline-offset-8 decoration-4 cursor-pointer text-sm decoration-custom-green ">
            PRICING
          </li>
          <li className="font-bold underline underline-offset-8 decoration-4 cursor-pointer text-sm decoration-custom-green ">
            SERVICES
          </li>
          <li className="font-bold underline underline-offset-8 decoration-4 cursor-pointer text-sm decoration-custom-green ">
            PARTNERS
          </li>
        </ul>
        <button
          type="button"
          className="font-bold text-sm bg-custom-green text-white px-4 py-2"
        >
          SIGN UP FREE
        </button>
      </nav>
    </header>
  );
};

export default Header;

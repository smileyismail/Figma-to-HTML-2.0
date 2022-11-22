import React from "react";

import { brandsData } from "../Utils/brandsData";

const Contact = () => {
  return (
    <section className="w-screen mt-20 flex justify-center items-center flex-col gap-16 font-text mb-20">
      <h1 className="text-center text-4xl font-extrabold sm:w-3/4 w-10/12 sm:text-5xl font-heading">
        Learn how others are reaching their audience easier than ever before.
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-400 rounded-md px-3 py-4 text-lg w-80"
        />
        <button
          type="button"
          className="px-3 py-4 text-lg text-white bg-custom-green font-bold"
        >
          JOIN OUR LIST
        </button>
      </div>

      <h1 className="text-center text-4xl font-extrabold lg:w-1/4 w-9/12 sm:text-5xl font-heading">
        All the best brands already use us.
      </h1>

      <ul className="flex justify-center items-center flex-wrap">
        {brandsData.map((brand) => (
          <li key={brand.id} className="px-6 py-3">
            <img src={brand.img} alt="RadioTee" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;

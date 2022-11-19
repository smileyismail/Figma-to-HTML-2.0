import React from "react";

const FloatingElements = () => {
  return (
    <div className="relative w-screen h-[2000px] bg-transparent">
      {/* hero section   elements */}
      <div className="absolute -z-10 left-[5%] top-[10px] w-3 h-3 bg-[#ffffff] border border-black rounded-full"></div>

      <div className="absolute -z-10 left-[10%]   top-[70px] w-4 h-4 bg-[#f4f4f4]"></div>

      <div className="absolute -z-10 left-[15%] top-[500px] w-3 h-3 bg-[#ffffff] border border-black rounded-full"></div>

      <div className="absolute -z-10 left-[20%] top-[600px] w-10 h-10 bg-[#F4BEBD] rotate-45"></div>

      <div className="absolute -z-10 left-[30%] top-[50px] w-8 h-8 bg-[#EFE1BC]"></div>

      <div className="absolute -z-10 left-[60%] top-[80px] w-8 h-8 bg-[#D9F4F2] rounded-full"></div>

      <div className="absolute -z-10 left-[50%] top-[550px] w-5 h-5 bg-[#ffffff] border border-black rounded-full"></div>

      <div className="absolute -z-10 right-[5%] top-[60px] w-3 h-3 bg-[#ffffff] border border-black rounded-full"></div>

      <div className="absolute -z-10 left-[80%] top-[60px] w-8 h-8 bg-[#f4f4f4]"></div>

      <div className="absolute -z-10 left-[85%] top-[270px] w-12 h-12 bg-[#000000] rotate-45"></div>
      {/* main elements */}

      <div className="absolute z-10 right-[5%] bottom-28 w-8 h-8 bg-[#ffffff8c]"></div>

      <div className="absolute z-10 right-[1%] bottom-64 w-9 h-9 bg-[#AFCBAD] rounded-full"></div>

      <div className="absolute z-10 right-[6%] bottom-96 w-16 h-16 bg-[#ffffff65] rotate-45"></div>

      <div className="absolute z-10 right-[5%] bottom-[600px] w-8 h-8 bg-[#ffffffa4]"></div>

      <div className="absolute z-10 left-[5%] bottom-96 w-9 h-9 bg-[#0000001b] rotate-45"></div>

      <div className="absolute z-10 left-[15%] bottom-32 w-9 h-9 bg-[#ffffff4c] rotate-45"></div>
    </div>
  );
};

export default FloatingElements;

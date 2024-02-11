"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-8 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700'> Hi, I'm {" "} </span>
            {" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Behnam",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            Description about me goes here remember to fill it this is just random
          </p>
          <button className="bg-gradient-to-br from-blue-200 to-blue-700 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download Resume
            </span>
          </button>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
            <Image
              src="/images/Mozafari.Behnam.s32497873.png"
              alt="Behnam Mozafari"
              className='absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
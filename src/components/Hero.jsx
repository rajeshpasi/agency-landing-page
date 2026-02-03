import React from "react";
import boysImage from "../assets/image/boys.png";
import Elem from "../assets/image/3d.png";
import { MdOutlineStarPurple500 } from "react-icons/md";


const Hero = () => {
  return (
    <div className="h-140 w-full bg-white rounded-b-[100px] relative overflow-hidden">
      {/* <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <img src={Elem} alt="" srcset="" className="h-36 " />
      </div> */}

      {/** Text Content **/ }
      <div className="absolute bottom-40 left-5 text-center w-1/4 flex flex-wrap items-center justify-center">
        <p className="text-gray-800 text-center text-xl font-light">
          From web development to branding,  we deliver innovative strategies
          that elevate your brand and drive growth. Let's create something
          exceptional together.
        </p>
        <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded-full mt-4 cursor-pointer">
          Innovate Your Brand
        </button>
      </div>

      {/* Headline */}
      <h1 className="text-4xl font-bold text-center pt-25 text-gray-800">
        Empowering Brands <br /> Through Creative Solutions
      </h1>

      {/** Image and Buttons **/ }
      <div className="start-bottom flex justify-center absolute inset-x-0 inset-y-50 bottom-0">
        <div className="bg-lime-100 w-126 h-160 rounded-full flex items-center justify-center relative">
          <img
          className=" w-86 h-140  bg-lime-200 rounded-full shadow-lg"
          src={boysImage}
          alt="Boys illustration"
        />
        </div>      
        <div className="absolute bottom-10 flex flex-row space-x-4 bg-white/30 backdrop-blur-none px-4 py-4 rounded-full shadow-2xl border-gray-50 border cursor-pointer">
          <button className="bg-lime-300 p-2 rounded-full shadow-2xl cursor-pointer">
            Start Your Project
          </button>
          <button className="rounded-full p-2 shadow-2xl bg-white/30 backdrop-blur-none border border-gray-50 cursor-pointer">
            Let's Collaborate
          </button>
        </div>
      </div>

      {/** Experience Badge **/ }
      <div className="absolute top-50 right-50 rounded-xl flex flex-col items-center justify-center">
        <MdOutlineStarPurple500 size={38} className="text-lime-300" />
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <MdOutlineStarPurple500 key={i} size={20} className="text-lime-300" />
          ))}
        </div>
        <h1 className="text-4xl font-semibold text-gray-800">10 Years</h1>
        <h4 className="text-gray-600 text-xl pl-10 font-medium">Experience</h4>
      </div>
    </div>
  );
};

export default Hero;

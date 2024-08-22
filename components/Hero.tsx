import React from "react";
import Image from "next/image";
import Social from "./Social";
import { information } from "@/lib/hero/hero";

const Hero = () => {
  return (
    <header className="cursor-default max-w-[1650px] mx-auto relative  md:pt-10 pt-20 lg:gap-x-2 w-full flex lg:flex-row md:flex-row lg:justify-center items-center flex-col justify-start bg-gray-100/50">
      <div className="relative lg:w-1/2 flex flex-col lg:justify-end lg:items-end">
        <Image
          src="/boy-using-laptop.png"
          alt="profile picture"
          width={600}
          height={100}
          className="relative object-cover w-3/5 lg:mx-0 mx-auto"
        />
        <Social />
      </div>

      <div className="lg:w-1/2 w-full flex flex-col lg:justify-items-end justify-center lg:p-0 px-5">
        {information?.map((info, idx) => (
          <div key={idx} className="w-full relative md:pr-10">
            <div className="flex flex-col items-start justify-center md:mb-2 mb-1">
              <h3 className="text-primary lg:text-xl text-sm font-second font-bold">
                I AM A
              </h3>

              <h1 className="text-primary font-second tracking-widest lg:text-6xl md:text-5xl text-4xl duration-500 font-bold animate-pulse">
                {info?.position}
              </h1>
            </div>

            <div className="lg:w-3/4 w-full">
              <p className="text-justify font-poppins md:text-md text-sm font-third">
                {info?.description}
              </p>
            </div>

            <div className="lg:mt-5 mt-1 flex items-center">
              <button className=" bg-primary lg:0rounded-full rounded flex flex-row justify-center items-center px-5 py-3 text-white font-bold text-md  hover:bg-[#000] cursor-pointer group">
                <p className="md:text-md text-md font-second tracking-widest">
                  {info?.buttonLabel}
                </p>
                <span className="pl-2 duration-500 group-hover:pl-4">
                  <svg
                    id="Layer_1"
                    width="25px"
                    fill="#fff"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M27.728 16.024l-8.485 8.482-2.828-2.835 3.656-3.671h-14.071v-4h14.071l-3.657-3.644 2.828-2.816 8.486 8.484z"></path>{" "}
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Hero;

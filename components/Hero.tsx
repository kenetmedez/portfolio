import React from "react";
import Image from "next/image";
import Social from "./Social";
import { information } from "@/lib/hero/hero";

const Hero = () => {
  return (
    <section
      className="cursor-default lg:min-h-screen relative lg:gap-8 md:gap-2 gap-8 w-full md:pt-0 py-20 flex lg:flex-row md:flex-row lg:justify-center items-center flex-col justify-start bg-gray-100/50 max-w-[1280px] mx-auto"
      id="home"
    >
      <div className="relative lg:w-1/2 flex flex-col lg:justify-end lg:items-end rounded-full">
        <Image
          src="/images/id.png"
          alt="profile picture"
          width={600}
          height={100}
          quality={100}
          className="relative object-cover object-center w-3/5 md:w-full lg:w-3/5 lg:mx-0 mx-auto rounded-full"
        />
        <Social />
      </div>

      <div className="lg:w-1/2 w-full lg:p-0 px-5">
        {information?.map((info, idx) => (
          <div
            key={idx}
            className="w-full relative md:pr-10 flex flex-col items-start justify-between"
          >
            <div className="w-full">
              <div className="flex flex-col items-start justify-center mb-4">
                <h3 className="text-primary lg:text-xl text-sm font-second font-bold">
                  I AM A
                </h3>

                <h1 className="text-primary font-second tracking-widest lg:text-6xl md:text-5xl text-4xl duration-500 font-bold">
                  {info?.position}
                </h1>
              </div>

              <div className="lg:w-3/4 w-full">
                <p className="text-justify md:mb-4 text-sm mb-2">
                  {info?.description}
                </p>
                <p className="text-justify text-sm">{info?.sub}</p>
              </div>
            </div>

            <div className="w-full flex items-center lg:mt-10 mt-5">
              <button className=" bg-primary lg:0rounded-full rounded flex flex-row justify-center items-center md:px-5 px-3 md:py-3 py-2 text-white font-bold text-md  hover:bg-[#000] cursor-pointer group">
                <p className="text-md font-second tracking-widest">
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
    </section>
  );
};

export default Hero;

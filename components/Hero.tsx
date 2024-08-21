import React from "react";
import Image from "next/image";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="relative pt-20  pb-2 lg:gap-x-2 w-full flex lg:flex-row md:flex-row lg:justify-center items-center flex-col justify-start bg-gray/100/50">
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
        <h3 className="text-[#f0a900] lg:text-4xl text-md font-second duration-500 font-bold font-poppins">
          I AM A
        </h3>
        <h1 className="text-[#f0a900] font-second tracking-widest lg:text-6xl md:text-5xl text-4xl duration-500 font-bold font-poppins animate-pulse">
          WEB DEVELOPER
        </h1>

        <p className="lg:pt-5 pt-1 text-justify font-poppins md:text-md text-sm max-w-2xl lg:pr-10 font-third">
          I'm Kenet, a skilled and creative Web Developer. I bring ideas to life
          using HTML, CSS, and JavaScript. I stay updated with the latest
          technology like NextJs. I love problem-solving and collaborating with
          designers and clients. My attention to aesthetics ensures visually
          appealing and user-friendly websites. I also provide ongoing
          maintenance and updates to keep websites running smoothly. Let's
          create a captivating online experience together!
        </p>

        <div className="lg:py-5 pt-1 flex items-center">
          <button className=" bg-[#CF7500] lg:0rounded-full rounded flex flex-row justify-center items-center px-5 py-3 text-white font-bold text-md  hover:bg-[#000] cursor-pointer group">
            <p className="md:text-md text-sm font-second tracking-widest">LET'S COLLABORATE</p>
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
    </section>
  );
};

export default Hero;

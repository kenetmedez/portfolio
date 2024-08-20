"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <nav className="z-50 fixed top-0 w-[100%] max-h-lg h-[10vh] flex lg:flex-row justify-between items-center overflow-hidden bg-[#f0a900] font-poppins shadow-lg">
        <div className="lg:w-1/2 flex items-center justify-center md:w-3/4 px-5 ">
          <Link
            href="/"
          >
            <h1 className="animate-pulse lg:flex items-center text-2xl text-white font-bold font-papyrus cursor-pointer hover:text-3xl duration-700 p-5">
              <span className="text-[#092635] text-4xl ">{`{ }`} </span> KENE
              <span className="text-[#092635]">Tech</span>
            </h1>
          </Link>
        </div>

        <div className="lg:w-1/2 lg:flex justify-center mx-[10%] md:w-1/4">
          <ul className="w-full lg:flex items-center font-semibold gap-20 px-10 hidden">
            <li className="hover:text-lg duration-700">
              <a
                key="about"
                href="#about"
                className="relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("about");
                }}
              >
                ABOUT
              </a>
            </li>

            <li className="hover:text-lg duration-700">
              <a
                key="experience"
                href="#experience"
                className=" relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("experience");
                }}
              >
                EXPERIENCE
              </a>
            </li>

            <li className="hover:text-lg duration-700">
              <a
                key="projects"
                href="#projects"
                className=" relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("projects");
                }}
              >
                PROJECTS
              </a>
            </li>

            <li className="hover:text-lg duration-700">
              <a
                key="contacts"
                href="#contacts"
                className="relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contacts");
                }}
              >
                CONTACTS
              </a>
            </li>
          </ul>

          <div className="absolute top-5 right-5 lg:hidden md:flex rounded cursor-pointer hover:bg-[#f1dfb8] z-100">
            <Image
              src={"/menu.png"}
              alt="humberger"
              width={40}
              height={40}
              onClick={() => {
                setToggleDropdown((prev) => !prev);
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="z-50"
            />
          </div>
        </div>
      </nav>

      {toggleDropdown && (
        <div className="z-50 absolute top-0 rounded lg:hidden w-full h-full bg-[#f0a900] sm:flex flex-col items-center justify-center p-10 sm:flex-wrap">
          <ul className="w-full flex flex-col items-center font-semibold gap-10">
            <li className="hover:text-lg duration-700">
              <a
              key="about"
              href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("about");
                  setToggleDropdown((prev) => !prev);
                  
                }}
                className="relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                ABOUT
              </a>
            </li>

            <li className="hover:text-lg duration-700">
              <a
              key="experience"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId("experience")
                  setToggleDropdown((prev) => !prev);
                }}
                href="#experience"
                className=" relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
              >
                EXPERIENCE
              </a>
            </li>

            <li className="hover:text-lg duration-700">
              <Link
                onClick={() => {
                  setToggleDropdown((prev) => !prev);
                }}
                href="#projects"
                className=" relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                PROJECTS
              </Link>
            </li>

            <li className="hover:text-lg duration-700">
              <Link
                onClick={() => {
                  setToggleDropdown((prev) => !prev);
                }}
                href="#contacts"
                className="relative cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/navigation/constants";

const Navigation = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  function scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  

  function toggleScrollLock(lock: any) {
    if (lock) {
      document.body.style.overflow = "hidden"; // Locks the scroll
    } else {
      document.body.style.overflow = ""; // Unlocks the scroll
    }
  }

  const handleToggle = () => {
    const shouldLock = !isLocked;
    toggleScrollLock(shouldLock);
    setIsLocked(shouldLock);
  };

  return (
    <>
      <nav className="z-50 fixed top-0 w-full max-h-lg h-[10vh] flex lg:flex-row justify-between items-center overflow-hidden bg-[#f0a900] font-poppins shadow-lg">
        <div className="lg:w-3/12 md:mx-auto w-1/2 flex flex-row items-center justify-center px-5 ">
          <Link href="/" className="flex items-start justify-start">
            <h1 className="animate-pulse flex flex-row items-center text-2xl text-white font-bold font-papyrus cursor-pointer hover:text-3xl duration-700 p-5">
              <span className="text-[#092635] text-4xl font-second">
                {`{ }`}{" "}
              </span>{" "}
              KENE
              <span className="text-[#092635] font-second">Tech</span>
            </h1>
          </Link>
        </div>

        <div className="lg:w-9/12 lg:flex justify-center mx-auto">
          <ul className="w-full lg:flex items-end justify-end font-semibold gap-[2rem] px-10 hidden">
            {navigation?.map((link, idx) => (
              <li className="hover:text-lg duration-700">
                <a
                  key={link?.title}
                  href={`#${link?.title}`}
                  className="relative uppercase cursor-pointer after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-second lg:tracking-[.5rem] tracking-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link?.title);
                  }}
                >
                  {link?.title}
                </a>
              </li>
            ))}
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
        <div className="z-50 absolute top-0 left-0 rounded lg:hidden flex w-full h-full bg-[#f0a900]"
        onClick={handleToggle}
        >
          <ul className="w-full p-5 h-screen flex flex-col items-center justify-center font-semibold gap-10">
            {navigation?.map((link, idx) => (
              <li className="hover:text-lg duration-700">
                <a
                  key={link?.title}
                  href={`#${link?.title}`}
                  className="relative uppercase cursor-pointer after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-second tracking-[10px]"
                  onClick={(e) => {
                    setToggleDropdown((prev => (!prev)))
                    e.preventDefault();
                    scrollToId(link?.title);
                    
                  }}
                >
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;

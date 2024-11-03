"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNav(false);
    }
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className= 'flex justify-between items-center mb-2 top-0 z-50 h-24 mx-auto px-4 text-white bg-[#2F0601]'>
      <a
        className={nav ?('hidden') :`flex title-font font-medium items-center text-gray-900`}
        href="./"
      >
        <Image
          className="w-auto h-10"
          src="/happypets.png"
          alt="Logo"
          width={100}
          height={30}
          style={{ }}
        />
        <span className="ml-3 text-xl  font-extrabold font-sans text-white">HAPPY PETS</span>
      </a>
      <ul className="hidden lg:flex mx-1">
        <a href="./">
          <li className=" mx-4 hover:cursor-pointer px-3 py-1 rounded-lg  hover:bg-[#F2E2CE] hover:bg-opacity-60  hover:text-[#2F0601]">
            Home
          </li>
        </a>
        <a href="./about-us">
          <li className="mx-4 hover:cursor-pointer px-3 py-1 rounded-lg hover:bg-[#F2E2CE] hover:bg-opacity-60  hover:text-[#2F0601]  ">
            About
          </li>
        </a>
        <a href="#">
          <li className="mx-4 hover:cursor-pointer px-3 py-1 rounded-lg hover:bg-[#F2E2CE] hover:bg-opacity-60 hover:text-[#2F0601]">
            Services
          </li>
        </a>
        <a href="./contact-us">
          <li className="mx-4 hover:cursor-pointer px-3 py-1 rounded-lg hover:bg-[#F2E2CE] hover:bg-opacity-60  hover:text-[#2F0601] ">
            Contact
          </li>
        </a>
        <a href="../../login">
          <li className="ml-8 mr-6 hover:cursor-pointer px-3 py-1 rounded-lg bg-[#F2E2CE] hover:bg-opacity-60  text-[#2F0601]">
            Sign-in
          </li>
        </a>
        
      </ul>
      <div onClick={handleNav} className="block absolute  right-6 top-9 lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        ref={navRef}
        className={
          nav
            ? "fixed left-0 top-0 lg:w-[40%]  h-full border-r border-r-gray-900 bg-[#2F0601] ease-in-out duration-500 z-50 flex flex-col justify-between"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div>
          <div className="flex justify-center items-center my-4 mx-4">

          <a
            className="flex title-font font-medium items-center text-gray-900 "
            href="#"
            >
            <Image
              className="w-auto h-10"
              src="/logo.png"
              alt="Logo"
              width={100}
              height={30}
              style={{ filter: "invert(100%)" }}
              />
            <span className=" text-xl  mx-2 font-bold font-serif text-white">HAPPY PETS</span>
          </a>
              </div>
          
          <a href="./" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              Home
            </li>
          </a>
          <a href="./about-us" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              About
            </li>
          </a>
          <a href="#" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              Services
            </li>
          </a>
          <a href="./contact-us" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              Contact
            </li>
          </a>
        </div>
        
      </ul>
    </div>
  );
};

export default Navbar;
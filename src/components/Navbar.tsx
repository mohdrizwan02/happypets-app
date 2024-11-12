"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

const navItems = [
  { label: "Home", href: "../../../home" },
  { label: "About", href: "../../../../aboutus" },
  { label: "Services", href: "../../../../services" },
  { label: "Contact Us", href: "../../../../contactus" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const pathname = usePathname();

  // const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <nav className="bg-[#2F0601]  shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[90px]">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-10 w-auto" src="happypets.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white  font-bold hover:text-[#2F0601] hover:bg-white px-[10px] py-[6px] rounded-md text-base  ${
                    pathname === item.href ? "bg-gray-100" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {!isLoggedIn && (
                <button
                  // onClick={toggleLogin}
                  className="bg-white hover:bg-[#2F0601] hover:text-white hover:border-2 hover:border-white text-[#2F0601] px-[10px] py-[6px] rounded-md text-base font-medium"
                >
                  Sign In
                </button>
              )}
              {/* {isLoggedIn && (
                <User className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              )} */}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#2F0601]  hover:bg-focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - opening from the left */}
      <div
        className={`md:hidden fixed border-white border-2 border-opacity-20 inset-y-0 left-0 w-3/5 bg-[#2F0601] shadow-xl transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="pt-5 pb-3 space-y-3">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex-shrink-0">
              <img className="h-12 w-auto" src="happypets.png" alt="Logo" />
            </Link>
          </div>
          {/* {!isLoggedIn && (
            <button
              onClick={toggleLogin}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-[#ad7f47]"
            >
              Sign In
            </button>
          )} */}
          {/* {isLoggedIn && (
            <div className="px-4 py-2 flex items-center space-x-2">
              <User className="h-6 w-6 text-gray-600" />
              <span className="text-gray-600">Profile</span>
            </div>
          )} */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-base font-medium ${
                pathname === item.href
                  ? "bg-bg-[#ad7f47] text-[#2F0601]"
                  : "text-white hover:text-[#2F0601] hover:bg-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex bottom-3 justify-evenly m-2 ml-4 ">
          <div className=" px-3  py-[6px]   bg-white text-[#2F0601] hover:bg-[#2F0601] hover:text-white hover:cursor-pointer hover:ring-2 hover:ring-white rounded-md" ><Link href = "../../../../login">login</Link></div>
          <div className="bg-white    text-[#2F0601] px-3 py-[6px] rounded-md hover:bg-[#2F0601] hover:text-white hover:cursor-pointer hover:ring-2 hover:ring-white "><Link href = "../../../../signup">signup</Link></div>
        </div>
      </div>
      {/* Overlay to close the sidebar when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#2F0601] md:hidden bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

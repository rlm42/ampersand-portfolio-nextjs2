import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Button from "./Button";
import ampersandLogo from "../../public/images/ampersandlogo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Need to put inside a useEffect, as the DOM elements are not initially rendered in SSR

  // useEffect(() => {
  //   const btn = document.getElementById("menu-btn");
  //   const nav = document.getElementById("menu");

  //   btn.addEventListener("click", () => {
  //     btn.classList.toggle("open");
  //     nav.classList.toggle("flex");
  //     nav.classList.toggle("hidden");
  //   });

  //   return () => {
  //     document.removeEventListener("click", btn);
  //   }
  // });

  return (
    // Use position relative, the hamburger menu will be positioned absolute, for this we need a relative container
    // mx is margin on the x axis (margin both left and right), p is padding on all sides (px would be just on the left axis, left and right)

    // <nav className="relative container mx-auto p-6" style={{ zIndex: "1" }}>
    //   {/* Flex container - flex puts all items into a flex row, left to right.   */}
    //   <div className="flex items-center justify-between">
    //     {/* Logo */}
    //     <div className="pt-2">
    //       <Image src={ampersandLogo} alt="Ampersand Logo" width={200} />
    //     </div>
    //     {/* Menu Items */}
    //     {/* div is hidden first, when it hits medium break point it is flexed */}
    //     <div className="hidden md:flex space-x-12 ">
    //       <a href="#" className="hover:text-darkGrayishBlue">
    //         Home
    //       </a>
    //       <a href="#" className="hover:text-darkGrayishBlue">
    //         About Me
    //       </a>
    //       <a href="#" className="hover:text-darkGrayishBlue">
    //         Portfolio
    //       </a>
    //       <a href="#" className="hover:text-darkGrayishBlue">
    //         Contact
    //       </a>
    //     </div>
    //     {/* Button */}
    //     <a
    //       href="#"
    //       className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
    //     >
    //       Get Started
    //     </a>

    //     {/* Hamburger Icon */}
    //     <button
    //       id="menu-btn"
    //       className="block hamburger md:hidden focus:outline-none"
    //     >
    //       <span className="hamburger-top"></span>
    //       <span className="hamburger-middle"></span>
    //       <span className="hamburger-bottom"></span>
    //     </button>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className="md:hidden">
    //     <div
    //       id="menu"
    //       className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
    //     >
    //       <a href="#">Home</a>
    //       <a href="#">About Me</a>
    //       <a href="#">Portfolio</a>
    //       <a href="#">Contact</a>
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image
            src={ampersandLogo}
            alt="Ampersand Logo"
            width={200}
            className="md:cursor-pointer h-9"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        {/* Flex on medium and bigger screens, hidden on smaller screens below md breakpoint */}
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Open_Sans]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block hover:text-primary">
              About Me
            </Link>
          </li>
          {/* This causes a hydration failed error, if it happens remove the div */}
          <div className="hover:text-primary z-50">
          {/* Portfolio Dropdown */}
          <NavLinks />
          </div>
          <li>
            <Link href="/" className="py-7 px-3 inline-block hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile Nav*/}
        <ul
          className={`md:hidden bg-white absolute w-1/2 h-full bottom-0 py-12 pl-4 duration-500 z-50 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              About Me
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

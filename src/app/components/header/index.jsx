"use client";
import React from "react";
import { useState } from "react";
import SvgComponent from "../svg/SVGComponent";
import MobilMenu from "../mobile-menu";
import Link from "next/link";

const header = () => {
  const [open, setOpen] = useState(false);

  const handleClickBurger = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <header className="fixed z-30 bg-black flex w-full h-[5vh] justify-between items-center p-6">
        <div className="logo">
          <SvgComponent w={100} h={100}></SvgComponent>
        </div>

        <div className="cursor-pointer pt-1 lg:hidden">
          <button
            className="group peer cursor-pointer"
            onClick={(e) => handleClickBurger(e)}
          >
            <div className="relative top-0 h-1 w-8 rounded-full bg-white "></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white opacity-100 "></div>
            <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-white "></div>
          </button>
        </div>
        <nav className="text-white list-none gap-4 hidden lg:flex">
          <Link href="/" className="hover:text-primary hover:underline">
            Home
          </Link>
          <Link href="/tarifs" className="hover:text-primary hover:underline">
            About us
          </Link>
          <Link href="/tarifs" className="hover:text-primary hover:underline">
            Services
          </Link>
          <Link href="/tarifs" className="hover:text-primary hover:underline">
            Community
          </Link>
        </nav>
      </header>
      {open && <MobilMenu></MobilMenu>}
    </>
  );
};

export default header;

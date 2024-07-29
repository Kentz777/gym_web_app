"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 w-full bg-primary-200 
      h-[100px] transition-all z-50 top-0 max-w-[1920px]
     ${headerActive ? "h-[100px]" : "h-[124px]"}`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="">
          <Image
            src={"/assets/img/logo.png"}
            width={300}
            height={180}
            alt={""}
          />
        </Link>
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top[124px]"}
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
        flex flex-col text-center gap-8 text-white 
        fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase
        font-medium xl:hidden transition-all`}
        />
        <Navbar containerStyles="flex gap-4 hidden xl:flex text-white text-base uppercase font-medium" />
        <div className="flex items-center gap-4">
<div className="text-white flex items-center gap-4">
  <button className="hover:text-accent transition-all text-base uppercase font-medium">Login</button>
  <button className="hover:text-accent transition-all text-base uppercase font-medium">Register</button>
</div>
          <button
          onClick={() => setOpenNav(!openNav)}
          className="text-white xl:hidden">
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

"use client";

import Image from "next/image";
import icon from "../public/icon.svg";

function Navbar() {
  return (
    <div className="w-full flex">
      <div className="flex items-center gap-2">
        <Image src={icon} width={96} height={166} className="w-8 h-8" />
        <p className="font-semibold">Wealth Calculator</p>
      </div>
      <div className="hidden lg:flex items-center ml-16 gap-4 md:gap-12">
        <a className="link link-hover">Contacts</a>
        <a className="link link-hover">Donate</a>
      </div>
    </div>
  );
}

export default Navbar;

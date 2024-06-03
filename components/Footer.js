"use client";

import Image from "next/image";
import icon from "../public/icon.svg";
import { SocialIcon } from "react-social-icons";
import { track } from "@vercel/analytics";

function Footer() {
  return (
    <footer className="pt-12 footer justify-between text-neutral-content">
      <aside className="items-center grid-flow-col">
        <div className="flex items-center gap-2">
          <Image src={icon} width={96} height={166} className="w-8 h-8" />
        </div>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <SocialIcon
          url="https://www.linkedin.com/in/sabyr-nurgaliyev-43b4a822a/"
          className="w-2 h-2"
          style={{ width: 32, height: 32 }}
          target="_blank"
          onClick={() => {
            track("clicked to linkedin");
          }}
        />
        <SocialIcon
          url="https://t.me/yatemez"
          className="w-2 h-2"
          style={{ width: 32, height: 32 }}
          target="_blank"
          onClick={() => {
            track("clicked to telegram");
          }}
        />
        <SocialIcon
          url="mailto:nurgasab@gmail.com"
          className="w-2 h-2"
          style={{ width: 32, height: 32 }}
          target="_blank"
          onClick={() => {
            track("clicked to telegram");
          }}
        />
      </nav>
    </footer>
  );
}

export default Footer;

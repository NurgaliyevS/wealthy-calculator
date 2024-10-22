"use client";

import Image from "next/image";
import icon from "../public/icon.svg";
import { SocialIcon } from "react-social-icons";
import { usePlausible } from "next-plausible";
import Link from "next/link";

function Footer() {
  const plausible = usePlausible();

  const projects = [
    { name: "Environmental Job Boards", url: "https://environmentaljobboards.com" },
    { name: "SubPage", url: "https://subpage.io" },
    { name: "PregnantMeal", url: "https://pregnantmeal.com" },
    { name: "UptimeFriend", url: "https://uptimefriend.com" },
    { name: "TripPlanss", url: "https://tripplanss.com" },
  ];

  const socialIcons = [
    {
      url: "https://www.linkedin.com/in/sabyr-nurgaliyev-43b4a822a/",
      name: "LinkedIn",
      plausibleEvent: "Linkedin"
    },
    {
      url: "https://x.com/tech_nurgaliyev",
      name: "Twitter",
      plausibleEvent: "Twitter"
    },
    {
      url: "mailto:nurgasab@gmail.com",
      name: "Gmail",
      plausibleEvent: "Gmail"
    }
  ];

  return (
    <footer className="">
      {/* Main footer content */}
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 py-20 lg:py-8">
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={icon}
                alt="wealth icon"
                width={96}
                height={166}
                className="w-8 h-8"
              />
              <span className="lg:text-lg font-semibold">
                Wealth Calculator
              </span>
            </div>
          </div>

          {/* Projects section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Projects</h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.url}
                    className="hover:text-primary transition-colors duration-200 text-sm"
                    target="_blank"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <SocialIcon
                  key={social.name}
                  url={social.url}
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ width: 32, height: 32 }}
                  target="_blank"
                  onClick={() => plausible(social.plausibleEvent)}
                  title={social.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
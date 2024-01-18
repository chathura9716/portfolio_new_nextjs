"use client"
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";



const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo and site name */}
        <ScrollLink to="about-me" spy={true} smooth={true} duration={50}>
          <div className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Snow Creations
            </span>
          </div>
        </ScrollLink>

        {/* Navigation links */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 ">
          <div className="flex items-center justify-between w-full h-auto border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50">
            {/* Use ScrollLink component for navigation */}
            <ScrollLink to="about-me" spy={true} smooth={true} duration={50}>
              <div className="cursor-pointer">About me</div>
            </ScrollLink>
            <ScrollLink to="skills" spy={true} smooth={true} duration={50}>
              <div className="cursor-pointer">Skills</div>
            </ScrollLink>
            <ScrollLink to="projects" spy={true} smooth={true} duration={50}>
              <div className="cursor-pointer">Projects</div>
            </ScrollLink>
            <ScrollLink to="work-xp" spy={true} smooth={true} duration={50}>
              <div className="cursor-pointer">Resume</div>
            </ScrollLink>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

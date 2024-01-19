"use client";
import React from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaFileAlt, FaProjectDiagram, FaTools, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-[65px] h-auto fixed left-0 top-1/2 transform -translate-y-1/2 shadow-lg shadow-[#2A0E61]/50 bg-[#3f26cb20] backdrop-blur-md z-50 px-[50px] rounded-[20px] ml-4">
      <div className="h-full flex flex-col items-center justify-start m-auto py-[10px]">
        {/* Logo and site name */}
        <ScrollLink to="about-me" spy={true} smooth={true} duration={50}>
          <div className="h-auto w-auto flex flex-col items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold mt-[10px] hidden md:block text-center text-gray-300">
              Snow Creations
            </span>
          </div>
        </ScrollLink>

        {/* Navigation links */}
        <div className="h-[500px] w-[80px] flex flex-col items-center text-center justify-between mt-[15px] text-gray-50">
          <ScrollLink to="about-me" spy={true} smooth={true} duration={50}>
            <div
              className="cursor-pointer mb-[15px] h-[70px] w-[70px] border-[#7042f861] bg-[#5f539f5e] m-[20px] text-center rounded-[20px] "
              data-tooltip-id="About-Me"
              data-tooltip-content="About Me"
            >
              <div className="flex justify-center items-center h-full">
                <Tooltip id="About-Me" />

                <div className="text-3xl">
                  <FaUser />
                </div>
              </div>
            </div>
          </ScrollLink>

          <ScrollLink to="skills" spy={true} smooth={true} duration={50}>
            <div
              className="cursor-pointer mb-[15px] h-[70px] w-[70px] border-[#7042f861] bg-[#5f539f5e] m-[20px] text-center rounded-[20px]"
              data-tooltip-id="Skills"
              data-tooltip-content="Skills"
            >
              <div className="flex justify-center items-center h-full">
                <Tooltip id="Skills" />

                <div className="text-3xl">
                  <FaTools />
                </div>
              </div>
            </div>
          </ScrollLink>

          <ScrollLink to="projects" spy={true} smooth={true} duration={50}>
            <div
              className="cursor-pointer mb-[15px] h-[70px] w-[70px] border-[#7042f861] bg-[#5f539f5e] m-[20px] text-center rounded-[20px]"
              data-tooltip-id="Projects"
              data-tooltip-content="Projects"
            >
              <div className="flex justify-center items-center h-full">
                <Tooltip id="Projects" />

                <div className="text-3xl">
                  <FaProjectDiagram />
                </div>
              </div>
            </div>
          </ScrollLink>

          <ScrollLink to="work-xp" spy={true} smooth={true} duration={50}>
            <div
              className="cursor-pointer mb-[15px] h-[70px] w-[70px] border-[#7042f861] bg-[#5f539f5e] m-[20px] text-center rounded-[20px]"
              data-tooltip-id="Resume"
              data-tooltip-content="Resume"
            >
              <div className="flex justify-center items-center h-full">
                <Tooltip id="Resume" className="text-[5px]" />

                <div className="text-3xl">
                  <FaFileAlt />
                </div>
              </div>
            </div>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

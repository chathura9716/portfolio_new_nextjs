"use client";
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const TopNavBar = () => {
  return (
    <div className="w-auto h-[65px] fixed top-4 right-3  shadow-[#2A0E61]/50 bg-[#3f26cb20] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Social icons */}
        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
          {/* socials */}
          <motion.div className="text-3xl flex justify-center gap-12 text-start text-white">
            <a href="https://github.com/chathura9716">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/chathura-lakmal-snow97/">
              <AiFillLinkedin />
            </a>
            <a href="https://facebook.com/chathura.lakmalc97/">
              <AiFillFacebook />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;

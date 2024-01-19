"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[4px] boarder-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi 🙌 I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Software Engineer{" "}
            </span>{" "}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Starting my journey in the realm of development, I&lsquo;ve explored a
          variety of frameworks like{" "}
          <b>Angular, Next.js, Laraval ,Codeigniter </b> and for backend work,
          I&lsquo;ve ventured into the realms of
          <b> .NET ,Codeigniter, Laraval ,Nodejs and Nest.js.</b>
          <p>
            This diverse experience has empowered me to consistently deliver
            impactful results, both independently and as part of collaborative
            teams. Currently pursuing a BSc in Computer Science, I&lsquo;m prepared to
            apply my academic knowledge and practical skills to make meaningful
            contributions to the tech industry. Outside the world of coding, I
            find comfort in literature, often engrossed in the pages of a good
            book.{" "}
          </p>
          <p>
            Spending quality time with my family and friends is a treasured
            aspect of my life. As I navigate through my academic and
            professional pursuits, I&lsquo;m enthusiastic about exploring
            opportunities that not only expand my horizons but also enable me to
            unleash my full potential.
          </p>
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className=" border-[#5e557b61] border-[2px] text-center flex justify-between  text-white cursor-pointer rounded-lg max-w-[600px] px-[2px]"
        >
          <div className="w-full h-full flex flex-row items-center justify-between py-2 px-[20px] ">
            <div className="min-w-[200px] h-auto flex flex-col items-left justify-start">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Frist name : Chathura
                </span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Last name : Lakmal</span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Country : Sri Lanka
                </span>
              </p>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-left justify-start">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Email : lakmalc97516@gmail.com
                </span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Languages: Sinhala /English
                </span>
              </p>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  University : University of Jaffna
                </span>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark2.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
      

    </motion.div>
  );
};

export default HeroContent;

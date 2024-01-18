"use client";
import { motion } from "framer-motion";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex-1 p-4 animate-fade-right animate-once animate-duration-[2ms]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        My Resume
      </h1>
      <div className="flex lg:flex-row flex-col">
        <section className=" text-gray-100 basis-1/2">
          <div className="container max-w-5xl pt-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-amber-300">
                  <h3 className="text-2xl font-semibold">My Education</h3>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 ml-5">
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-amber-300">
                    <h3 className="text-xl font-semibold tracki">
                      University of Jaffna{" "}
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      June 2019 - Oct 2023
                    </time>
                    <p className="mt-3">
                      B.Sc. in Computer Science (Upto Level 2 Semester 1)
                    </p>
                  </div>

                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-amber-300">
                    <h3 className="text-xl font-semibold tracki">
                      Minuwangoda President Collage
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      2011 -2016
                    </time>
                    <p className="mt-3">
                      G.C.E. Advanced Level (Maths) Z-Score : 1.2712
                    </p>
                  </div>
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-amber-300">
                    <h3 className="text-xl font-semibold tracki">
                      Minuwangoda Nalanda (Boys) National School
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      March 2009 - Dec 2013
                    </time>
                    <p className="mt-3">G.C.E. Ordinary Level 7A 1B 1C</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" text-gray-100 basis-1/2">
          <div className="container max-w-5xl py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-amber-300">
                  <h3 className="text-2xl font-semibold">My Experience</h3>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 ml-5">
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-amber-300">
                    <h3 className="text-xl font-semibold tracki">
                      EArrow (Pvt) Ltd.
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Jan 2023 - July 2023
                    </time>
                    <p className="mt-3">
                      Trainee Software Engineer & Associate Software Engineer
                    </p>
                    <p className="mt-3">
                      Worked with : Angular 15,Codeigniter 3, MySQL Tools:
                      Postman, Jira
                    </p>
                  </div>
                </div>

                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 ml-5">
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-amber-300">
                    <h3 className="text-xl font-semibold tracki">
                      House of Fashions Mega Mall Borella.
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      July 2023 - Dec 2023
                    </time>
                    <p className="mt-3">Software Engineer</p>
                    <p className="mt-3">
                      Worked with : Angular 15,C# .NET,.NET Core, MSSQL Server
                      management Tools, Postman, SAP Crystal Reports
                    </p>
                  </div>
                </div>

                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 ml-5">
                  <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-amber-300">
                    <h3 className="text-xl font-semibold tracki">Asombrix.</h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Jan 2023 - Present
                    </time>
                    <p className="mt-3">
                      Software Engineer part time(without payment & for
                      education purpose)
                    </p>
                    <p className="mt-3">
                      Worked with : Nextjs,Nestjs,TailwindCss MongoDB,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkExperience;

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div id='projects' className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col  md:flex-row gap-10 px-10">
        <ProjectCard 
        
        src="/web1.png"
        title="Angular and .netcore Pos system"
        description="pos system that can add products and sell them with bulk for small hotels,shops"/>
       
        <ProjectCard 
        
        src="/web2.png"
        title="Institute of bankers of Sri Lanka student portal"
        description="Institute Of Bankers Of Sri Lanka Student Portal (Angular And Codeigniter 3 API).
        MyIBSL student portal developed for managing all students, connecting Angular frontend with CodeIgniter3 backend when i worked with Earrow"/>
        <ProjectCard 
        
        src="/SpaceWeb.png"
        title="Next.js protfolio"
        description="This is my portfolio"/>
        
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div id='projects' className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard 
        
        src="/web1.png"
        title="Angular and .netcore Pos system"
        description="hss bjhd djdbjhxd dhjxbdsj dsbxdjx"/>
        <ProjectCard 
        
        src="/web2.png"
        title="Institute of bankers of Sri Lanka student portal"
        description="hss bjhd djdbjhxd dhjxbdsj dsbxdjx"/>
        <ProjectCard 
        
        src="/SpaceWeb.png"
        title="Next.js protfolio"
        description="hss bjhd djdbjhxd dhjxbdsj dsbxdjx"/>
      </div>
    </div>
  );
};

export default Projects;

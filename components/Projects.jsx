import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoverse from "../public/assets/projects/cryptoverse.png";
// import Goggle from "../public/assets/projects/Goggle.png";
import Realtor from "../public/assets/projects/Realtor.png";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest py-4  text-[#b5838d]">
          Projects
        </p>
        <h2>What I've build</h2>
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <ProjectItem
            title="Cryptoverse"
            backgroundImage={cryptoverse}
            projectUrl="/cryptoverse"
          />
          {/* <ProjectItem
            title="Goggle"
            backgroundImage={Goggle}
            projectUrl="/goggle"
          /> */}
          <ProjectItem
            title="Realtor"
            backgroundImage={Realtor}
            projectUrl="/realtor"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

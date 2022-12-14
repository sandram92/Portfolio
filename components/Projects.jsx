import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoverse from "../public/assets/projects/cryptoverse.png";
import Calculator from "../public/assets/projects/calculator.png";
import Realtor from "../public/assets/projects/Realtor.png";
import ScoreKeeper from "../public/assets/projects/score.png";
import WeatherApp from "../public/assets/projects/weather.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full relative">
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
          <ProjectItem
            title="Realtor"
            backgroundImage={Realtor}
            projectUrl="/realtor"
          />
          <ProjectItem
            title="Score-keeper"
            backgroundImage={ScoreKeeper}
            projectUrl="/score"
          />
          <ProjectItem
            title="Weather-App"
            backgroundImage={WeatherApp}
            projectUrl="/weather"
          />
          <ProjectItem
            title="Calculator"
            backgroundImage={Calculator}
            projectUrl="/calculator"
          />
        </div>
        <div className="flex justify-center pt-10 text-[#665c61]">
          More comming soon
        </div>
      </div>
    </div>
  );
};

export default Projects;

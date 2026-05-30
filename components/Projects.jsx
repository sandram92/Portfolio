import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoverse from "../public/assets/projects/cryptoverse.png";
import Calculator from "../public/assets/projects/calculator.png";
import Realtor from "../public/assets/projects/Realtor.png";
import ScoreKeeper from "../public/assets/projects/score.png";
import WeatherApp from "../public/assets/projects/weather.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full relative px-0 sm:px-3 py-16">
      <div className="w-full max-w-none sm:max-w-[1240px] mx-auto px-3 sm:px-0">
        <p className="section-tag py-4">Projects</p>
        <h2 className="text-[var(--text-primary)]">What I've Built</h2>
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
        <div className="flex justify-center pt-10 text-[var(--text-muted)]">
          More coming soon
        </div>
      </div>
    </section>
  );
};

export default Projects;

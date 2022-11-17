import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#b5838d]">Sandra</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A highly motivated Junior Front End Developer with a passion for
            solution / application development. Capability to support teams to
            deliver solutions within scope, quality, budget and time
            constraints. A strong passion for utilising technologies to produce
            the best user experiences with a background of coding in various
            languages. An ambitious individual with a desire to work within
            environments where creative solutions are encouraged and technical
            challenges are the norm.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-8'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400'>
                <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400'>
                <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400'>
                <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400 '>
                <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

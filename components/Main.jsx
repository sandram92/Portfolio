import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 pt-10">
            Let's build something together
          </p>
          <h1 className="pt-4 text-gray-700">I'm </h1>
          <h1 className="py-4 text-[#b5838d] text-5xl">
            <Typewriter
              options={{
                strings: ["Sandra", "Front-End Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
            <a
              href="https://linkedin.com/in/sandra-margol-198816243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="http://github.com/sandram92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-400">
                <FaGithub />
              </div>
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <span>Sandra</span>,
});

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 pt-14">
            Let's build something together
          </p>
          <h1 className="pt-10  text-gray-700">I'm </h1>
          <h1 className="py-4 text-[#b5838d] text-5xl">
            <Typewriter
              options={{
                strings: ["Sandra", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto  text-lg">
            I believe where you start in life doesn't have to define where you
            finish. What began as curiosity became a career, and I'm proof that
            determination, continuous learning, and persistence can completely
            change your future. I don't like to define myself by the work I've
            done. I define myself by the work I want to do. Skills can be
            taught, personality is inherent. I prefer to keep learning, continue
            challenging myself, and do interesting things that matter.
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

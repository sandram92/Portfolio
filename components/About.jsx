import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import aboutPic from "../public/assets/about.avif"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#b5838d]">
            About
          </p>
          <h1 className="py-4 ">Who I Am</h1>
          <p className="py-2 text-gray-600">
            I have spent the last 10 years working as a Administrator. I have
            always had a knock for technology and working with computers. In
            2020 I’ve started working with HTML and CSS to make some personal
            projects to share with my friends. This become like a real passion.
            I’ve joined the Web Development Bootcamp where I was focusing on
            Java Script and expanding my knowledge on HTML and CSS.
          </p>
          <p className="py-2 text-gray-600">
            Fascinating with how intricate programming can be I was quickly
            drawn to learn more. I started learning React.js and was even more
            enthused with making websites more interactive. I don’t like to
            define myself by the work I’ve done. I define myself by the work I
            want to do. Skills can be taught, personality is inherent. I prefer
            to keep learning, continue challenging myself, and do interesting
            things that matter.
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out for some more projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded"
            src={aboutPic}
            alt="/"
            width='350'
            height='200'
          />
        </div>
      </div>
    </div>
  );
};

export default About;

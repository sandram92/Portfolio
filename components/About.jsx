import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import aboutPic from "../public/assets/about.avif";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#b5838d]">
            About
          </p>
          <h1 className="py-4 ">Who I Am</h1>
          <p className="py-2 text-gray-600 text-lg sm:text-base">
            I'm fascinated by technology and the endless opportunity to learn,
            create, and solve problems, I started building small personal
            projects and spending countless evenings teaching myself how to
            code. What began as curiosity eventually grew into a career that I
            genuinely love. Today, I work as a Software Developer, building
            modern web applications and real-time systems used by businesses
            every day. My focus is creating intuitive user experiences and
            turning complex challenges into simple, scalable solutions. I
            primarily work with React, SvelteKit, TypeScript, and JavaScript,
            alongside Node.js, PostgreSQL, AWS, WebSockets, and modern testing
            frameworks. I enjoy working across the full development lifecycle,
            from early ideas and design discussions through to implementation
            and deployment.
          </p>
          <p className="mt-2 py-2 text-gray-600 text-lg sm:text-base">
            What I love most about software development is that there is always
            something new to learn, improve, and build. Even more rewarding is
            the ability to create something that didn't exist
            before-transforming an idea into a product that can make a real
            difference to the people who use it.
          </p>

          <div className="flex justify-between">
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
            <div className="bg-[#e7d4d8] w-max px-9 py-1 my-5 rounded-lg animate-bounce">
              <a
                href="assets/SandraMargolCV.pdf"
                download
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded"
            src={aboutPic}
            alt="/"
            width={3500}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

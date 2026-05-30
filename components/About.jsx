import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import aboutPic from "../public/assets/about.avif";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:min-h-screen flex items-center px-0 sm:px-3 py-16"
    >
      <div className="w-full max-w-none sm:max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 glass-card p-6 sm:p-8 rounded-none sm:rounded-2xl">
        <div className="col-span-2 reveal-up">
          <p className="section-tag">About</p>
          <h1 className="py-4 text-[var(--text-primary)]">Who I Am</h1>
          <p className="py-2 text-[var(--text-muted)] text-lg sm:text-base">
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
          <p className="mt-2 py-2 text-[var(--text-muted)] text-lg sm:text-base">
            What I love most about software development is that there is always
            something new to learn, improve, and build. Even more rewarding is
            the ability to create something that didn't exist
            before-transforming an idea into a product that can make a real
            difference to the people who use it.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <Link
              to="projects"
              spy={true}
              smooth={false}
              delay={0}
              offset={-10}
              duration={0}
            >
              <p className="py-2 text-[var(--text-muted)] underline cursor-pointer hover:text-[var(--text-primary)] transition-colors duration-300">
                Check out for some more projects
              </p>
            </Link>
            <a
              href="assets/Sandra_Margol_CV.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="neo-button"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full h-auto soft-panel flex items-center justify-center p-4 hover:scale-[1.02] transition-transform duration-300 reveal-up delay-2">
          <Image
            className="rounded"
            src={aboutPic}
            alt="/"
            width={3500}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

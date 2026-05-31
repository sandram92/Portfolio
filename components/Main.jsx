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
    <section
      id="home"
      className="relative w-full min-h-screen text-center overflow-hidden"
    >
      <div className="glow-orb glow-orb-top" />
      <div className="" />
      <div className="max-w-none sm:max-w-[1240px] w-full min-h-screen mx-auto flex justify-center items-center px-0 sm:px-4 pt-16 pb-6 relative z-10">
        <div className="sm:glass-card w-full max-w-none sm:max-w-4xl p-6 sm:p-10 reveal-up rounded-none sm:rounded-2xl">
          <p className="section-tag reveal-up delay-1 mt-8">
            Let's build something together
          </p>
          <h1 className="pt-6 text-[var(--text-primary)] reveal-up delay-2">
            I'm
          </h1>
          <h1 className="py-4 text-[var(--accent)] text-5xl reveal-up delay-3">
            <Typewriter
              options={{
                strings: ["Sandra", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-4 text-[var(--text-muted)] max-w-full sm:max-w-[70%] m-auto text-lg reveal-up delay-4">
            I believe where you start in life doesn't have to define where you
            finish. What began as curiosity became a career, and I'm proof that
            determination, continuous learning, and persistence can completely
            change your future. I don't like to define myself by the work I've
            done. I define myself by the work I want to do. Skills can be
            taught, personality is inherent. I prefer to keep learning, continue
            challenging myself, and do interesting things that matter.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-8 reveal-up delay-4">
            <a
              href="https://linkedin.com/in/sandra-margol-198816243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-pill">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="http://github.com/sandram92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-pill">
                <FaGithub />
              </div>
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={false}
              delay={0}
              offset={10}
              duration={0}
            >
              <div className="icon-pill">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

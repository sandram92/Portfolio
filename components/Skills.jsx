import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justyfy-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#b5838d]">
          Skills
        </p>
        <h2 className="py-6">What I Can do</h2>
        <div className="py-3 grid md:grid-cols-2 gap-4 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/html.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/css.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/javascript.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/react.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/nextjs.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/node.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto md:mt-5">
                <Image
                  src={"/assets/skills/npm.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="mt-5">NPM</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/github1.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/bootstrap-logo-shadow.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/tailwind.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/ant.png"}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ant Design</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

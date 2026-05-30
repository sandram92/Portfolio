import React from "react";
import Image from "next/image";

const skills = [
  {
    label: "JavaScript",
    src: "/assets/skills/javascript.png",
    width: 64,
    height: 64,
  },
  { label: "React.js", src: "/assets/skills/react.png", width: 64, height: 64 },
  { label: "Next.js", src: "/assets/skills/nextjs.png", width: 64, height: 64 },
  {
    label: "Svelte",
    src: "/assets/skills/Svelte_Logo.png",
    width: 60,
    height: 60,
  },
  {
    label: "Tailwind",
    src: "/assets/skills/tailwind.png",
    width: 64,
    height: 64,
  },
  { label: "Node", src: "/assets/skills/node.png", width: 64, height: 64 },
  { label: "Github", src: "/assets/skills/github1.png", width: 64, height: 64 },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:min-h-screen px-0 sm:p-3 py-16">
      <div className="w-full max-w-none sm:max-w-[1240px] mx-auto flex flex-col justify-center h-full px-3 sm:px-0">
        <p className="section-tag">Skills</p>
        <h2 className="py-6 text-[var(--text-primary)]">What I Can Do</h2>
        <div className="py-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="soft-panel p-5 hover:-translate-y-1 transition-transform duration-300 reveal-up"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="grid grid-cols-2 gap-3 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.src}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.label}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-[var(--text-primary)] text-lg">
                    {skill.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

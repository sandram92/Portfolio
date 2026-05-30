import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ backgroundImage, title, projectUrl }) => {
  return (
    <div className="relative flex justify-center items-center h-auto w-full rounded-2xl p-4 group overflow-hidden soft-panel hover:-translate-y-1 transition-all duration-300">
      <Image
        className="rounded-xl group-hover:scale-105 group-hover:opacity-30 transition-all duration-500"
        src={backgroundImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute inset-0 z-10 p-6 sm:p-8 bg-gradient-to-t from-black/70 to-black/35">
        <div className="h-full w-full flex flex-col justify-end items-start">
          <h3 className="text-2xl text-white tracking-widest">{title}</h3>
          <Link
            href={projectUrl}
            className="mt-3 inline-flex py-2 px-4 rounded-lg bg-white text-gray-800 font-semibold"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

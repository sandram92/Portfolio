import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ backgroundImage, title, projectUrl }) => {
  return (
    <div className="flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#b5838d] to-[#fcd5ce]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="m-4 text-2xl text-white tracking-widest text-center">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

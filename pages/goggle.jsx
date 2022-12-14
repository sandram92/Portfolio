import React from "react";
import Image from "next/image";
import GoggleIMG from "../public/assets/projects/Goggle.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const goggle = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={GoggleIMG}
          alt="/"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] left-[50%] w-full max-w-[1240px] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
          <h2>Goggle</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#a75767]">Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Netlify. This is
            a google clone. Users are able to type a keyword or url to find what
            they love to.
          </p>

          <Link
            href="https://goggle-search-s.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2  mt-4 mr-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white">
              View Live
            </button>{" "}
          </Link>
          <Link
            href="https://github.com/sandram92/my-goggle-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-9 py-2 mt-4 mr-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white">
              GITHUB
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ApI's
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default goggle;

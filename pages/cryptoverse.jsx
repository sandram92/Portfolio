import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import cryptoverseImage from "../public/assets/projects/cryptoverse.png";
import { RiRadioButtonFill } from "react-icons/ri";

const cryptoverse = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={cryptoverseImage}
          alt="/"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] left-[50%] w-full max-w-[1240px] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
          <h2>Cryptoverse</h2>
          <h3>React JS / Ant Design / Redux</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className='text-[#a75767] pb-3'>Project</p>
          <h2 className='pb-5'>Overview</h2>
          <p>
            This app was built using React and is hosted on Netlify. Users
            are able to search informations about cryptocurencies and check for
            the latest news. 
          </p>
          <a
            href="https://sandrascryptoappreact.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2  mt-4 mr-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white">
              View Live
            </button>
          </a>
          <a
            href="https://github.com/sandram92/cryptoapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-9 py-2 mt-4 mr-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white">
              GITHUB
            </button>
          </a>
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
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ant Design
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

        <a href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </a>
      </div>
    </div>
  );
};

export default cryptoverse;

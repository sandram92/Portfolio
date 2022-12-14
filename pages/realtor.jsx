import React from "react";
import Image from "next/image";
import RealtorIMG from "../public/assets/projects/Realtor.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const realtor = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={RealtorIMG}
          alt="/"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] left-[50%] w-full max-w-[1240px] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
          <h2>Realtor</h2>
          <h3>React JS / Next.js / API's / Chakra UI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#a75767] pb-3">Project</p>
          <h2 className="pb-5">Overview</h2>
          <p>
            This app was built using React and Next.js and is hosted on Vercel.
            You can search for the properties to buy or rent. You can filter the
            property based on the price , area, type etc. By clicking on each
            property you can check for more information about particular search.
          </p>
          <Link
            href="https://realestate-sandram92.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 mt-4 mr-2 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white">
              View Live
            </button>
          </Link>
          <Link
            href="https://github.com/sandram92/sandra_realestate"
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
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Chakra UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Api's
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
         <p className="underline cursor-pointer">Back</p>
         </Link>
      </div>
    </div>
  );
};

export default realtor;

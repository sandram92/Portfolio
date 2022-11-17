import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#b5838d]">
            About
          </p>
          <h1 className="py-4 ">Who I Am</h1>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit ametgggggg
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            nam ullam facilis perspiciatis unde aut inventore sed deleniti
            tenetur accusamus ratione aliquid, odit expedita reiciendis eum
            cupiditate corporis. Sit, nemo.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            vitae nihil magnam beatae praesentium veniam corporis eveniet hic
            necessitatibus quo consequuntur adipisci tempora earum doloribus
            odio omnis, incidunt porro pariatur.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out for some more projects
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1248px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest py-4  text-[#b5838d]">
          Contact
        </p>
        <h3 className="py-4">Get in Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Sandra</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between pt-4 ">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-400">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-400 ">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadowy-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-3 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                    type="text"
                  />
                </div>
                <div className='flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Message</label>
                <textarea className='border-2 rounded-lg p-3 border-[#e2d0d4]' rows='10'></textarea>
                </div>
                <button className='w-full p-4 mt-4'>Send Message</button>
              </form>
            </div> 
          </div>
        </div>
        <div className='py-12 flex justify-center'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-400'>
                <HiOutlineChevronDoubleUp className='text-[#b5838d]' size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

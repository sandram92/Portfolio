import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contactImg from "../public/assets/contact.avif";
// import Link from "next/link";

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState(false);
  const [value, setValue] = useState("");

  const validEmail = (e) => {
    let userInput = e.target.value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userInput.match(mailformat)) {
      setValue(userInput);
    } else {
      setValue("");
    }
  };

  const alertMessage = (e) => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gkr0yyt",
        "template_8ol5uab",
        form.current,
        "7oSNqxO-a6JGZQBjn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1248px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest py-4  text-[#b5838d]">
          Contact
        </p>
        <h3 className="py-4">Get in Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                  width={500}
                  height={500}
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
                <div className="flex items-center pt-4 ">
                  <a
                    href="https://linkedin.com/in/sandra-margol-198816243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-7"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="http://github.com/sandram92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-400">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadowy-gray-400 rounded-xl lg:p-4">
            <div className="p-4 relative">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                    type="email"
                    name="user_email"
                    placeholder="youremail@gmail.com"
                    onChange={validEmail}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 border-[#e2d0d4] flex"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="relative">
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-[#e2d0d4]"
                      rows="10"
                      placeholder="Your message"
                      name="message"
                    ></textarea>
                  </div>
                  {alert && (
                    <div className="border-1 rounded-xl h-[10vh] w-[40vh] shadow-xl absolute left-[18%]  md:left-[28%] bottom-[20%]  opacity-70 flex items-center justify-center bg-[#ebd4d9] text-white ">
                      Thanks for your message
                    </div>
                  )}
                </div>
                {value === "" ? (
                  <button
                    style={{ opacity: 0.3 }}
                    disabled={value.length < 1}
                    onClick={alertMessage}
                    type="submit"
                    className="w-full p-4 mt-4  shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white "
                  >
                    Send Message
                  </button>
                ) : (
                  <button
                    disabled={value.length < 1}
                    onClick={alertMessage}
                    type="submit"
                    className="w-full p-4 mt-4  shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c297a0] to-[#ebd4d9] text-white "
                  >
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-center">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-400">
              <HiOutlineChevronDoubleUp className="text-[#b5838d]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

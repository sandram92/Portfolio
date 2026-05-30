import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contactImg from "../public/assets/contact.avif";

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

  const alertMessage = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
    setValue("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gkr0yyt",
        "template_8ol5uab",
        form.current,
        "7oSNqxO-a6JGZQBjn",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="w-full lg:min-h-screen px-0 sm:px-3 py-16">
      <div className="w-full max-w-none sm:max-w-[1248px] m-auto px-3 sm:px-0">
        <p className="section-tag py-4">Contact</p>
        <h3 className="py-4 text-[var(--text-primary)]">Get in Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full glass-card p-4">
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
                <h2 className="py-4 text-[var(--text-primary)]">Sandra</h2>
                <p className="text-[var(--text-muted)]">Software Developer</p>
                <p className="py-4 text-lg sm:text-base text-[var(--text-muted)]">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[var(--accent)] tracking-wider">
                  Connect With Me
                </p>
                <div className="flex items-center pt-4 ">
                  <a
                    href="https://linkedin.com/in/sandra-margol-198816243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-7"
                  >
                    <div className="icon-pill">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="http://github.com/sandram92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon-pill">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto glass-card lg:p-4">
            <div className="p-4 relative">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-[var(--text-muted)]">
                    Name
                  </label>
                  <input
                    className="border rounded-lg p-3 flex bg-transparent text-[var(--text-primary)]"
                    style={{ borderColor: "var(--border)" }}
                    type="text"
                    name="user_name"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-[var(--text-muted)]">
                    Email
                  </label>
                  <input
                    className="border rounded-lg p-3 flex bg-transparent text-[var(--text-primary)]"
                    style={{ borderColor: "var(--border)" }}
                    type="email"
                    name="user_email"
                    placeholder="youremail@gmail.com"
                    onChange={validEmail}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-[var(--text-muted)]">
                    Subject
                  </label>
                  <input
                    className="border rounded-lg p-3 flex bg-transparent text-[var(--text-primary)]"
                    style={{ borderColor: "var(--border)" }}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="relative">
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-[var(--text-muted)]">
                      Message
                    </label>
                    <textarea
                      className="border rounded-lg p-3 bg-transparent text-[var(--text-primary)]"
                      style={{ borderColor: "var(--border)" }}
                      rows="10"
                      placeholder="Your message"
                      name="message"
                    ></textarea>
                  </div>
                  {alert && (
                    <div className="rounded-xl h-[10vh] w-[40vh] shadow-xl absolute left-[18%] md:left-[28%] bottom-[20%] opacity-95 flex items-center justify-center text-white bg-[var(--accent)]">
                      Thanks for your message
                    </div>
                  )}
                </div>
                {value === "" ? (
                  <button
                    disabled={value.length < 1}
                    onClick={alertMessage}
                    type="submit"
                    className="w-full p-4 mt-4 rounded-xl uppercase text-white cursor-not-allowed"
                    style={{
                      opacity: 0.35,
                      background:
                        "linear-gradient(120deg, var(--accent), var(--accent-2))",
                    }}
                    aria-disabled="true"
                  >
                    Send Message
                  </button>
                ) : (
                  <button
                    disabled={value.length < 1}
                    onClick={alertMessage}
                    type="submit"
                    className="neo-button w-full p-4 mt-4 uppercase"
                  >
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-center">
          <Link
            to="home"
            spy={true}
            smooth={false}
            delay={0}
            offset={50}
            duration={0}
          >
            <div className="icon-pill">
              <HiOutlineChevronDoubleUp
                className="text-[var(--accent)]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

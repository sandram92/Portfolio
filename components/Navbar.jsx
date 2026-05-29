import Image from "next/image";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `#ecf0f3` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full pr-3">
        <Image src={"/assets/moje.png"} alt="/" width="60" height="60" />
        <ul className="hidden md:flex">
          <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
            <Link to="home" spy={true} smooth={true} offset={10} duration={500}>
              Home
            </Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNavbar} className="md:hidden">
          <AiOutlineMenu size={26} />
        </div>
      </div>
      <div
        className={
          navbar
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navbar
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[100%]  p-10  ease-out duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Image src={"/assets/moje.png"} alt="/" width="60" height="80" />
              <div
                onClick={handleNavbar}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="ml-3 w-[85%] md:w-[90] py-4">
                {" "}
                Lets build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex lex-col">
            <ul className="pl-3 uppercase">
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer"
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer"
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer"
              >
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer"
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-40">
            <p className="pl-3 uppercase tracking-widest text-[#b5838d]">
              Let's connect
            </p>
            <div className="flex justify-between pl-3 my-4 w-full sm:w-[80%]">
              <a
                href="https://linkedin.com/in/sandra-margol-198816243/"
                target="_blank"
                rel="noopener noreferrer"
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
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                  <AiOutlineMail onClick={() => setNavbar(false)} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

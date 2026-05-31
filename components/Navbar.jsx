import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleNavbar = () => {
    // Keep sidebar behavior mobile-only.
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }
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
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 z-[100] border-b backdrop-blur-xl"
          : "fixed w-full h-20 z-[100] border-b backdrop-blur-xl"
      }
      style={{
        background: shadow ? "var(--surface-strong)" : "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="relative w-full flex justify-between items-center h-full pr-1 pl-2 md:px-6">
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide text-[var(--text-muted)]">
          <li className="hover:text-[var(--text-primary)] transition-colors duration-300">
            <Link to="home" spy={true} smooth={false} offset={10} duration={0}>
              Home
            </Link>
          </li>
          <li className="hover:text-[var(--text-primary)] transition-colors duration-300">
            <Link to="about" spy={true} smooth={false} offset={10} duration={0}>
              About
            </Link>
          </li>
          <li className="hover:text-[var(--text-primary)] transition-colors duration-300">
            <Link
              to="skills"
              spy={true}
              smooth={false}
              offset={-150}
              duration={0}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-[var(--text-primary)] transition-colors duration-300">
            <Link
              to="projects"
              spy={true}
              smooth={false}
              offset={-20}
              duration={0}
            >
              Projects
            </Link>
          </li>
          <li className="hover:text-[var(--text-primary)] transition-colors duration-300">
            <Link
              to="contact"
              spy={true}
              smooth={false}
              offset={-10}
              duration={0}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 ml-auto">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-pill theme-toggle p-3"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <BsSunFill size={16} />
            ) : (
              <BsMoonStarsFill size={16} />
            )}
          </button>
          <button
            type="button"
            onClick={handleNavbar}
            className="icon-pill theme-toggle p-3 md:hidden"
            aria-label="Open menu"
          >
            <AiOutlineMenu size={20} />
          </button>
        </div>
      </div>
      <div
        className={
          navbar
            ? "md:hidden fixed inset-0 w-full h-screen bg-black/70 z-[120]"
            : "hidden"
        }
      >
        <div
          className={
            navbar
              ? "md:hidden fixed left-0 top-0 w-[82%] sm:w-[60%] h-screen p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-out duration-500"
          }
          style={{
            background: "var(--surface-strong)",
            borderRight: "1px solid var(--border)",
          }}
        >
          <div>
            <div className="flex justify-end items-center">
              <div
                onClick={handleNavbar}
                className="icon-pill theme-toggle p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div
              className="border-b my-4"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="ml-3 w-[85%] md:w-[90] py-4 text-[var(--text-muted)] ">
                {" "}
                Let's build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="pl-3 uppercase">
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={false}
                  offset={50}
                  duration={0}
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={false}
                  offset={50}
                  duration={0}
                >
                  About
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                <Link
                  to="skills"
                  spy={true}
                  smooth={false}
                  offset={50}
                  duration={0}
                >
                  Skills
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={false}
                  offset={50}
                  duration={0}
                >
                  Projects
                </Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="py-4 text-sm cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={false}
                  offset={50}
                  duration={0}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-40">
            <p className="pl-3 uppercase tracking-widest text-[var(--accent)]">
              Let's connect
            </p>
            <div className="flex justify-between pl-3 my-4 w-full sm:w-[80%]">
              <a
                href="https://linkedin.com/in/sandra-margol-198816243/"
                target="_blank"
                rel="noopener noreferrer"
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
              <Link
                to="contact"
                spy={true}
                smooth={false}
                offset={10}
                duration={0}
              >
                <div className="icon-pill">
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

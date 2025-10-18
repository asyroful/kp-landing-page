import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMobile from "../assets/Logo-mobile.svg";
import logo from "../assets/Logo.svg";
import starsLeft from "../assets/stars-left.png";
import starsRight from "../assets/stars-right.png";
import { ListIcon, XIcon } from "@phosphor-icons/react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/?hero" },
    { title: "About", path: "/?about" },
    { title: "Services", path: "/?services" },
    { title: "Projects", path: "/?projects" },
  ];

  // Get current section from URL query
  const currentSection = window.location.search.replace("?", "") || "hero";

  // Helper for section navigation: go to home, set query, scroll
  const goToSection = (section) => {
    const scrollToSectionWithOffset = () => {
      window.history.replaceState(null, "", `/?${section}`);
      const el = document.getElementById(section);
      const navEl = document.querySelector('nav');
      const navHeight = navEl ? navEl.offsetHeight : 0;
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSectionWithOffset, 120); // sedikit delay agar section sudah render
    } else {
      scrollToSectionWithOffset();
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#181818]/70 backdrop-blur-md shadow-lg border-b border-white/10"
          : `${isOpen ? "bg-black" : "bg-transparent"}`
      }`}
      style={{ overflow: "visible" }}
    >
      {/* Stars background hanya di halaman Home */}
      {location.pathname !== "/" && (
        <>
          <img
            src={starsLeft}
            alt="stars left"
            className="absolute top-0 left-0 z-0 pointer-events-none select-none"
            style={{ maxWidth: "30vw" }}
          />
          <img
            src={starsRight}
            alt="stars right"
            className="absolute top-0 right-0 z-0 pointer-events-none select-none"
            style={{ maxWidth: "30vw" }}
          />
        </>
      )}
      <div
        className={[
          "w-full",
          "max-w-[1126px]",
          "mx-auto",
          "py-2",
          "relative",
          "z-10",
          "flex",
          "items-center",
          "justify-between",
          isOpen ? "bg-black lg:bg-transparent" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between h-20 w-full">
          {/* Mobile: Hamburger + Logo kiri */}
          <div className="flex items-center w-full lg:hidden justify-between mx-4 z-50 relative">
            <img src={logoMobile} alt="Kevin Logo" className="object-contain" />
            {/* Mobile */}
            <div className="flex items-center">
              <button
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-sm z-50 relative"
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
              >
                Contact Now
              </button>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none z-50 relative text-white"
                aria-label="Toggle menu"
                tabIndex={0}
                style={{ zIndex: 100 }}
              >
                {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
              </button>
            </div>
          </div>

          {/* Desktop: Logo, Nav, Language (justify-between) */}
          <>
            <div className="hidden lg:block flex-shrink-0">
              <NavLink to="/" className="inline-block align-middle">
                <img src={logo} alt="Kevin Logo" className="object-contain w-16" />
              </NavLink>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, idx) => {
                  const section = link.path.split("?")[1];
                  const isActive =
                    location.pathname === "/" && currentSection === section;
                  return (
                    <motion.div
                      key={link.path}
                      className="relative cursor-pointer py-2"
                      onMouseEnter={() => setHoveredLink(idx)}
                      onMouseLeave={() => setHoveredLink(null)}
                      onFocus={() => setHoveredLink(idx)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                          setHoveredLink(null);
                      }}
                    >
                      <NavLink
                        to={link.path}
                        className={() =>
                          "px-3 py-2 rounded-md text-sm text-white font-medium transition-colors duration-300"
                        }
                        onClick={(e) => {
                          if (link.path.startsWith("/?")) {
                            e.preventDefault();
                            goToSection(section);
                          }
                        }}
                      >
                        {link.title}
                      </NavLink>
                      <AnimatePresence>
                        {(hoveredLink === idx) && (
                          <motion.span
                            layoutId="navbar-underline"
                            className={`absolute left-0 bottom-0 h-[3px] bg-white rounded-full`}
                            initial={{ width: 0, x: 0 }}
                            animate={{ width: "100%", x: 0 }}
                            exit={{ width: 0, x: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 30,
                            }}
                            style={{
                              transformOrigin: "left",
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:block">
              <div>
                <button
                  className="px-4 py-3 rounded-lg bg-white text-black font-semibold text-sm"
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                >
                  Contact Now
                </button>
              </div>
            </div>
          </>
        </div>
      </div>

      {/* Mobile Menu - animated dropdown with framer-motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden relative top-0 right-0 left-0 z-40"
          >
            <div className="mx-auto w-full bg-black h-dvh shadow-2xl rounded-b-xl">
              <div className="flex-1 px-6 pt-4 pb-6 space-y-2 flex flex-col justify-center">
                {navLinks.map((link, idx) => (
                  <div key={link.path} className="w-full">
                    {link.submenu ? (
                      <>
                        <button
                          className="w-full flex justify-between items-center px-4 py-3 rounded-md text-xl font-normal text-left text-white hover:bg-gray-100 focus:outline-none"
                          onClick={() =>
                            setOpenMobileAccordion(
                              openMobileAccordion === idx ? null : idx
                            )
                          }
                          aria-expanded={openMobileAccordion === idx}
                        >
                          <span>{link.title}</span>
                          <svg
                            className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                              openMobileAccordion === idx ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openMobileAccordion === idx && (
                          <div className="overflow-hidden">
                            {link.submenu.map((sublink) => (
                              <NavLink
                                key={sublink.path}
                                to={sublink.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenMobileAccordion(null);
                                }}
                                className={({ isActive }) =>
                                  `block pl-8 pr-4 py-2 rounded-md text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                                    isActive
                                      ? "bg-[#828282]/50 text-white"
                                      : "text-gray-700 hover:bg-gray-100 hover:text-red-700"
                                  }`
                                }
                              >
                                {sublink.title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      (() => {
                        const section = link.path.split("?")[1];
                        const isActive =
                          location.pathname === "/" && currentSection === section;
                        return (
                          <motion.div 
                            className="relative w-fit"
                            onMouseEnter={() => setHoveredLink(idx)}
                            onMouseLeave={() => setHoveredLink(null)}
                            // Tambahkan role="button" dan tabIndex untuk accessibility
                            role="button"
                            tabIndex={0}
                          >
                            <NavLink
                              to={link.path}
                              onClick={(e) => {
                                setIsOpen(false);
                                if (link.path.startsWith("/?")) {
                                  e.preventDefault();
                                  goToSection(section);
                                }
                              }}
                              className={() =>
                                "block px-4 py-3 rounded-md text-base font-medium text-left text-gray-400"
                              }
                              onMouseEnter={() => setHoveredLink(idx)}
                              onMouseLeave={() => setHoveredLink(null)}
                            >
                              {link.title}
                            </NavLink>
                            <AnimatePresence>
                              {(hoveredLink === idx) && (
                                <motion.span
                                  layoutId="mobile-underline"
                                  className="absolute left-0 bottom-0 h-[3px] bg-white rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  exit={{ width: 0 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 30,
                                  }}
                                  style={{ transformOrigin: "left" }}
                                />
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })()
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import profileImage from "../assets/profileImage.png";
import imgAboutUs from "../assets/image/img-aboutus.png";
import service01 from "../assets/image/service-01.png";
import service02 from "../assets/image/service-02.png";
import service03 from "../assets/image/service-03.png";
import service04 from "../assets/image/service-04.png";
import service05 from "../assets/image/service-05.png";
import logoRB from "../assets/logo-project/redbullcom-1 logo.svg";
import logoThe from "../assets/logo-project/The logo.svg";
import logoSalomon from "../assets/logo-project/Logo_Salomon logo.svg";
import logoGo from "../assets/logo-project/Go logo.svg";
import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  CaretLeftIcon,
  CaretRightIcon,
  FileTextIcon,
  FilmReelIcon,
  PlayIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";

// --- SUB-KOMPONEN UNTUK KERAPIAN ---

// 1. Hero Section (Banner Utama)
const HeroSection = () => {
  // const { t } = useTranslation(); // Jika Anda menggunakan i18n, biarkan ini
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Efek parallax background

  const handleGetInTouch = () => {
    // Logika untuk tombol "Get In Touch"
    console.log("Get In Touch clicked!");
    // Contoh: window.location.href = 'mailto:your@email.com';
  };

  const handleSeeMyWork = () => {
    // Logika untuk tombol "See My Work"
    console.log("See My Work clicked!");
    // Contoh: const nextSection = document.getElementById('portfolio');
    // if (nextSection) { nextSection.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#121212] px-2 sm:px-4 pb-20">
      {/* Main content container */}
      <motion.div
        className="relative z-20 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-10 lg:px-0 text-left"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {/* Profile Image */}
        <motion.div
          className="mb-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-white mx-0">
            <img
              src={profileImage}
              alt="Kevin Oliveri"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Headline Text */}
        <motion.div
          className="text-3xl/[60px] md:text-5xl/[80px] leading-10 mb-6 text-white"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Kevin Oliveri is a Creative Director & Cinematographer who{" "}
          <span className="font-semibold text-[#828282]">
            crafts high-energy visuals and cinematic stories that inspire.
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2 },
            },
          }}
        >
          <button
            onClick={handleGetInTouch}
            className="px-6 sm:px-8 py-3 rounded-lg bg-white text-black font-semibold text-lg md:text-xl hover:bg-gray-200 transition-colors"
          >
            Get In Touch
          </button>
          <button
            onClick={handleSeeMyWork}
            className="px-6 py-3 rounded-lg bg-[#282828] text-white font-semibold text-lg md:text-xl hover:bg-[#383838] transition-colors flex items-center justify-center"
          >
            See My Work <ArrowUpRightIcon size={22} className="ml-2" />
          </button>
        </motion.div>

        {/* Trusted by industry leaders */}
        <motion.p
          className="text-sm sm:text-base text-white mb-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.4 },
            },
          }}
        >
          Trusted by industry leaders
        </motion.p>

        {/* Logo Placeholders (Skeleton Boxes) */}
        {/* Logo slider: animate on mobile, static on md+ */}
        <motion.div
          className="relative overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            },
          }}
        >
          {/* Mobile: sliding row */}
          <div className="block md:hidden w-full h-16">
            <div
              className="flex items-center gap-x-6 animate-logo-slide"
              style={{ width: "max-content" }}
            >
              <div className="h-16 flex items-center justify-center">
                <img src={logoRB} alt="Logo 1" className="max-h-14 w-auto" />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img src={logoThe} alt="Logo 2" className="max-h-14 w-auto" />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src={logoSalomon}
                  alt="Logo 3"
                  className="max-h-14 w-auto"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img src={logoGo} alt="Logo 4" className="max-h-14 w-auto" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="h-16 flex items-center justify-center">
                <img src={logoRB} alt="Logo 1" className="max-h-14 w-auto" />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img src={logoThe} alt="Logo 2" className="max-h-14 w-auto" />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img
                  src={logoSalomon}
                  alt="Logo 3"
                  className="max-h-14 w-auto"
                />
              </div>
              <div className="h-16 flex items-center justify-center">
                <img src={logoGo} alt="Logo 4" className="max-h-14 w-auto" />
              </div>
            </div>
          </div>
          {/* md+: static row */}
          <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8">
            <div className="h-16 flex items-center justify-center">
              <img src={logoRB} alt="Logo 1" className="max-h-14 w-auto" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src={logoThe} alt="Logo 2" className="max-h-14 w-auto" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src={logoSalomon} alt="Logo 3" className="max-h-14 w-auto" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src={logoGo} alt="Logo 4" className="max-h-14 w-auto" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// 2. Why Choose Us Section
const WhyChooseUsSection = () => {
  return (
    // Menggunakan h-dvh jika Anda ingin section ini juga full-height,
    // tapi py-28 sudah OK untuk padding vertikal
    <section id="why-us" className="pt-10 pb-20 bg-[#121212]">
      <div className="container mx-auto px-10 lg:px-20">
        {/* Judul Section */}
        <div className="text-3xl md:text-5xl font-semibold mb-12 text-white">
          About <span className="text-[#828282]">Me</span>
        </div>

        {/* Box Konten About Me Sesuai Figma */}
        <div
          className="
                        bg-[#1A1A1A] 
                        border border-[#373333] 
                        rounded-xl 
                        p-8 md:p-12 
                        grid grid-cols-1 lg:grid-cols-3 gap-12 
                        shadow-[0_0_4px_4px_#67676740] 
                        relative
                    "
          style={{
            // Tambahan untuk menyesuaikan Shadow jika Tailwind tidak mendukung sintaks penuh
            boxShadow: "0 0 4px 4px #67676740",
          }}
        >
          {/* Kolom Kiri: Teks dan Statistik */}
          <div className="flex flex-col justify-between lg:col-span-2">
            <div className="w-full">
              {/* Intro */}
              <div className="text-xl md:text-2xl font-normal text-white">
                Welcome! I’m Kevin, a filmmaker passionate about turning
                adrenaline, adventure, and authentic moments into cinematic
                stories.
                <br />
                <br />
                <span className="text-[#828282]">
                  With over 8 years of experience in action sports and lifestyle
                  filmmaking, I’ve had the privilege of working with global
                  brands and athletes to capture their most powerful stories.
                </span>
                <br />
                <br />
                <span className="text-[#828282]">
                  From snow-capped mountains in Switzerland to tropical
                  coastlines worldwide, I thrive on the challenge of blending
                  technical precision with artistic storytelling to create
                  visuals that leave a lasting impact.
                </span>
              </div>
            </div>

            {/* Statistik (150+, 8+, 100%) */}
            <div className="flex justify-between flex-wrap gap-6 mt-8">
              {/* Item 1: Projects Filmed */}
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[40px] font-bold text-white">
                  150<span className="text-[#828282]">+</span>
                </span>
                <span className="text-xl md:text-2xl text-gray-400 mt-1">
                  Projects Filmed
                </span>
              </div>

              {/* Item 2: Years Experience */}
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[40px] font-bold text-white">
                  8<span className="text-[#828282]">+</span>
                </span>
                <span className="text-xl md:text-2xl text-gray-400 mt-1">
                  Years Experience
                </span>
              </div>

              {/* Item 3: Global Clients */}
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[40px] font-bold text-white">
                  100<span className="text-[#828282]">%</span>
                </span>
                <span className="text-xl md:text-2xl text-gray-400 mt-1">
                  Global Clients
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="order-first lg:order-last flex items-center lg:block lg:col-span-1">
            <div className="w-full h-80 md:h-96 lg:h-full overflow-hidden rounded-lg">
              {/* Placeholder/Actual Image */}
              <img
                src={imgAboutUs}
                alt="Kevin Oliveri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. About Us Snippet Section
const AboutSnippetSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Lacak scroll dari awal elemen terlihat hingga akhir elemen hilang
  });
  // Membuat gambar bergerak ke atas (-100px) saat section di-scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [openIndex, setOpenIndex] = useState(null);
  const services = [
    {
      title: "Branded Content",
      description:
        "Creating marketing films directly linked to a brand, allowing consumers to make an authentic connection.",
      tags: ["Creative Direction", "Storytelling"],
      image: service01,
    },
    {
      title: "Brand Films",
      description:
        "Stories showcasing services, identity, and values of a brand in cinematic style.",
      tags: ["Cinematography", "Editing", "Color Grading"],
      image: service02,
    },
    {
      title: "Recap Films",
      description:
        "Energetic highlight reels that capture the essence and atmosphere of events.",
      tags: ["Drone Filmmaking", "Fast-Paced Editing", "Sound Design"],
      image: service03,
    },
    {
      title: "Short Documentaries",
      description:
        "Character-driven storytelling centered around a theme or message with cinematic visuals.",
      tags: ["Research & Concept Development", "Narrative Storytelling"],
      image: service04,
    },
    {
      title: "Photography",
      description:
        "Creating marketing films directly linked to a brand, allowing consumers to make an authentic connection.",
      tags: ["Lighting & Composition", "Action & Lifestyle Photography"],
      image: service05,
    },
  ];

  return (
    <section ref={ref} className="pt-10 pb-20 bg-[#121212]">
      <div className="container mx-auto px-10 md:px-8 lg:px-20">
        {/* Judul Section */}
        <div className="text-3xl md:text-5xl font-semibold mb-12 text-white">
          Services <span className="text-[#828282]">| Offer</span>
        </div>
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              {/* Accordion Header */}
              <motion.div
                onClick={() => setOpenIndex(isOpen ? null : index)}
                initial={false}
                animate={
                  isOpen
                    ? {
                        backgroundColor: "#1A1A1A",
                        borderRadius: "0.75rem 0.75rem 0rem 0rem",
                      }
                    : { backgroundColor: "rgba(0,0,0,0)", borderRadius: "0rem" }
                }
                transition={{ duration: 0.3, type: "tween" }}
              >
                {isOpen && (
                  <div className="p-3 w-full lg:hidden">
                    <motion.img
                      src={service.image}
                      className="w-full"
                      alt=""
                      initial={false}
                      animate={
                        isOpen
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.95 }
                      }
                      transition={{ duration: 0.4, delay: isOpen ? 0.15 : 0 }}
                    />
                  </div>
                )}
                <div
                  className={`grid grid-cols-4 items-center cursor-pointer transition-all p-3 lg:p-6 ${
                    isOpen ? "hidden" : "mb-0"
                  }`}
                >
                  <div className="col-span-3 flex items-center gap-4 lg:gap-6">
                    <motion.div
                      className="bg-[#292929] px-4 py-2 item-center rounded-xl w-fit text-white font-normal text-lg"
                      layout
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>
                    <motion.div
                      className="text-white text-xl font-medium lg:text-[32px]"
                      layout
                    >
                      {service.title}
                    </motion.div>
                  </div>
                  {/* Arrow for mobile: always show */}
                  <motion.span
                    className="flex lg:hidden mr-4 items-center"
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ArrowUpIcon
                      size={32}
                      className="transition-transform duration-300 text-white"
                    />
                  </motion.span>
                  {/* Arrow for desktop: only when closed */}
                  {!isOpen && (
                    <motion.span
                      className="hidden lg:flex mr-6 items-center justify-content-end"
                      animate={{ rotate: isOpen ? 0 : 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ArrowUpIcon
                        size={40}
                        className="transition-transform duration-300 text-white"
                      />
                    </motion.span>
                  )}
                </div>
              </motion.div>
              {/* Accordion Content */}
              <motion.div
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`overflow-hidden ${
                  isOpen ? "cursor-pointer pb-3 lg:pb-6" : ""
                } bg-[#1A1A1A] rounded-b-xl lg:rounded-lg px-3 lg:px-6 pt-0 mb-6`}
                initial={false}
                animate={
                  isOpen
                    ? { maxHeight: 1000, opacity: 1 }
                    : { maxHeight: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, type: "tween" }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
              >
                <motion.div
                  className="grid grid-cols-3"
                  initial={false}
                  animate={
                    isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: isOpen ? 0.1 : 0 }}
                >
                  <div className="col-span-3 lg:col-span-2">
                    <div className="grid grid-cols-3 items-center py-3 lg:py-6 gap-4 lg:gap-6">
                      <div className="col-span-2 flex gap-4 items-center">
                        <motion.div
                          className="bg-[#292929] px-4 py-2 item-center rounded-xl w-fit text-white font-normal text-lg"
                          layout
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.div>
                        <motion.div
                          className="text-white text-xl font-medium lg:text-[32px]"
                          layout
                        >
                          {service.title}
                        </motion.div>
                      </div>
                      <div className="flex justify-end lg:hidden">
                        <motion.span
                          initial={{ opacity: 0, x: 20, rotate: 0 }}
                          animate={{ opacity: 1, x: 0, rotate: 180 }}
                          exit={{ opacity: 0, x: 20, rotate: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <ArrowUpIcon
                              size={40}
                              className="transition-transform duration-300 text-white"
                            />
                          </motion.span>
                        </motion.span>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="text-xl lg:text-2xl text-[#828282] text-normal">
                        {service.description}
                      </div>
                    </div>
                    <div className="mt-6 text-center flex flex-wrap gap-3 overflow-x-auto whitespace-nowrap md:grid md:grid-cols-2 md:whitespace-normal md:overflow-visible lg:flex lg:flex-wrap lg:gap-3 lg:grid-cols-none">
                      {service.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          className="rounded-3xl bg-[#2F2F2F] px-3 py-[10px] text-white text-sm lg:text-base font-normal"
                          initial={false}
                          animate={
                            isOpen
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 20 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: isOpen ? 0.2 + tagIndex * 0.05 : 0,
                          }}
                        >
                          {tag}
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      className="w-full lg:w-fit mt-12 px-6 sm:px-8 py-3 rounded-lg bg-white text-black font-semibold text-lg md:text-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
                      initial={false}
                      animate={
                        isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0 }}
                    >
                      Get Started
                      <ArrowUpRightIcon size={22} className="ml-2" />
                    </motion.button>
                  </div>
                  <div className="hidden lg:flex items-center text-white">
                    <motion.img
                      src={service.image}
                      alt=""
                      initial={false}
                      animate={
                        isOpen
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.95 }
                      }
                      transition={{ duration: 0.4, delay: isOpen ? 0.15 : 0 }}
                    />
                    {isOpen && (
                      <motion.span
                        className="left-full ml-10 flex items-center"
                        initial={{ opacity: 0, x: 20, rotate: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: 180 }}
                        exit={{ opacity: 0, x: 20, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ArrowUpIcon
                            size={40}
                            className="transition-transform duration-300 text-white"
                          />
                        </motion.span>
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
              {/* Divider except last */}
              {index !== services.length - 1 && (
                <hr className="border-[#292929] mb-6" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Modal dialog for video preview
const VideoModal = ({ open, onClose, iframeHtml }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative bg-[#181818] rounded-xl shadow-lg p-4 max-w-full w-[90vw] md:w-[700px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-[#282828] hover:bg-[#383838] rounded-full p-2 z-10"
          aria-label="Close"
        >
          ×
        </button>
        <div className="w-full aspect-video flex items-center justify-center">
          <div
            className="w-full h-full flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: iframeHtml }}
          />
        </div>
      </div>
    </div>
  );
};

// Komponen Card Proyek Reusable
const ProjectCard = ({ project, onWatch }) => {
  // Render iframe HTML if project.link is an iframe string
  const isIframe = typeof project.link === 'string' && project.link.trim().startsWith('<iframe');
  // Responsive iframe width for mobile
  const getResponsiveIframe = (iframeHtml) => {
    if (!iframeHtml) return null;
    // Default width for desktop
    let width = 350;
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      if (w <= 340) width = 230;
      else if (w <= 480) width = 375;
      else if (w <= 640) width = 425;
    }
    // Replace width attribute in iframe
    return iframeHtml.replace(/width=["']\d+["']/, `width="${width}"`);
  };
  return (
    <div className="block text-white group hover:bg-[#1A1A1A] transition-colors rounded-lg">
      <div className="relative overflow-hidden mb-4">
        {/* Preview Proyek menggunakan YouTube iframe jika ada */}
        {isIframe ? (
          <div
            className="w-full flex justify-center"
            dangerouslySetInnerHTML={{ __html: getResponsiveIframe(project.link) }}
          />
        ) : (
          <div className="w-full aspect-[4/3] bg-gray-800 flex items-center justify-center text-white">
            No Preview
          </div>
        )}
        {/* Watch Project Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={onWatch}
            className="flex items-center bg-white text-black px-4 py-2 rounded-full font-semibold transition-transform duration-300 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {/* Ikon Play dari Phosphor Icons */}
            <PlayIcon size={18} weight="fill" className="mr-2" />
            Watch Project
          </button>
        </div>
      </div>
      {/* Detail Proyek */}
      <div className="p-4">
        <div className="text-2xl font-semibold mb-6">{project.title}</div>
        <div className="flex items-center bg-[#2F2F2F] w-fit px-[20px] py-[10px] rounded-full text-base text-white">
          {project.category.icon && (
            <span className="mr-2">{project.category.icon && <project.category.icon size={24} />}</span>
          )}
          {project.category.name}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // navigated/selected index
  const [hoverIndex, setHoverIndex] = useState(null); // hovered index
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIframe, setModalIframe] = useState('');

  // Data Proyek dengan iframe YouTube
  const projects = [
    {
      title: "Red Bull",
      link: '<iframe width="350" height="315" src="https://www.youtube.com/embed/ktEvYj_nB00?si=9G2u9xSkMlw-IRJ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { name: "Short Documentary", icon: FileTextIcon },
    },
    {
      title: "Solomon",
      link: '<iframe width="350" height="315" src="https://www.youtube.com/embed/Z-iRGv_w0OM?si=s3iC86wR2vBDhlsP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { name: "Videography", icon: VideoCameraIcon },
    },
    {
      title: "GoPro",
      link: '<iframe width="350" height="315" src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { name: "Recap Films", icon: FilmReelIcon },
    },
    {
      title: "THE",
      link: '<iframe width="350" height="315" src="https://www.youtube.com/embed/ktEvYj_nB00?si=9G2u9xSkMlw-IRJ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { name: "Short Documentary", icon: FileTextIcon },
    },
    {
      title: "Red Bull",
      link: '<iframe width="350" height="315" src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { name: "Videography", icon: VideoCameraIcon },
    },
  ];

  let totalProjects = projects.length;
  // Navigation
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setHoverIndex(null);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setHoverIndex(null);
  };

  // Handler for opening modal with autoplay and wider iframe
  const handleWatch = (iframeHtml) => {
    // Extract src from iframe string
    let newIframeHtml = iframeHtml;
    const srcMatch = iframeHtml.match(/src=["']([^"']+)["']/);
    if (srcMatch) {
      let src = srcMatch[1];
      // Add or update autoplay=1 in the src
      if (!src.includes('autoplay=1')) {
        src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
      }
      // Replace the src in the iframe string
      newIframeHtml = iframeHtml.replace(/src=["'][^"']+["']/, `src="${src}"`);
    }
    // Set width to 520 for modal
    newIframeHtml = newIframeHtml.replace(/width=["']\d+["']/, 'width="520"');
    setModalIframe(newIframeHtml);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalIframe('');
  };

  // --- Responsive logic for visible cards ---
  // Below md: 1 card, md: 2 cards, lg: 3 cards
  const [cardsToShow, setCardsToShow] = useState(3);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) setCardsToShow(1); // <md
      else if (window.innerWidth < 1024) setCardsToShow(2); // md
      else setCardsToShow(3); // lg+
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  let start = Math.max(0, currentIndex - Math.floor(cardsToShow / 2));
  let end = start + cardsToShow;
  if (end > totalProjects) {
    end = totalProjects;
    start = Math.max(0, end - cardsToShow);
  }
  const visibleProjects = projects.slice(start, end);

  // Only allow hover on visible cards
  const handleCardMouseEnter = (realIdx) => {
    if (realIdx >= start && realIdx < end) {
      setHoverIndex(realIdx);
    }
  };
  const handleCardMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <section id="projects" className="pt-10 pb-20 bg-[#121212]">
      <VideoModal open={modalOpen} onClose={handleCloseModal} iframeHtml={modalIframe} />
      <div className="container mx-auto px-4 sm:px-10 lg:px-20">
        {/* HEADER ROW */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-10 md:mb-12">
          <div className="text-3xl md:text-5xl font-semibold text-white">
            Featured <span className="text-[#828282]">Project</span>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 rounded-lg bg-white text-black font-semibold text-sm md:text-base hover:bg-gray-200 transition-colors">
            See All Project
          </button>
        </div>

        {/* --- RESPONSIVE CAROUSEL --- */}
        <div className="flex items-center justify-center mb-10 relative" style={{ minHeight: 420 }}>
          <div className="flex w-full justify-center overflow-hidden" style={{ maxWidth: '100%' }}>
            {visibleProjects.map((project, idx) => {
              const realIdx = start + idx;
              const isActive = hoverIndex === realIdx || (hoverIndex === null && realIdx === currentIndex);
              return (
                <div
                  key={realIdx}
                  className={`transition-all duration-300 mx-2 ${
                    isActive
                      ? 'z-20 scale-100 opacity-100 shadow-2xl bg-[#1A1A1A]'
                      : 'z-10 scale-90 opacity-60 cursor-pointer'
                  }`}
                  style={{ width: 370, minWidth: 0 }}
                  onMouseEnter={() => handleCardMouseEnter(realIdx)}
                  onMouseLeave={handleCardMouseLeave}
                  onClick={() => setCurrentIndex(realIdx)}
                >
                  <ProjectCard project={project} onWatch={() => handleWatch(project.link)} />
                </div>
              );
            })}
          </div>
        </div>

        {/* NAVIGATION / PAGINATION */}
        <div className="flex justify-between items-center mt-6 lg:mt-0">
          {/* Left & Right Arrows */}
          <div className="flex space-x-4">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-[#282828] text-white hover:bg-[#383838] transition-colors"
            >
              {/* Ikon CaretLeft dari Phosphor Icons */}
              <CaretLeftIcon size={24} weight="bold" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-[#282828] text-white hover:bg-[#383838] transition-colors"
            >
              {/* Ikon CaretRight dari Phosphor Icons */}
              <CaretRightIcon size={24} weight="bold" />
            </button>
          </div>

          {/* Pagination Count */}
          <div className="text-white text-lg">
            {`${String((hoverIndex !== null && hoverIndex >= start && hoverIndex < end ? hoverIndex : currentIndex) + 1)}/${totalProjects}`}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- KOMPONEN UTAMA HOMEPAGE ---
export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Kevin Portfolio</title>
      </Helmet>

      <HeroSection />
      <WhyChooseUsSection />
      <AboutSnippetSection />
      <ProjectSection />
    </>
  );
}

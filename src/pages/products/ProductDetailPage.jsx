import React from "react";
import { CaretLeftIcon } from "@phosphor-icons/react";

// --- DATA DUMMY PROYEK UNTUK DEMO ---
const projectData = {
  title: "Project: State of Elevenate",
  client: "State of Elevenate",
  year: 2025,
  services: "Brand Films",
  mainVideoIframe:
    '<iframe width="100%" height="520" src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-restricted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  overview:
    "This project was a lifestyle and brand videography campaign for State of Elevenate, an outdoor clothing company specializing in ski and mountain apparel. The goal was to capture the brand's adventurous spirit, premium design, and functional performance in extreme alpine conditions.",
  responsibilities: [
    "Conceive, write, and storyboard the visual narrative for the campaign.",
    "Plan and execute a video shoot in snowy mountain terrain.",
    "Direct models to showcase wear resistance and technical aspects of the product in use.",
    "Align visuals with the brand’s identity: elevated, adventurous, stylish, and functional.",
  ],
  process: {
    preProduction: [
      "Developed a shot list including drone panoramas, action sequences, and lifestyle portraits.",
      "Coordinated with talent, (skiers, models) and ensured proper safety equipment checks.",
    ],
    production: [
      "Shot on location in three mountains, using both handheld and drone setups.",
      "Captured natural lighting to emphasize the authentic alpine atmosphere.",
      "Filmed slow-motion action sequences highlighting performance wear in motion.",
    ],
    postProduction: [
      "Edited footage into a dynamic short film.",
      "Applied cinematic color grading to match brand tones (cold blues, sharp whites, natural contrasts).",
      "Integrated logo and brand message for final delivery.",
    ],
  },
  outcomes: [
    "Produced a 2-minute promotional film and several short social media clips.",
    "Delivered content that showcased the brand's premium feel and adventurous essence.",
    "Boosted engagement on social platforms, with the video receiving strong feedback from both the client and their community.",
  ],
};

import { FileTextIcon, FilmReelIcon, VideoCameraIcon } from "@phosphor-icons/react";

const anotherProjects = [
  {
    title: "Red Bull",
    link: "https://www.youtube.com/embed/ktEvYj_nB00?si=9G2u9xSkMlw-IRJ1",
    category: { id: 6, name: "Short Documentary", icon: FileTextIcon },
    imagePlaceholder: "https://via.placeholder.com/600x400/2F2F2F/FFFFFF?text=Red+Bull",
  },
  {
    title: "Solomon",
    link: "https://www.youtube.com/embed/Z-iRGv_w0OM?si=s3iC86wR2vBDhlsP",
    category: { id: 2, name: "Branded Content", icon: VideoCameraIcon },
    imagePlaceholder: "https://via.placeholder.com/600x400/2F2F2F/FFFFFF?text=Solomon",
  },
  {
    title: "GoPro",
    link: "https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04",
    category: { id: 5, name: "Recap Films", icon: FilmReelIcon },
    imagePlaceholder: "https://via.placeholder.com/600x400/2F2F2F/FFFFFF?text=GoPro",
  },
];

// --- FUNGSI RESPONSIF UTAMA ---
export default function ProductDetailPage() {
  // Komponen untuk men-render iFrame YouTube secara responsif
  // Sederhana: iframe responsive dengan aspect ratio 16:9
  const ResponsiveIframe = ({ src }) => (
    <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden bg-black shadow-2xl">
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );

  // Komponen Kartu Proyek Lain
  const AnotherProjectCard = ({ project }) => (
    <a href="#" className="block group text-white">
      <div className="relative overflow-hidden rounded-xl mb-3 aspect-video">
        <ResponsiveIframe src={project.link} />
      </div>
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <div className="flex items-center bg-[#282828] w-fit px-3 py-1 rounded-full text-xs text-gray-400 mt-1">
        {project.category.icon && <project.category.icon size={16} className="mr-2" />}
        {project.category.name}
      </div>
    </a>
  );


  // Clean metadata component
  const ProjectMeta = ({ client, year, services }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 border-b border-[#282828] pb-6">
      <MetaItem label="Client" value={client} />
      <MetaItem label="Year" value={year} />
      <MetaItem label="Services" value={services} />
    </div>
  );

  const textStyleMd = "text-xl lg:text-2xl";

  const MetaItem = ({ label, value }) => (
    <div>
      <p className="text-white text-2xl tracking-widest mb-6">{label}</p>
      <p className={`${textStyleMd} text-[#9E9E9E]`}>{value}</p>
    </div>
  );

  return (
    <div className="bg-[#121212] text-white pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-10 lg:px-20">
        {/* --- HEADER DAN JUDUL --- */}
        <div className="flex items-center mb-12 md:mb-16">
          <button
            onClick={() => window.history.back()}
            className="mr-4 p-2 rounded-full bg-[#282828] hover:bg-[#383838] transition-colors"
          >
            <CaretLeftIcon size={24} className="text-white" />
          </button>
          <h1 className="text-3xl md:text-5xl font-semibold">
            {projectData.title}
          </h1>
        </div>

        {/* --- METADATA PROYEK (Client, Year, Services) --- */}
        <ProjectMeta client={projectData.client} year={projectData.year} services={projectData.services} />

        <div className="mb-12">
          <h2 className="text-xl lg:text-3xl font-semibold mb-6">
            Project Overview
          </h2>
          <p className={`${textStyleMd} text-[#9E9E9E]`}>{projectData.overview}</p>
        </div>

        {/* --- VIDEO UTAMA / MEDIA --- */}
        <div className="mb-12">
          <ResponsiveIframe src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" />
        </div>
        
        <div className="space-y-12">
          {/* 1. Responsibilities & Scope */}
          <div>
            <h3 className="text-xl lg:text-3xl font-semibold mb-6">
              Responsibilities & Scope
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-sm lg:text-lg text-[#C9C9C9]">
              {projectData.responsibilities.map((item, index) => (
                <li key={index} className={textStyleMd}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Process & Execution */}
          <div>
            <h3 className="text-xl lg:text-3xl font-semibold mb-6">
              Process & Execution
            </h3>

            {/* Sub-section: Pre-Production */}
            <p className="font-semibold mt-4 mb-2 text-base lg:text-xl">
              1. Pre-Production
            </p>
            <ul className="list-disc ml-5 space-y-2 text-sm lg:text-lg text-[#9E9E9E]">
              {projectData.process.preProduction.map((item, index) => (
                <li key={index} className={textStyleMd}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Sub-section: Production */}
            <p className="font-semibold mt-4 mb-2 text-base lg:text-xl">
              2. Production
            </p>
            <ul className="list-disc ml-5 space-y-2 text-sm lg:text-lg text-[#9E9E9E]">
              {projectData.process.production.map((item, index) => (
                <li key={index} className={textStyleMd}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Sub-section: Post-Production */}
            <p className="font-semibold mt-4 mb-2 text-base lg:text-xl">
              3. Post & Delivery
            </p>
            <ul className="list-disc ml-5 space-y-2 text-sm lg:text-lg text-[#9E9E9E]">
              {projectData.process.postProduction.map((item, index) => (
                <li key={index} className={textStyleMd}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Outcomes & Impact */}
          <div>
            <h3 className="text-xl lg:text-3xl font-semibold mb-6">
              Outcomes & Impact
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-sm lg:text-lg text-[#9E9E9E]">
              {projectData.outcomes.map((item, index) => (
                <li key={index} className={textStyleMd}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- ANOTHER PROJECT SECTION --- */}
        <div className="mt-20 pt-10 border-t border-[#282828]">
          <div className="text-3xl md:text-5xl font-semibold mb-8 text-white">
            Another <span className="text-[#828282]">Projects</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {anotherProjects.map((project, index) => (
              <AnotherProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

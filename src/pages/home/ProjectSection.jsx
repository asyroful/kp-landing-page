import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeftIcon, CaretRightIcon, PlayIcon, FileTextIcon, VideoCameraIcon, FilmReelIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

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
    let width = 720;
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      if (w <= 340) width = 230;
      else if (w <= 480) width = 375;
      else if (w <= 640) width = 720;
    }
    // Replace width attribute in iframe
    return iframeHtml.replace(/width=["']\d+["']/, `width="${width}"`);
  };
  return (
    <div className="block text-white group hover:bg-[#1A1A1A] transition-colors hover:rounded-lg">
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
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // navigated/selected index
  const [hoverIndex, setHoverIndex] = useState(null); // hovered index
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIframe, setModalIframe] = useState('');
  const [direction, setDirection] = useState(0); // 1: next, -1: prev

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

  let totalProjects = projects.length;
  // Navigation
  const goToPrev = () => {
    setCurrentIndex((prev) => {
      // If at first, next is last, direction left
      if (prev === 0) setDirection(-1);
      else setDirection(-1);
      return (prev - 1 + totalProjects) % totalProjects;
    });
    setHoverIndex(null);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => {
      // If at last, next is first, direction right
      if (prev === totalProjects - 1) setDirection(1);
      else setDirection(1);
      return (prev + 1) % totalProjects;
    });
    setHoverIndex(null);
  };

  // --- Responsive logic for visible cards ---
  // Below md: 1 card, md: 2 cards, lg: 3 cards
  const [cardsToShow, setCardsToShow] = useState(3);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3); // Tablet
      } else {
        setCardsToShow(4); // Desktop
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // --- Carousel wrap-around logic: center currentIndex, wrap left/right ---
  const getVisibleProjects = () => {
    if (totalProjects === 0) return [];
    let result = [];
    for (let i = 0; i < cardsToShow; i++) {
      // Calculate the index for each visible card, wrapping around
      let idx = (currentIndex - Math.floor(cardsToShow / 2) + i + totalProjects) % totalProjects;
      result.push(projects[idx]);
    }
    return result;
  };
  const visibleProjects = getVisibleProjects();

  // Only allow hover on visible cards
  const handleCardMouseEnter = (realIdx) => {
    setHoverIndex(realIdx);
  };
  const handleCardMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <section id="projects" className="pt-10 pb-20 bg-[#07090D] scroll-mt-24">
      <VideoModal open={modalOpen} onClose={handleCloseModal} iframeHtml={modalIframe} />
      <div className="container mx-auto px-4 lg:px-0 max-w-[1126px]">
        {/* HEADER ROW */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-10 md:mb-12">
          <div className="text-2xl md:text-4xl font-semibold text-white">
            Featured <span className="text-[#828282]">Project</span>
          </div>
          <button onClick={() => navigate('/project')} className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 rounded-lg bg-white text-black font-semibold text-sm md:text-base hover:bg-gray-200 transition-colors">
            See All Project
          </button>
        </div>
      </div>

      {/* --- RESPONSIVE CAROUSEL FULL WIDTH --- */}
      <div className="w-full flex items-center justify-center mb-10 relative" style={{ minHeight: 420 }}>
        {/* Touch swipe logic for carousel */}
        <div
          className="flex w-full gap-4 overflow-x-hidden px-4 md:px-0"
          style={{ maxWidth: '100%' }}
          onTouchStart={(e) => {
            if (e.touches.length === 1) {
              window._carouselTouchStartX = e.touches[0].clientX;
            }
          }}
          onTouchEnd={(e) => {
            if (typeof window._carouselTouchStartX !== 'number') return;
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - window._carouselTouchStartX;
            // Threshold for swipe
            if (Math.abs(deltaX) > 50) {
              if (deltaX < 0) {
                goToNext();
              } else {
                goToPrev();
              }
            }
            window._carouselTouchStartX = undefined;
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleProjects.map((project, idx) => {
              // Calculate the real index in the projects array for each visible card
              const realIdx = (currentIndex - Math.floor(cardsToShow / 2) + idx + totalProjects) % totalProjects;
              const isActive = hoverIndex === realIdx || (hoverIndex === null && realIdx === currentIndex);
              // Card width and peek effect
              let cardClass = 'transition-all duration-300 min-w-0';
              let style = {};
              if (cardsToShow === 1) {
                // Mobile: 1 card, full width
                cardClass += ' flex-1';
                style = { width: '100%', minWidth: 0 };
              } else if (idx === 0 || idx === visibleProjects.length - 1) {
                // Tablet/Desktop: first and last card: show as partial (peek)
                cardClass += ' flex-[0.5_1_0%] scale-90 opacity-60 pointer-events-none';
                style = idx === 0
                  ? { marginLeft: '-6%', zIndex: 5 }
                  : { marginRight: '-6%', zIndex: 5 };
              } else {
                // Center cards: full
                cardClass += ' flex-1';
                cardClass += isActive
                  ? ' z-20 scale-100 opacity-100 shadow-2xl bg-[#1A1A1A]'
                  : ' z-10 scale-95 opacity-80 cursor-pointer';
              }
              return (
                <div
                  key={realIdx}
                  className={cardClass}
                  onMouseEnter={() => handleCardMouseEnter(realIdx)}
                  onMouseLeave={handleCardMouseLeave}
                  onClick={() => setCurrentIndex(realIdx)}
                  style={style}
                >
                  <ProjectCard project={project} onWatch={() => handleWatch(project.link)} />
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* NAVIGATION / PAGINATION */}
      <div className="flex justify-center items-center mt-6 lg:mt-0">
        {/* Left & Right Arrows */}
        <div className="flex space-x-4">
          <button
            onClick={goToPrev}
            className="p-3 hover:rounded-xl text-white hover:bg-[#1A1A1A] transition-colors"
          >
            {/* Ikon CaretLeft dari Phosphor Icons */}
            <CaretLeftIcon size={24} weight="bold" />
          </button>
          <button
            onClick={goToNext}
            className="p-3 hover:rounded-xl text-white hover:bg-[#1A1A1A] transition-colors"
          >
            {/* Ikon CaretRight dari Phosphor Icons */}
            <CaretRightIcon size={24} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

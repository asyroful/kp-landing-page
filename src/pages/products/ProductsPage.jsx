import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FileTextIcon, FilmReelIcon, VideoCameraIcon } from "@phosphor-icons/react";

// Asumsi Anda menggunakan Phosphor Icons
// Simple ProjectCard for ProductsPage
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow hover:bg-[#1A1A1A] transition-colors cursor-pointer text-white"
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <div className="relative w-full aspect-video flex items-center justify-center">
        {/* Preview Proyek menggunakan YouTube iframe jika ada */}
        {typeof project.link === 'string' && project.link.trim().startsWith('<iframe') ? (
          <div className="w-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: project.link }} />
        ) : (
          <div className="text-white">No Preview</div>
        )}
      </div>
      <div className="m-4">
        <div className="text-lg font-semibold mb-6">{project.title}</div>
        <div className="flex items-center gap-2 text-sm text-[#bdbdbd]">
          {project.category.icon && <project.category.icon size={18} />}
          {project.category.name}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // State untuk mengontrol tampilan dropdown mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State kategori aktif
  const [activeCategoryName, setActiveCategoryName] = useState("All Project");

  const categories = [
    { name: "All Project", id: 1 },
    { name: "Branded Content", id: 2 },
    { name: "Brand Films", id: 3 },
    { name: "Photography", id: 4 },
    { name: "Recap Films", id: 5 },
    { name: "Short Documentary", id: 6 },
  ];
  // State kategori aktif
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  // State untuk show all project di mobile
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Handler untuk navigasi/filter
  const handleCategoryClick = (categoryId) => {
    const selected = categories.find((cat) => cat.id === categoryId);
    if (selected) {
      setActiveCategoryId(categoryId);
      setActiveCategoryName(selected.name);
    }
    setIsMobileMenuOpen(false);
    setShowAllMobile(false); // Reset show all when category changes
  };

  const projects = [
    {
      title: "Red Bull",
      link: '<iframe width="520" height="315" src="https://www.youtube.com/embed/ktEvYj_nB00?si=9G2u9xSkMlw-IRJ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { id: 6, name: "Short Documentary", icon: FileTextIcon },
    },
    {
      title: "Solomon",
      link: '<iframe width="520" height="315" src="https://www.youtube.com/embed/Z-iRGv_w0OM?si=s3iC86wR2vBDhlsP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { id: 2, name: "Branded Content", icon: VideoCameraIcon },
    },
    {
      title: "GoPro",
      link: '<iframe width="520" height="315" src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { id: 5, name: "Recap Films", icon: FilmReelIcon },
    },
    {
      title: "THE",
      link: '<iframe width="520" height="315" src="https://www.youtube.com/embed/ktEvYj_nB00?si=9G2u9xSkMlw-IRJ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { id: 6, name: "Short Documentary", icon: FileTextIcon },
    },
    {
      title: "Red Bull",
      link: '<iframe width="520" height="315" src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { id: 3, name: "Brand Films", icon: VideoCameraIcon },
    },
    {
      title: "GoPro",
      link: '<iframe width="520" height="315" src="https://www.youtube.com/embed/PM0RsJKs6Wg?si=JJUL9XFKc05JrI04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      category: { id: 5, name: "Recap Films", icon: FilmReelIcon },
    }
  ];

  return (
    <motion.section
      id="completed-projects"
      className="py-20 bg-[#121212]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-20">
        {/* Judul Section */}
        <div className="text-3xl md:text-5xl font-semibold mb-8 text-white">
          Completed <span className="text-[#828282]">Projects</span>
        </div>

        {/* --- 1. DESKTOP FILTER BAR (lg:flex) --- */}
        <div
          className="hidden lg:flex p-1 bg-black rounded-full w-fit mb-12"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
        >
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                type="button"
                className={`
                  text-base px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap pointer-events-auto
                  ${isActive
                    ? "bg-[#2F2F2F] text-white shadow-inner"
                    : "text-[#7E7E7E] hover:text-white hover:bg-[#2F2F2F] focus:bg-[#2F2F2F] focus:text-white"}
                `}
                style={{ zIndex: 10 }}
                tabIndex={0}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* --- 2. MOBILE FILTER (Dropdown/Sidebar) --- */}
        <div className="grid grid-cols-1 gap-1 lg:hidden mb-10 bg-black p-1 rounded-[32px]">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`
                  flex justify-between items-center px-6 py-4 cursor-pointer 
                  text-base transition-colors duration-200 select-none rounded-[999px]
                  pointer-events-auto
                  ${isActive
                    ? "bg-[#2F2F2F] text-white shadow-inner"
                    : "text-[#7E7E7E] hover:text-white hover:bg-[#2F2F2F] focus:bg-[#2F2F2F] focus:text-white"}
                `}
                style={{ zIndex: 10 }}
                tabIndex={0}
                role="button"
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') handleCategoryClick(cat.id);
                }}
              >
                {cat.name}
              </div>
            );
          })}
        </div>

        {/* --- PROJECT GRID AKAN DITEMPATKAN DI SINI --- */}
        {/* Gantilah ini dengan komponen grid proyek Anda */}
        <div className="min-h-[400px] rounded-xl p-6">
          {/* Mobile: show 2 cards, then button to show all */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(() => {
              const filtered = projects.filter(p => activeCategoryId === 1 || p.category.id === activeCategoryId);
              // Check if mobile view
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
              if (isMobile) {
                if (showAllMobile) {
                  return filtered.map((project, idx) => (
                    <ProjectCard
                      key={idx}
                      project={project}
                      onClick={() => navigate(`/project/${slugify(project.title)}`)}
                    />
                  ));
                }
                // Only show 2 cards on mobile
                return filtered.slice(0, 2).map((project, idx) => (
                  <ProjectCard
                    key={idx}
                    project={project}
                    onClick={() => navigate(`/project/${slugify(project.title)}`)}
                  />
                ));
              }
              // Desktop: show all filtered
              return filtered.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  project={project}
                  onClick={() => navigate(`/project/${slugify(project.title)}`)}
                />
              ));
            })()}
          </div>
          {/* Button only on mobile and if more than 2 cards and not showing all */}
          <div className="mt-8 flex lg:hidden">
            {(() => {
              const filtered = projects.filter(p => activeCategoryId === 1 || p.category.id === activeCategoryId);
              if (!showAllMobile && filtered.length > 2) {
                return (
                  <button
                    className="w-full border border-white outline outline-1 outline-white rounded-lg py-3 text-white font-semibold text-base hover:bg-[#232323] transition-colors"
                    onClick={() => setShowAllMobile(true)}
                  >
                    See All Project
                  </button>
                );
              }
              return null;
            })()}
          </div>
        </div>
      </div>
  </motion.section>
  );
}

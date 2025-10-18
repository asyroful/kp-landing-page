import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react";

// Asumsikan path dan nama file gambar sudah benar
import service01 from "../../assets/image/service-01.png";
import service02 from "../../assets/image/service-02.png";
import service03 from "../../assets/image/service-03.png";
import service04 from "../../assets/image/service-04.png";
import service05 from "../../assets/image/service-05.png";

// Data Layanan
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

// --- Komponen Item Layanan (Accordion) ---

const ServiceItem = ({ service, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const itemRef = useRef(null);

  // Efek Parallax/Scroll untuk gambar saat terbuka (hanya pada layar besar)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"], // Efek dari saat item masuk hingga keluar dari viewport
  });

  // Efek geser minor (sedikit bergerak saat scroll)
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const toggleOpen = () => {
    setOpenIndex(isOpen ? null : index);
  };

  const number = String(index + 1).padStart(2, "0");

  return (
    // Container utama setiap item
    <motion.div
      ref={itemRef}
      className="border-b border-[#292929] transition-colors duration-300"
      layout
    >
      {/* Container untuk Desktop/Tablet (Layar Besar) - Tampilan Card Terbuka */}
      {isOpen && (
        <motion.div
          key="desktop-expanded"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="hidden lg:block bg-[#1A1A1A] p-6 rounded-xl shadow-2xl mb-6"
          layout
        >
          <div className="flex justify-between items-center gap-10">
            {/* Konten Kiri (Deskripsi dan Tags) */}
            <div className="flex-1">
              <div className="flex items-center gap-6 mb-4">
                <div className="bg-[#292929] px-4 py-2 rounded-xl text-white font-normal text-lg">
                  {number}
                </div>
                <h3 className="text-white text-2xl font-medium">
                  {service.title}
                </h3>
              </div>
              <p className="text-lg text-[#828282] mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="rounded-3xl bg-[#2F2F2F] px-4 py-[10px] text-white text-base font-normal"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Konten Kanan (Gambar) */}
            <div className="flex items-center gap-12 mr-4">
              <motion.div
                className="w-full max-w-[200px] relative overflow-hidden rounded-lg shadow-xl shrink-0"
                style={{ y: imageParallaxY }} // Terapkan Parallax Y
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover rounded-lg"
                />
              </motion.div>
              <motion.div
                onClick={toggleOpen}
                className="cursor-pointer"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <ArrowUpIcon size={32} className="text-white transition-transform duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Container untuk Semua Ukuran (Header Accordion/Judul) */}
      <motion.div
        key="header"
        onClick={toggleOpen}
        className={`flex justify-between items-center cursor-pointer transition-all p-3 my-2 lg:my-3 lg:p-6 ${
          isOpen && "hidden"
        }`} // Sembunyikan Header di desktop jika terbuka
        initial={false}
        animate={
          isOpen && window.innerWidth < 1024 // Hanya untuk mobile/tablet
            ? { backgroundColor: "#1A1A1A", borderRadius: "0.75rem" }
            : { backgroundColor: "rgba(0,0,0,0)", borderRadius: "0rem" }
        }
        transition={{ duration: 0.4 }}
        layout
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="bg-[#292929] px-4 py-2 rounded-xl w-fit text-white font-normal text-base md:text-lg"
            layout="position"
          >
            {number}
          </motion.div>
          <h3
            className="text-white text-lg font-medium md:text-2xl"
          >
            {service.title}
          </h3>
        </div>
        <motion.span
          className="flex items-center justify-end mr-4"
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.4 }}
        >
          {/* Ganti ikon berdasarkan status open/closed */}
          {isOpen ? (
            <ArrowUpIcon size={32} className="transition-transform duration-300 text-white" />
          ) : (
            <ArrowDownIcon size={32} className="transition-transform duration-300 text-white" />
          )}
        </motion.span>
      </motion.div>

      {/* Container untuk Mobile/Tablet (Konten Accordion) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-expanded"
            className="lg:hidden px-4 py-4 md:px-6 md:py-0 bg-[#1A1A1A] rounded-xl mb-6"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            onClick={toggleOpen}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            layout
          >
            <div className="w-full">
              <motion.img
                src={service.image}
                className="w-full h-auto object-cover rounded-lg"
                alt={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-6">
                <motion.div
                  className="bg-[#292929] px-3 py-[10px] rounded-xl w-fit text-white font-normal text-base md:text-lg"
                  layout="position"
                >
                  {number}
                </motion.div>
                <motion.h3
                  className="text-white text-lg font-medium md:text-2xl"
                  layout="position"
                >
                  {service.title}
                </motion.h3>
              </div>
              <motion.span
                className="flex items-center justify-end mr-4"
                animate={{ rotate: isOpen ? 0 : 180 }}
                transition={{ duration: 0.4 }}
              >
                {/* Ganti ikon berdasarkan status open/closed */}
                {isOpen ? (
                  <ArrowDownIcon size={32} className="transition-transform duration-300 text-white" />
                ) : (
                  <ArrowUpIcon size={32} className="transition-transform duration-300 text-white" />
                )}
              </motion.span>  
            </div>
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-[#828282] mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="rounded-3xl bg-[#2F2F2F] px-4 py-[10px] text-white text-sm md:text-base font-normal"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + tagIndex * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const ServiceSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="pt-10 pb-20 bg-[#07090D] scroll-mt-24">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-semibold mb-12 text-white"
        >
          Services <span className="text-[#828282]">| Offer</span>
        </motion.div>

        {/* Daftar Layanan */}
        <div>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
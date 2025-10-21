import { useRef, useState } from "react";
import { motion, scale, useScroll, useTransform } from "framer-motion";
import service01 from "../../assets/image/service-01.png";
import service02 from "../../assets/image/service-02.png";
import service03 from "../../assets/image/service-03.png";
import service04 from "../../assets/image/service-04.png";
import service05 from "../../assets/image/service-05.png";
import { ArrowDownIcon, ArrowUpIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

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

const AccordionHeader = ({ isOpen, index, title, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={false}
    animate={
      isOpen
        ? { backgroundColor: "#1A1A1A", borderRadius: "0.75rem 0.75rem 0rem 0rem" }
        : { backgroundColor: "rgba(0,0,0,0)", borderRadius: "0rem" }
    }
    transition={{ duration: 0.3, type: "tween" }}
  >
    <div
      className="flex justify-between items-center cursor-pointer transition-all p-3 lg:p-6 mb-0"
    >
      <div className="flex items-center gap-6">
        <motion.div className="bg-[#292929] px-4 py-2 item-center rounded-xl w-fit text-white font-normal text-base lg:text-lg" layout>
          {String(index + 1).padStart(2, "0")}
        </motion.div>
        <motion.div className="text-white text-lg font-medium lg:text-2xl" layout>
          {title}
        </motion.div>
      </div>
      <motion.span className="flex mr-4 lg:mr-6 items-center justify-end" animate={{ rotate: isOpen ? 0 : 180 }} transition={{ duration: 0.4 }}>
        <ArrowUpIcon size={32} className="transition-transform duration-300 text-white" />
      </motion.span>
    </div>
  </motion.div>
);

const AccordionContent = ({ isOpen, index, service, onClick }) => (
  <motion.div
    onClick={onClick}
    className={`overflow-hidden ${isOpen ? "cursor-pointer py-3 lg:py-6" : ""} bg-[#1A1A1A] rounded-b-xl lg:rounded-b-lg px-3 lg:px-6 pt-0 mb-6`}
    initial={false}
    animate={isOpen ? { maxHeight: 1000, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
    transition={{ duration: 0.5, type: "tween" }}
    style={{ pointerEvents: isOpen ? "auto" : "none" }}
  >
    <motion.div
      className="grid grid-cols-3"
      initial={false}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: isOpen ? 0.1 : 0 }}
    >
      <div className="col-span-3 lg:col-span-2">
        <div className="mb-8">
          <div className="text-base lg:text-lg text-[#828282] text-normal text-justify">{service.description}</div>
        </div>
        <div className="mt-6 text-center flex flex-wrap gap-3 overflow-x-auto whitespace-nowrap md:grid md:grid-cols-2 md:whitespace-normal md:overflow-visible lg:flex lg:flex-wrap lg:gap-3 lg:grid-cols-none">
          {service.tags.map((tag, tagIndex) => (
            <motion.div
              key={tagIndex}
              className="rounded-3xl bg-[#2F2F2F] px-3 py-[10px] text-white text-sm lg:text-base font-normal"
              initial={false}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: isOpen ? 0.2 + tagIndex * 0.05 : 0 }}
            >
              {tag}
            </motion.div>
          ))}
        </div>
        {isOpen && (
          <div className="py-4 w-full lg:hidden">
            <motion.img
              src={service.image}
              className="w-full"
              alt=""
              initial={false}
              animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: isOpen ? 0.15 : 0 }}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex items-center justify-end mr-5 text-white">
        <motion.img
          src={service.image}
          alt=""
          initial={false}
          animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, delay: isOpen ? 0.15 : 0 }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const ServiceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="services" ref={ref} className="pt-10 pb-20 bg-[#07090D] scroll-mt-24">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section Title */}
        <motion.div 
          className="text-2xl md:text-4xl font-semibold mb-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Services <span className="text-[#828282]">| Offer</span>
        </motion.div>
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <AccordionHeader
                isOpen={isOpen}
                index={index}
                title={service.title}
                image={service.image}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              />
              <AccordionContent
                isOpen={isOpen}
                index={index}
                service={service}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              />
              {/* Divider except last */}
              {index !== services.length - 1 && <hr className="border-[#292929] mb-6" />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
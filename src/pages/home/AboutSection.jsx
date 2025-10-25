import imgAboutUs from "../../assets/image/img-aboutus.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Komponen animasi random count
function RandomCountStat({ target, suffix, label, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    let interval = setInterval(() => {
      frame++;
      // Randomize count for effect
      if (frame < 20) {
        setCount(Math.floor(Math.random() * target));
      } else if (frame < 40) {
        setCount(Math.floor(target * Math.random()));
      } else {
        setCount(target);
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [target, active]);
  return (
    <div className="flex flex-col">
      <motion.span
        className="text-2xl md:text-[32px] font-bold text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {count}
        <span className="text-[#828282]">{suffix}</span>
      </motion.span>
      <span className="text-xs md:text-base text-white mt-1">{label}</span>
    </div>
  );
}

const AboutSection = () => {
  const [isStatActive, setIsStatActive] = useState(false);
  return (
    <section id="about" className="pt-10 pb-20 bg-[#07090D] scroll-mt-24">
      <div className="container mx-auto px-4 md:px-0">
        {/* Judul Section */}
        <motion.div
          className="text-2xl md:text-4xl font-semibold mb-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About <span className="text-[#828282]">Me</span>
        </motion.div>

        {/* Box Konten About Me Sesuai Figma */}
        <div
          className="
                        bg-[#1A1A1A] 
                        border border-[#373333] 
                        rounded-xl 
                        p-4 md:p-8 
                        flex flex-col lg:flex-row gap-12 
                        shadow-[0_0_4px_4px_#67676740] 
                        relative
                    "
          style={{
            // Tambahan untuk menyesuaikan Shadow jika Tailwind tidak mendukung sintaks penuh
            boxShadow: "0 0 4px 4px #67676740",
          }}
        >
          {/* Kolom Kiri: Teks dan Statistik */}
          <div className="flex flex-col justify-between">
            <div className="w-full">
              {/* Intro */}
              <div className="text-base md:text-xl font-normal text-white text-justify">
                <motion.span
                  className="text-[#828282]"
                  initial={{ color: "#828282" }}
                  whileInView={{ color: "#FFF" }}
                  viewport={{ amount: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Welcome! I’m Kevin, a filmmaker passionate about turning
                  adrenaline, adventure, and authentic moments into cinematic
                  stories.
                </motion.span>
                <br />
                <br />
                <motion.span
                  className="text-[#828282]"
                  initial={{ color: "#828282" }}
                  whileInView={{ color: "#FFF" }}
                  viewport={{ amount: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  With over 8 years of experience in action sports and lifestyle
                  filmmaking, I’ve had the privilege of working with global
                  brands and athletes to capture their most powerful stories.
                </motion.span>
                <br />
                <br />
                <motion.span
                  className="text-[#828282]"
                  initial={{ color: "#828282" }}
                  whileInView={{ color: "#FFF" }}
                  viewport={{ amount: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onViewportEnter={() => setIsStatActive(true)}
                >
                  From snow-capped mountains in Switzerland to tropical
                  coastlines worldwide, I thrive on the challenge of blending
                  technical precision with artistic storytelling to create
                  visuals that leave a lasting impact.
                </motion.span>
              </div>
            </div>

            {/* Statistik (150+, 8+, 100%) */}
            <div className="grid grid-cols-3 mt-8 gap-3">
              {/* Item 1: Projects Filmed */}
              <RandomCountStat target={150} suffix="+" label="Projects Filmed" active={isStatActive} />
              {/* Item 2: Years Experience */}
              <RandomCountStat target={8} suffix="+" label="Years Experience" active={isStatActive} />
              {/* Item 3: Global Clients */}
              <RandomCountStat target={100} suffix="%" label="Global Clients" active={isStatActive} />
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="order-first lg:order-last flex items-center lg:block lg:min-w-[423px]">
            <div className="w-full h-80 md:h-[455px] overflow-hidden rounded-lg">
              {/* Placeholder/Actual Image */}
              <img
                src={imgAboutUs}
                alt="Kevin Oliveri"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

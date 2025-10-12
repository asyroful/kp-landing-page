import { motion } from "framer-motion";
import profileImage from "../../assets/profileImage.png";
import logoRB from "../../assets/logo-project/redbullcom-1 logo.svg";
import logoThe from "../../assets/logo-project/The logo.svg";
import logoSalomon from "../../assets/logo-project/Logo_Salomon logo.svg";
import logoGo from "../../assets/logo-project/Go logo.svg";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSeeMyWork = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#121212] px-2 sm:px-4 pb-20 scroll-mt-28">
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
        <div className="flex">
          <motion.div
            className="mb-6 order-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-[74px] h-[74px] md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-white mx-0">
              <img src={profileImage} alt="Kevin Oliveri" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div
            className="text-xl/[60px] md:text-5xl/[80px] leading-10 mb-6 text-white order-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Kevin Oliveri is a Creative Director & Cinematographer who {" "}
            <span className="font-semibold text-[#828282]">
              crafts high-energy visuals and cinematic stories that inspire.
            </span>
          </motion.div>
        </div>
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
            onClick={() => navigate('/contact')}
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
        <motion.p
          className="text-sm sm:text-base text-white mb-6 mt-20 md:mt-0"
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
          <div className="block md:hidden w-full h-16">
            <div className="flex items-center gap-x-6 animate-logo-slide" style={{ width: "max-content" }}>
              {[logoRB, logoThe, logoSalomon, logoGo, logoRB, logoThe, logoSalomon, logoGo].map((logo, idx) => (
                <div key={idx} className="h-16 flex items-center justify-center">
                  <img src={logo} alt={`Logo ${idx + 1}`} className="max-h-14 w-auto" />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8">
            {[logoRB, logoThe, logoSalomon, logoGo].map((logo, idx) => (
              <div key={idx} className="h-16 flex items-center justify-center">
                <img src={logo} alt={`Logo ${idx + 1}`} className="max-h-14 w-auto" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

import imgAboutUs from "../../assets/image/img-aboutus.png";

const AboutSection = () => {
  return (
    <section id="about" className="pt-10 pb-20 bg-[#121212]">
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

export default AboutSection;

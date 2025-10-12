import {
  InstagramLogoIcon,
  YoutubeLogoIcon
} from "@phosphor-icons/react";
import logo from "../assets/Logo.svg";
import starsLeft from "../assets/stars-left.png";


function VimeoLogoIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.25 2H5.75C4.75544 2 3.80161 2.39509 3.09835 3.09835C2.39509 3.80161 2 4.75544 2 5.75L2 18.25C2 19.2446 2.39509 20.1984 3.09835 20.9017C3.80161 21.6049 4.75544 22 5.75 22H18.25C19.2446 22 20.1984 21.6049 20.9017 20.9017C21.6049 20.1984 22 19.2446 22 18.25V5.75C22 4.75544 21.6049 3.80161 20.9017 3.09835C20.1984 2.39509 19.2446 2 18.25 2ZM17.94 9.27875C17.2688 13.0562 13.5225 16.255 12.3963 16.985C11.2688 17.715 10.2413 16.6925 9.8675 15.9188C9.44125 15.0363 8.1625 10.2525 7.8275 9.85625C7.4925 9.46 6.4875 10.2525 6.4875 10.2525L6 9.61375C6 9.61375 8.04125 7.1775 9.59375 6.87125C11.24 6.5475 11.2375 9.4 11.6337 10.9825C12.0175 12.5138 12.2738 13.39 12.6088 13.39C12.9438 13.39 13.5837 12.5363 14.2837 11.2275C14.9862 9.9175 14.2538 8.76 12.8825 9.5825C13.4325 6.29375 18.61 5.5025 17.94 9.27875Z" fill="white"/>
    </svg>
  );
}


const socialMediaLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/kevinoliveri",
    icon: <InstagramLogoIcon size={24} weight="fill" />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Kevin.Oliveri",
    icon: <YoutubeLogoIcon size={24} weight="fill" />,
  },
  {
    name: "Vimeo",
    href: "https://vimeo.com/kevinoliveri",
    icon: <VimeoLogoIcon />,
  },
];

const Footer = () => {
  return (
    <div className="bg-[#121212] py-4">
      <footer className="
        bg-[#121212] 
        text-white 
        py-12 
        relative 
        overflow-hidden 
        mx-auto 
        max-w-sm
        md:max-w-4xl
        lg:max-w-6xl 
        rounded-xl
        border-t border-[#454545]"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={starsLeft}
            alt="Stars Left"
            className="absolute top-0 left-0 z-10"
          />
          <img
            src={starsLeft}
            alt="Stars Right (Mirrored)"
            className="absolute top-0 right-0 z-10 transform scale-x-[-1]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <img src={logo} alt="Kevin Logo" />

          {/* Bagian Call to Action (CTA) */}
          <div className="max-w-3xl mt-6">
            <div className="text-[32px] lg:text-5xl font-bold mb-4">
              Let's Work<span className="text-[#828282]"> Together</span>
            </div>

            {/* Deskripsi */}
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              Do you have a story worth telling? Let’s create something
              unforgettable.
            </p>

            {/* Tombol Get In Touch */}
            <a
              href="/contact"
              className="inline-block w-full lg:w-fit text-center px-6 py-3 rounded-lg bg-white text-black font-semibold text-lg lg:text-xl hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Garis Pembatas (Opsional, tapi bagus untuk struktur) */}

          {/* Baris Bawah: Copyright dan Social Media */}
          <div className="mt-20 md:mt-0 flex flex-col md:flex-row w-full max-w-5xl text-sm text-gray-400
            items-start text-left
            md:items-center md:text-center
            lg:items-center lg:text-center
            justify-between">
            {/* Copyright */}
            <div className="order-1 mt-4 md:mt-0 w-full md:w-auto lg:w-auto">
              © 2025 kevinoliveri. All rights reserved.
            </div>
            <div className="w-full max-w-xl mx-4 order-2 h-px bg-white/20 my-4 md:my-16"></div>

            {/* Social Media Links */}
            <div className="flex space-x-4 order-3 w-full md:w-auto lg:w-auto justify-start md:justify-center lg:justify-center">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                  title={link.name} // Tambahkan title untuk aksesibilitas
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

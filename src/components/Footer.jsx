import logoDark from '../assets/logo-footer.svg'; 

// Data navigasi untuk mempermudah maintenance
const informationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about', scroll: true },
  { name: 'Project', href: '/project' },
  { name: 'Services', href: '#services', scroll: true },
  { name: 'Contact Us', href: '/contact' },
];

const socialMediaLinks = [
  { name: 'Instagram', href: 'https://instagram.com/kevinoliveri' },
  { name: 'Youtube', href: 'https://www.youtube.com/@Kevin.Oliveri' },
  { name: 'Vimeo', href: 'https://vimeo.com/kevinoliveri' },
];

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-20 relative overflow-hidden">
      <img
        src={logoDark} // Ganti dengan import logo Anda
        alt="Logo Background"
        className="
          absolute bottom-0 right-0
          w-[45%]
          pointer-events-none
          z-10
        "
      />
      
      {/* Container Utama */}
      <div className="container mx-auto px-4 md:px-8 lg:px-20 relative z-10"> 
        {/* Tambahkan z-10 agar konten di atas logo */}
        
        {/* Konten Footer: CTA (Kiri) & Navigasi (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-20">
          
          {/* Kolom Kiri: Let's Work Together (CTA) */}
          <div className="lg:col-span-2">
            <div className="text-[32px] lg:text-5xl font-bold mb-4">
              Let's Work<span className="text-[#828282]"> Together</span>
            </div>
            <p className="text-xl lg:text-2xl text-[#828282] mb-10 max-w-lg">
              Do you have a story worth telling? Let’s create something unforgettable.
            </p>
            <a 
              href="/contact" 
              className="inline-block w-full lg:w-fit text-center px-6 py-3 rounded-lg bg-white text-black font-semibold text-lg lg:text-xl hover:bg-gray-200 transition-colors"
            >
              Start a Project
            </a>
          </div>

          {/* Kolom Kanan: Informasi & Sosial Media */}
          <div className="mt-10 lg:mt-0 lg:col-span-1 grid grid-cols-2 gap-10">
            
            {/* Sub-Kolom 1: Information */}
            <div>
              <h3 className="text-lg lg:text-xl font-medium mb-6">Information</h3>
              <ul className="space-y-3">
                {informationLinks.map((link) => (
                  <li key={link.name}>
                    {link.scroll ? (
                      <button
                        type="button"
                        className="text-white font-normal transition-colors text-base lg:text-lg bg-transparent p-0 m-0 outline-none border-none cursor-pointer"
                        onClick={() => {
                          const el = document.getElementById(link.href.replace('#', ''));
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white font-normal transition-colors text-base lg:text-lg"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-Kolom 2: Social Media */}
            <div>
              <h3 className="text-xl font-medium mb-6">Social Media</h3>
              <ul className="space-y-3">
                {socialMediaLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white font-normal transition-colors text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
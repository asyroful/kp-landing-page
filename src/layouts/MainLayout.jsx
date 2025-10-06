import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import starsRight from '../assets/stars-right.png';
import starsLeft from '../assets/stars-left.png';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      {/* Stars Left */}
      <img 
        src={starsLeft} 
        alt="Stars Left" 
        className="absolute inset-0 left-0 z-10"
      />
      
      {/* Stars Right - Perubahan Styling */}
      <img 
        src={starsRight} 
        alt="Stars Right" 
        className="absolute top-0 right-0 z-10"
      />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';

// Import semua halaman
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SinglePostPage from './pages/SinglePostPage';
// About subpages
import ProfilePage from './pages/about/ProfilePage';
import VisionMissionPage from './pages/about/VisionMissionPage';
import ValuesPage from './pages/about/ValuesPage';
import CsrPage from './pages/about/CsrPage';
// Products subpages
import ProductDetailPage from './pages/products/ProductDetailPage';
import ProductsPage from './pages/products/ProductsPage';
// Customers
import CustomersPage from './pages/CustomersPage';

function App() {
  // State untuk tombol scroll ke atas
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProductsPage />} />
            <Route path="/project/:slug" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/about/profile" element={<ProfilePage />} />
            <Route path="/about/vision-mission" element={<VisionMissionPage />} />
            <Route path="/about/values" element={<ValuesPage />} />
            <Route path="/about/csr" element={<CsrPage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<SinglePostPage />} /> */}
          </Routes>
          {/* Floating Scroll to Top Button */}
          {showScroll && (
            <button
              onClick={handleScrollTop}
              className="fixed z-50 bottom-12 right-6 opacity-40 bg-[#282828] hover:bg-[#383838] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300 animate-bounce"
              aria-label="Scroll to top"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
            >
              <FaArrowUp size={28} />
            </button>
          )}
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
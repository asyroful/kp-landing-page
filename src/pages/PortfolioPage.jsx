import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


const portfolioItems = [
  { id: 1, titleKey: 'item1', img: 'https://images.unsplash.com/photo-1605513219522-d781b3a1a6f2?q=80&w=2070' },
  { id: 2, titleKey: 'item2', img: 'https://images.unsplash.com/photo-1563889958-3566130b428b?q=80&w=1974' },
  { id: 3, titleKey: 'item3', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070' },
  { id: 4, titleKey: 'item4', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070' },
  { id: 5, titleKey: 'item5', img: 'https://images.unsplash.com/photo-1556912173-356993125b29?q=80&w=2069' },
  { id: 6, titleKey: 'item6', img: 'https://images.unsplash.com/photo-1555529940-08226946a3ce?q=80&w=2070' },
];

export default function PortfolioPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <title>{t('portfolio.title', 'Portofolio - PT Inti Logam Persada')}</title>
        <meta name="description" content={t('portfolio.meta', 'Lihat galeri proyek sukses kami di berbagai industri.')} />
      </Helmet>

      <header className="bg-gray-100 py-16 px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {t('portfolio.header')}
        </motion.h1>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div key={item.id} className="relative rounded-lg overflow-hidden group shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.img} alt={t(`portfolio.${item.titleKey}`)} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{t(`portfolio.${item.titleKey}`)}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
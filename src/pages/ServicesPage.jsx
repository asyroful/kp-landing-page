import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


const serviceKeys = [
  'cnc',
  'sheet',
  'welding',
  'finishing',
];

const serviceImages = [
  "https://images.unsplash.com/photo-1617953141905-d2c710f1edde?q=80&w=2070",
  "https://images.unsplash.com/photo-1589178428813-261556a3108c?q=80&w=2070",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069",
  "https://images.unsplash.com/photo-1598454449852-527568325a59?q=80&w=1964",
];

export default function ServicesPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <title>{t('services.title', 'Layanan Kami - PT Inti Logam Persada')}</title>
        <meta name="description" content={t('services.meta', 'Jelajahi layanan manufaktur logam kami, termasuk CNC Machining, Fabrikasi, Welding, dan Surface Finishing.')} />
      </Helmet>

      <header className="bg-gray-100 py-16 px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {t('services.header')}
        </motion.h1>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {serviceKeys.map((key, index) => (
            <motion.div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden h-64">
                <img src={serviceImages[index]} alt={t(`services.${key}_title`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t(`services.${key}_title`)}</h3>
                <p className="text-gray-600">{t(`services.${key}_desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
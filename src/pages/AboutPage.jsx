import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaBullseye, FaFlag } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.meta')} />
      </Helmet>

      {/* Page Header */}
      <PageHeader title={t('about.header')} />

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        {/* Sejarah */}
        <motion.div className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974" alt="Tim Profesional" className="rounded-lg shadow-xl"/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.history_title', 'Perjalanan Kami')}</h2>
            <div className="text-lg text-gray-600 leading-relaxed">
              {t('about.history_desc')}
            </div>
          </div>
        </motion.div>

        {/* Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center text-red-600 mb-4">
              <FaFlag size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">{t('about.vision_title')}</h3>
            </div>
            <div className="text-lg text-gray-600">{t('about.vision_desc')}</div>
          </motion.div>
          <motion.div className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center text-red-600 mb-4">
              <FaBullseye size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">{t('about.mission_title')}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('about.mission_1')}</li>
              <li>{t('about.mission_2')}</li>
              <li>{t('about.mission_3')}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}
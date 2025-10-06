import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';

export default function ProfilePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('profile.title')}</title>
        <meta name="description" content={t('profile.meta')} />
      </Helmet>
      {/* Page Header */}
      <PageHeader title={t('profile.title')} />
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
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
      </div>
    </>
  );
}

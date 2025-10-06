import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';

export default function ValuesPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('values.title')}</title>
        <meta name="description" content={t('values.meta')} />
      </Helmet>
      {/* Page Header */}
      <PageHeader title={t('values.title')} />
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('values.title')}</h2>
          <div className="text-lg text-gray-600 leading-relaxed mb-4">{t('values.desc')}</div>
        </motion.div>
      </div>
    </>
  );
}

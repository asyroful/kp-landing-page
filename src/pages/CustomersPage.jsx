import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const customers = [
  { name: 'PDAM', logo: 'https://asset.kompas.com/crops/0Qn6QnQnQnQnQnQnQnQnQnQnQnQ=/0x0:0x0/750x500/data/photo/2021/07/01/60ddc7e2b7b7b.png' },
  { name: 'PUPR', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Logo_Kementerian_PUPR.png' },
  { name: 'Adhi Karya', logo: 'https://www.adhi.co.id/frontend/images/logo-adhi.png' },
  { name: 'Waskita Karya', logo: 'https://www.waskita.co.id/assets/img/logo.png' },
  { name: 'Wijaya Karya', logo: 'https://www.wika.co.id/images/logo-wika.png' },
  { name: 'PP', logo: 'https://www.ptpp.co.id/uploads/logo/pp-logo.png' },
  { name: 'Pertamina', logo: 'https://www.pertamina.com/Asset/img/logo-pertamina.png' },
  { name: 'PLN', logo: 'https://www.pln.co.id/statics/images/logo-pln.png' },
];

export default function CustomersPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('customers.title')}</title>
        <meta name="description" content={t('customers.meta')} />
      </Helmet>
      {/* Page Header */}
      <PageHeader title={t('customers.title')} />
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-lg text-gray-600 text-center mb-8">{t('customers.desc')}</p>
        </motion.div>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          {customers.map((c) => (
            <div key={c.name} className="flex flex-col items-center">
              <img src={c.logo} alt={c.name} className="h-20 w-auto object-contain mb-2 drop-shadow-md bg-white rounded p-2"/>
              <span className="text-gray-700 text-sm font-medium mt-1">{c.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

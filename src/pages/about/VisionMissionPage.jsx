import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageHeader from '../../components/PageHeader';
import { FaBullseye, FaFlag } from 'react-icons/fa';

export default function VisionMissionPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("vision_mission.title")}</title>
        <meta name="description" content={t("vision_mission.meta")} />
      </Helmet>
      <PageHeader title={t('vision_mission.title')} />
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center text-red-600 mb-4">
              <FaFlag size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">{t("about.vision_title")}</h3>
            </div>
            <div className="text-lg text-gray-600">
              {t("about.vision_desc")}
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center text-red-600 mb-4">
              <FaBullseye size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">{t("about.mission_title")}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t("about.mission_1")}</li>
              <li>{t("about.mission_2")}</li>
              <li>{t("about.mission_3")}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}

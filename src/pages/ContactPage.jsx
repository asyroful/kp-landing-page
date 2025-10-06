import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  // Data kontak untuk dirender secara dinamis
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt size={20} className="text-red-600" />,
      label: t('contact_page.address_label'),
      value: "Batur, RT.05/RW.09, Batur, Tegalrejo, Kec. Ceper, Kabupaten Klaten, Jawa Tengah 57465"
    },
    {
      icon: <FaPhoneAlt size={20} className="text-red-600" />,
      label: t('contact_page.phone_label'),
      value: "(021) 598-1635"
    },
    {
      icon: <FaWhatsapp size={20} className="text-red-600" />,
      label: t('contact_page.whatsapp_label'),
      value: "0812-3456-7890" // Ganti dengan nomor WhatsApp yang benar
    },
    {
      icon: <FaEnvelope size={20} className="text-red-600" />,
      label: t('contact_page.email_label'),
      value: "marketing@intilogampersada.co.id" // Ganti dengan email yang benar
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - PT Inti Logam Persada</title>
        <meta name="description" content="Hubungi kami untuk pertanyaan, penawaran, atau konsultasi proyek manufaktur Anda." />
      </Helmet>
      
      {/* Header Section */}
      <PageHeader title={t('contact_page.header_title')} subtitle={t('contact_page.header_subtitle')} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('contact_page.info_title')}</h2>

            {/* Detail Kontak */}
            <div className="space-y-6 mb-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 mt-1">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Section */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{t('contact_page.social_media_title')}</h3>
                <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 p-2 bg-gray-100 rounded-full transition-colors duration-300">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 p-2 bg-gray-100 rounded-full transition-colors duration-300">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-700 p-2 bg-gray-100 rounded-full transition-colors duration-300">
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {/* Form Kontak */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact_page.form_title')}</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact_page.form_name')}</label>
                <input type="text" id="name" name="name" required placeholder={t('contact_page.form_name')} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact_page.form_email')}</label>
                <input type="email" id="email" name="email" required placeholder={t('contact_page.form_email')} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('contact_page.form_subject')}</label>
                <input type="text" id="subject" name="subject" required placeholder={t('contact_page.form_subject')} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact_page.form_message')}</label>
                <textarea id="message" name="message" rows="4" required placeholder={t('contact_page.form_message')} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-bold text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('contact_page.form_button')}
              </button>
            </form>
          </motion.div>
        </div>
        <div className="mt-16 md:mt-24">
          <motion.div
            className="w-full min-h-[450px] md:min-h-[600px] h-[450px] md:h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.1305799122806!2d110.6843416743914!3d-7.669107892347567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4115642c35c9%3A0x5fda27eff242cfec!2sCV.%20Inti%20Logam%20Persada!5e0!3m2!1sid!2sid!4v1757166065918!5m2!1sid!2sid"
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import file terjemahan
import translationEN from '../locales/english.json';
import translationID from '../locales/indonesia.json';

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  }
};

i18n
  // Mengirim instance i18n ke react-i18next
  .use(initReactI18next)
  // Inisialisasi i18n
  .init({
    resources,
    fallbackLng: 'id', // Bahasa default jika deteksi gagal
    interpolation: {
      escapeValue: false, // Tidak perlu untuk React
    },
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    }
  });

export default i18n;

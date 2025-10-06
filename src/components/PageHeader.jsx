import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="bg-gray-100 py-16 px-4 text-center">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.div
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.div>
      )}
    </header>
  );
}

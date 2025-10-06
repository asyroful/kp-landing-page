import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BlogCard({ post, index, currentLang, variant = 'default' }) {
  const { t } = useTranslation();
  // variant: 'default' (BlogPage), 'compact' (HomePage)
  return (
    <motion.div
      key={post.slug}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="overflow-hidden h-56">
          <img
            src={post.thumbnail}
            alt={post.title[currentLang]}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</p>
          {variant === 'compact' ? (
            <h3 className="text-lg font-bold text-gray-800 mb-3 h-16">{post.title[currentLang]}</h3>
          ) : (
            <h2 className="text-xl font-bold text-gray-800 mb-3 h-20">{post.title[currentLang]}</h2>
          )}
          <div className="text-lg text-gray-600 mb-4">{post.excerpt[currentLang]}</div>
          <span className={`font-bold group-hover:underline ${variant === 'compact' ? 'text-red-600' : 'text-blue-600'}`}>
            {t('blog_page.read_more')}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

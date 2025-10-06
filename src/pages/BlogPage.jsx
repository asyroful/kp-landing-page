import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogData';
import { useEffect } from 'react';

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('blog_page.title')}</title>
        <meta name="description" content={t('blog_page.description')} />
      </Helmet>

      <PageHeader title={t('blog_page.header_title')} subtitle={t('blog_page.header_subtitle')} />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} currentLang={currentLang} />
          ))}
        </div>
      </div>
    </>
  );
}

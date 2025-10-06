import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { FaArrowLeft } from 'react-icons/fa';

export default function SinglePostPage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">404 - Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title[currentLang]} - Blog</title>
        <meta name="description" content={post.excerpt[currentLang]} />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:underline mb-8">
            <FaArrowLeft className="mr-2" />
            Kembali ke Semua Artikel
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title[currentLang]}</h1>
          <div className="text-lg text-gray-500 mb-8">{post.date} by {post.author}</div>
          
          <img src={post.thumbnail} alt={post.title[currentLang]} className="w-full h-auto rounded-lg shadow-lg mb-8" />
          
          <div 
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content[currentLang] }} 
          />
        </div>
      </div>
    </>
  );
}

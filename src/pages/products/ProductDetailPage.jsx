import ProductCard from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { productCategories } from "../../data/productsData";
import { FaArrowLeft, FaWhatsapp, FaPhone } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { category, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundCat = productCategories.find((c) => c.key === category);
      const foundProduct = foundCat
        ? foundCat.products.find((p) => p.id === slug)
        : null;
      setCat(foundCat);
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [category, slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!cat || !product)
    return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="container mx-auto px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3">
          <div className="mb-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 font-semibold rounded px-4 py-2 hover:bg-red-50 transition"
            >
              <FaArrowLeft />
              {t('products_page.back')}
            </Link>
          </div>
          <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
            <ol className="list-none flex flex-wrap gap-1 items-center">
              <li>
                <Link
                  to="/products"
                  className="hover:underline text-red-600 font-semibold"
                >
                  {t('navbar.products')}
                </Link>
              </li>
              <li className="mx-1">&#8226;</li>
              <li>
                <Link
                  to={`/products/${cat.key}`}
                  className="hover:underline text-red-600 font-semibold"
                >
                  {t(`navbar.${cat.key}`) || cat.name}
                </Link>
              </li>
              <li className="mx-1">&#8226;</li>
              <li className="text-gray-800 font-bold">{product.name}</li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {product.name}
              </h1>
              <div className="mb-6 flex items-center">
                <img
                  src={product.image || ""}
                  alt={product.name}
                  className="rounded-lg shadow w-1/2 object-contain"
                />
              </div>
              <div>
                <div className="text-gray-700 whitespace-pre-wrap mb-4 text-base">
                  {product.description || "-"}
                </div>
              </div>
            </div>
            {/* Sidebar Interested In */}
          </div>
        </div>
        <aside className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-3xl font-bold mb-2">
              {t('products_page.interested', 'Interested in:')} <span className="text-red-500">{product.name}</span>?
            </h3>
            <p className="mb-4">{t('products_page.order_info', 'You can place an order by contacting us below:')}</p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 text-center"
            >
              <FaWhatsapp /> {t('contact_page.whatsapp_label', 'WhatsApp')}
            </a>
            <a
              href="tel:+622112345678"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center"
            >
              <FaPhone style={{ transform: "rotate(100deg)" }} /> {t('contact_page.phone_label', 'Call Office')}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

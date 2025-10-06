import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productCategories } from '../../data/productsData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Gunakan CSS line-clamp, tidak perlu JS truncate panjang deskripsi

export default function ProductsPage() {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const categories = productCategories;
  // Ambil kategori dari params jika ada
  const urlCategory = params.category || 'all';
  const [selected, setSelected] = useState(urlCategory);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setSelected(urlCategory);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [urlCategory]);

  const allProducts = categories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      _categoryKey: cat.key,
      _categoryName: cat.name,
    }))
  );
  const filteredProducts =
    selected === "all"
      ? allProducts
      : allProducts.filter((p) => p._categoryKey === selected);

  const handleCategoryClick = (key) => {
    setLoading(true);
    if (key === "all") {
      navigate("/products");
    } else {
      navigate(`/products/${key}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
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
          {selected !== 'all' && (
            <>
              <li className="mx-1">&#8226;</li>
              <li className="text-gray-800 font-bold">
                {t(
                  `navbar.${categories.find((c) => c.key === selected)?.key}`
                ) ||
                  categories.find((c) => c.key === selected)?.name ||
                  ""}
              </li>
            </>
          )}
        </ol>
      </nav>
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          {t('navbar.products')}
        </h1>
        <p className="text-gray-600">
          {t('products_page.intro')}
        </p>
      </div>
      {/* Dropdown Mobile */}
      <div className="w-full mb-6 lg:hidden">
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={selected}
          onChange={(e) => handleCategoryClick(e.target.value)}
        >
          <option value="all">{t("products_page.all", "All Products")}</option>
          {categories.map((cat) => (
            <option key={cat.key} value={cat.key}>
              {t(`navbar.${cat.key}`) || cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-8">
        {/* Sidebar Desktop */}
        <aside className="w-64 shrink-0 hidden lg:block">
          <nav className="bg-white rounded-lg shadow p-4 sticky top-24">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick('all')}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selected === 'all'
                      ? 'bg-red-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {t('products_page.all')}
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.key}>
                  <button
                    onClick={() => handleCategoryClick(cat.key)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      selected === cat.key
                        ? "bg-red-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {t(`navbar.${cat.key}`) || cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* Product Grid */}
        <main className="flex-1">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                    className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
                  >
                    <Link
                      to={`/products/${product._categoryKey}/${product.id}`}
                      className="block"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-48 w-full object-contain bg-gray-50"
                      />
                    </Link>
                    <div className="p-4 flex-1 flex flex-col">
                      <h2 className="text-lg font-bold mb-2 line-clamp-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                        {product.description}
                      </p>
                      <Link
                        to={`/products/${product._categoryKey}/${product.id}`}
                        className="mt-auto inline-block text-red-600 font-semibold hover:underline"
                      >
                        {t('products_page.button_view')}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

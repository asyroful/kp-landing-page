import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  // Perlu tahu kategori untuk link detail
  // product harus punya id dan (opsional) _categoryKey
  const categoryKey = product._categoryKey || product.categoryKey;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <Link to={categoryKey && product.id ? `/products/${categoryKey}/${product.id}` : '#'}>
        <div className="overflow-hidden h-48 flex items-center justify-center bg-gray-50">
          <img src={product.image || ''} alt={product.name} className="h-32 object-contain group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
          {product.brand && <div className="text-xs text-gray-500">{product.brand}</div>}
        </div>
      </Link>
    </div>
  );
}

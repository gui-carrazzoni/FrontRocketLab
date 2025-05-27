import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 w-full">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">Produtos</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-xl border border-gray-700 group"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square overflow-hidden bg-gray-900 p-4 group-hover:bg-gray-800 transition-colors">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-200 text-sm mb-2 line-clamp-2">{product.name}</p>
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-bold text-purple-400">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="w-full bg-purple-600 text-white px-3 py-1.5 rounded text-sm hover:bg-purple-700 transition-all focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
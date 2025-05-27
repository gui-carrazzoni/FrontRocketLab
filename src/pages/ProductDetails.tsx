import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 w-full">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-white">Produto não encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="aspect-square overflow-hidden bg-gray-900 rounded-lg group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-gray-300 text-lg mb-6">{product.description}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-purple-400">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all w-full focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
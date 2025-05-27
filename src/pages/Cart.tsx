import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, resetCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleFinishPurchase = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      resetCart();
    }, 2000);
  };

  if (items.length === 0 && !showSuccess) {
    return (
      <div className="min-h-screen bg-gray-900 w-full">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-white text-center">Carrinho</h1>
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-20 h-20 mb-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <p className="text-gray-300 text-xl mb-2">Seu carrinho está vazio</p>
            <p className="text-gray-500">Adicione produtos para começar suas compras</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 w-full">
      <div className="container mx-auto px-4 py-8">
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl z-10 transform transition-all duration-300 scale-100 opacity-100 border border-gray-700">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-900 mb-4">
                  <svg
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Compra Realizada com Sucesso!
                </h2>
                <p className="text-gray-300">
                  Obrigado pela sua compra.
                </p>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-3xl font-bold mb-8 text-white text-center">Carrinho</h1>
        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center p-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-750"
            >
              <div className="w-24 h-24 bg-gray-900 rounded overflow-hidden flex-shrink-0 group">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-contain p-2 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold text-white">{item.product.name}</h2>
                <p className="text-purple-400">R$ {item.product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex rounded-lg overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-900 text-white min-w-[40px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="ml-4 text-red-400 hover:text-red-300 transition-colors"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="p-6 bg-gray-800 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">
                Total: R$ {total.toFixed(2)}
              </span>
              <button
                onClick={handleFinishPurchase}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
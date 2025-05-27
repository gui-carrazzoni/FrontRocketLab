import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import { useCart } from './context/CartContext';

function NavBar() {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Loja RocketLab
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-black-300">
            Produtos
          </Link>
          <Link to="/cart" className="hover:text-gray-300 flex items-center">
            Carrinho
            {itemCount > 0 && (
              <span className="ml-2 bg-blue-500 px-2 py-1 rounded-full text-sm text-black">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <NavBar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

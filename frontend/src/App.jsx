import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { cartAPI } from './services/api';

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = async () => {
    try {
      const response = await cartAPI.getCartItems();
      setCartCount(response.data.length);
    } catch (err) {
      console.error('Failed to fetch cart count');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header cartCount={cartCount} />
        <main>
          <Routes>
            <Route path="/" element={<Home onCartUpdate={fetchCartCount} />} />
            <Route path="/cart" element={<Cart onCartUpdate={fetchCartCount} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
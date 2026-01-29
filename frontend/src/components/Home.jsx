import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productAPI, cartAPI } from '../services/api';

const Home = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getProducts();
      if (response.data.length === 0) {
        await productAPI.seedProducts();
        const newResponse = await productAPI.getProducts();
        setProducts(newResponse.data);
      } else {
        setProducts(response.data);
      }
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await cartAPI.addToCart(productId);
      onCartUpdate();
      alert('Product added to cart!');
    } catch (err) {
      alert('Failed to add product to cart');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#2a8e9e] mb-4"></div>
        <div className="text-xl font-medium text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="text-xl text-red-600 bg-red-50 p-6 rounded-lg shadow-sm border border-red-100 text-center">
          <p className="font-bold">Oops!</p>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Header Section */}
      <div className="bg-[#2a8e9e] text-white py-12 mb-8 shadow-inner">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            New Arrivals
          </h1>
          <p className="text-blue-50 text-lg opacity-90">
            Showing 1-{products.length} of {products.length} products
          </p>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <ProductCard 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer hint for empty state */}
      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
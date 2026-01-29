import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartAPI } from '../services/api';

const Cart = ({ onCartUpdate }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      console.log('Fetching cart items...');
      const response = await cartAPI.getCartItems();
      console.log('Cart items response:', response.data);
      setCartItems(response.data);
    } catch (err) {
      console.error('Failed to fetch cart items:', err);
      console.error('Error details:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await cartAPI.removeFromCart(itemId);
      setCartItems(cartItems.filter(item => item._id !== itemId));
      onCartUpdate();
    } catch (err) {
      alert('Failed to remove item from cart');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.productId.price * item.quantity), 0).toFixed(2);
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#2a8e9e] mb-4"></div>
        <div className="text-xl font-medium text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-black text-gray-800 mb-4 uppercase tracking-tight">Shopping Cart</h1>
        <p className="text-gray-500 mb-8 text-lg">Your cart is currently empty.</p>
        <Link 
          to="/" 
          className="inline-block bg-[#2a8e9e] text-white px-10 py-4 font-bold rounded-none hover:bg-[#237a88] transition-all active:scale-95"
        >
          RETURN TO SHOP
        </Link>
      </div>
    );
  }

  const subtotal = parseFloat(calculateTotal());
  const tax = subtotal * 0.08;
  const finalTotal = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 border-l-8 border-[#2a8e9e] pl-6">
        <h1 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Shopping Cart</h1>
        <p className="text-gray-500 mt-1 font-medium">You have {cartItems.length} items in your bag</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200">
        <div className="lg:col-span-2 bg-white border-r border-gray-200">
          {/* Header Row - Added 5th column for Action */}
          <div className="hidden md:grid grid-cols-5 gap-4 p-6 bg-gray-50 border-b border-gray-200 font-bold text-xs uppercase tracking-widest text-gray-500">
            <span className="col-span-1">PRODUCT</span>
            <span className="text-center">QUANTITY</span>
            <span className="text-center">PRICE</span>
            <span className="text-center">TOTAL</span>
            <span className="text-center">ACTION</span>
          </div>
          
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div key={item._id} className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6 items-center hover:bg-gray-50 transition-colors">
                {/* Column 1: Product */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.productId.image} 
                    alt={item.productId.name}
                    className="w-20 h-20 object-cover border border-gray-100 rounded-none"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{item.productId.name}</h3>
                    <p className="text-xs text-[#2a8e9e] font-bold uppercase mt-1">{item.productId.category}</p>
                  </div>
                </div>
                
                {/* Column 2: Quantity */}
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-xs font-bold text-gray-400">QTY:</span>
                  <span className="bg-gray-100 px-4 py-2 font-bold text-gray-800 border border-gray-200">{item.quantity}</span>
                </div>
                
                {/* Column 3: Price */}
                <div className="flex justify-between md:justify-center items-center font-bold text-gray-900">
                  <span className="md:hidden text-xs font-bold text-gray-400">PRICE:</span>
                  <span>${item.productId.price}</span>
                </div>
                
                {/* Column 4: Total */}
                <div className="flex justify-between md:justify-center items-center font-black text-[#2a8e9e] text-lg">
                  <span className="md:hidden text-xs font-bold text-gray-400">TOTAL:</span>
                  ${(item.productId.price * item.quantity).toFixed(2)}
                </div>

                {/* Column 5: Action (Dustbin SVG) */}
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-xs font-bold text-gray-400">REMOVE:</span>
                  <button 
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-gray-400 hover:text-red-600 transition-colors p-2"
                    aria-label="Remove item"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gray-50">
            <Link 
              to="/" 
              className="text-gray-900 font-bold text-sm hover:text-[#2a8e9e] transition-colors flex items-center"
            >
              <span className="mr-2">←</span> CONTINUE SHOPPING
            </Link>
          </div>
        </div>
        
        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1 bg-white p-8">
          <h2 className="text-2xl font-black mb-8 uppercase tracking-tight border-b-4 border-gray-900 pb-2 inline-block">Order Summary</h2>
          
          <div className="space-y-4 mb-10">
            <div className="flex justify-between font-medium text-gray-600">
              <span>Subtotal</span>
              <span className="text-gray-900 font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium text-green-600">
              <span>Shipping</span>
              <span className="font-bold uppercase text-xs">FREE</span>
            </div>
            <div className="flex justify-between font-medium text-gray-600 text-sm">
              <span>Estimated Tax (8%)</span>
              <span className="text-gray-900 font-bold">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t-2 border-gray-900 flex justify-between items-end">
              <span className="text-lg font-black uppercase">Grand Total</span>
              <span className="text-3xl font-black text-[#2a8e9e]">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="w-full hover:bg-gray-900 text-white py-5 font-black uppercase tracking-widest bg-[#2a8e9e] transition-all active:scale-95 rounded-none shadow-xl">
            PROCEED TO CHECKOUT
          </button>
          
          <div className="mt-8 grid grid-cols-2 gap-4 text-[10px] font-bold uppercase text-gray-400 tracking-widest text-center">
            <div className="border border-gray-100 p-2">🚚 Fast Delivery</div>
            <div className="border border-gray-100 p-2">💰 30-Day Return</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
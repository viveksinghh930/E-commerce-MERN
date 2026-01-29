import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <header className="bg-[#2a8e9e] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center space-x-2 group"
        >
          <span className="transform group-hover:scale-110 transition-transform duration-200">🛍️</span>
          <span className="hover:text-blue-50 transition-colors">ShopEase</span>
        </Link>
        
        {/* Navigation Section */}
        <nav className="flex items-center space-x-4 md:space-x-8">
          <Link 
            to="/" 
            className="hidden sm:block font-medium hover:text-blue-100 transition-colors border-b-2 border-transparent hover:border-white pb-1"
          >
            Home
          </Link>
          
          <Link 
            to="/cart" 
            className="relative flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl hover:bg-white/20 transition-all border border-white active:scale-95"
          >
            <span className="text-xl ">🛒</span>
            <span className="hidden xs:block font-semibold">Cart</span>
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#2a8e9e] animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
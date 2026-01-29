import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full rounded-none">
      <div className="relative overflow-hidden rounded-none">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm px-2 py-1 shadow-sm rounded-none">
          <span className="text-xs font-bold text-[#2a8e9e] uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-[#2a8e9e] transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-tighter">Price</span>
              <span className="text-2xl font-black text-gray-900">${product.price}</span>
            </div>
            <div className={`text-[10px] font-bold px-2 py-1 rounded-none ${product.stock > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              {product.stock > 0 ? `IN STOCK: ${product.stock}` : 'OUT OF STOCK'}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product._id)}
            disabled={product.stock === 0}
            className="w-full bg-[#2a8e9e] text-white font-bold py-3 rounded-none hover:bg-[#237a88] active:scale-95 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>{product.stock === 0 ? '🚫' : '🛒'}</span>
            <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
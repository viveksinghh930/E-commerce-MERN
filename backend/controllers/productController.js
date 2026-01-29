const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed sample products (for demo purposes)
const seedProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    
    const sampleProducts = [
      {
        name: "Premium Bluetooth Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "Premium noise-canceling wireless headphones",
        category: "Electronics",
        stock: 15
      },
      {
        name: "Minimalist Chronograph Watch",
        price: 145.00,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        description: "Elegant steel watch with leather strap",
        category: "Fashion",
        stock: 8
      },
      {
        name: "Vortex Running Shoes",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        description: "Ultra-lightweight mesh for breathable comfort",
        category: "Sports",
        stock: 25
      },
      {
        name: "Smart Speaker",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
        description: "360-degree sound with AI voice assistant integration",
        category: "Electronics",
        stock: 12
      },
      {
        name: "Mechanical Keyboard",
        price: 129.00,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
        description: "Custom switches with customizable RGB lighting",
        category: "Electronics",
        stock: 18
      },
      {
        name: "Leather Sneakers",
        price: 75.50,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        description: "Versatile everyday style with premium comfort",
        category: "Fashion",
        stock: 30
      },
      
    ];

    const products = await Product.insertMany(sampleProducts);
    res.status(201).json({ message: 'Products seeded successfully', products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  seedProducts
};
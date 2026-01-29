const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if item already exists in cart
    const existingCartItem = await Cart.findOne({ productId });
    
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      const populatedItem = await Cart.findById(existingCartItem._id).populate('productId');
      return res.json({ message: 'Cart updated', item: populatedItem });
    }

    // Create new cart item
    const cartItem = new Cart({ productId, quantity });
    await cartItem.save();
    const populatedItem = await Cart.findById(cartItem._id).populate('productId');
    
    res.status(201).json({ message: 'Item added to cart', item: populatedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get cart items
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({}).populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  removeFromCart
};
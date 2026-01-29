const express = require('express');
const { addToCart, getCartItems, removeFromCart } = require('../controllers/cartController');

const router = express.Router();

router.post('/add', addToCart);
router.get('/', getCartItems);
router.delete('/:id', removeFromCart);

module.exports = router;
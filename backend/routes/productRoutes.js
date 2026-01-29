const express = require('express');
const { getProducts, seedProducts } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.post('/seed', seedProducts);

module.exports = router;
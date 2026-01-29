import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAPI = {
  getProducts: () => api.get('/products'),
  seedProducts: () => api.post('/products/seed'),
};

export const cartAPI = {
  getCartItems: () => api.get('/cart'),
  addToCart: (productId, quantity = 1) => api.post('/cart/add', { productId, quantity }),
  removeFromCart: (id) => api.delete(`/cart/${id}`),
};

export default api;
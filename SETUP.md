# E-commerce MERN App

A simple e-commerce application built with MERN stack featuring product listing and cart functionality.

## Features

- 📱 Responsive UI with Tailwind CSS
- 🛍️ Product listing with images and details
- 🛒 Add to cart functionality
- 📊 Cart management (view, remove items)
- 💰 Order summary with tax calculation
- 🎨 Clean, modern design

## Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products/seed` - Seed sample products

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart

## Usage

1. Start MongoDB service
2. Run backend server on port 5000
3. Run frontend on port 5173
4. Visit http://localhost:5173
5. Products will be automatically seeded on first load
6. Click "Add to Cart" to add products
7. View cart by clicking cart icon in header

## Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Database**: MongoDB
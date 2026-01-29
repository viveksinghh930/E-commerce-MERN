# E-commerce MERN Stack Application

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring modern UI design, product management, and shopping cart functionality.

## 🚀 Features

- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🛍️ **Product Catalog** - Browse products with images, prices, and categories
- 🛒 **Shopping Cart** - Add/remove items with real-time updates
- 💰 **Order Summary** - Calculate subtotal, tax (8%), and total
- 🎨 **Modern UI** - Clean, professional design with hover effects
- 🔄 **Real-time Updates** - Cart count updates across components
- 📊 **Product Management** - Seed sample products via API
- 🌐 **SPA Navigation** - React Router for seamless page transitions

## 🏗️ Project Structure

```
E-commerce/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── cartController.js   # Cart CRUD operations
│   │   └── productController.js # Product CRUD operations
│   ├── models/
│   │   ├── Cart.js            # Cart schema
│   │   └── Product.js         # Product schema
│   ├── routes/
│   │   ├── cartRoutes.js      # Cart API routes
│   │   └── productRoutes.js   # Product API routes
│   ├── .env                   # Environment variables
│   ├── package.json
│   └── server.js              # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.jsx       # Shopping cart page
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   ├── Home.jsx       # Product listing page
│   │   │   └── ProductCard.jsx # Individual product component
│   │   ├── services/
│   │   │   └── api.js         # Axios API configuration
│   │   ├── App.jsx            # Main app component
│   │   ├── index.css          # Tailwind CSS imports
│   │   └── main.jsx           # React entry point
│   ├── package.json
│   └── vite.config.js         # Vite configuration
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library with hooks
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Router DOM 7.13.0** - Client-side routing
- **Axios 1.13.4** - HTTP client for API calls
- **Vite 7.2.4** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.2.1** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 9.1.5** - MongoDB object modeling
- **CORS 2.8.6** - Cross-origin resource sharing
- **dotenv 17.2.3** - Environment variable management

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone <repository-url>
cd E-commerce
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start backend server:
```bash
npm start          # Production
npm run dev        # Development with nodemon
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Access Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🔌 API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products/seed` | Seed sample products |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get cart items |
| POST | `/api/cart/add` | Add item to cart |
| DELETE | `/api/cart/:id` | Remove item from cart |

## 🎯 Usage Guide

1. **Start the Application**
   - Ensure MongoDB is running
   - Start backend server (port 5000)
   - Start frontend development server (port 5173)

2. **Browse Products**
   - Visit homepage to view product catalog
   - Products are automatically seeded on first API call

3. **Shopping Cart**
   - Click "Add to Cart" on any product
   - View cart count in header
   - Navigate to cart page to manage items
   - Remove items using delete button

4. **Order Summary**
   - View subtotal, tax calculation, and total
   - Tax rate: 8%
   - Free shipping included

## 🔧 Development Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start with nodemon (auto-restart)
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🎨 UI Components

- **Header**: Navigation with cart count badge
- **ProductCard**: Reusable product display component
- **Home**: Product grid layout with responsive design
- **Cart**: Detailed cart view with order summary

## 🔒 Environment Variables

```env
# Backend (.env)
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

## 🚀 Deployment

### Backend (Node.js)
- Deploy to Heroku, Railway, or DigitalOcean
- Set environment variables in hosting platform
- Ensure MongoDB Atlas is accessible

### Frontend (React)
- Build: `npm run build`
- Deploy to Vercel, Netlify, or GitHub Pages
- Update API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request


## 👨💻 Author

Built with ❤️ using MERN Stack
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Route files
const auth = require('../routes/auth');
const products = require('../routes/products');
const cart = require('../routes/cart');
const orders = require('../routes/orders');
const contact = require('../routes/contact');

// Connect to database
const connectDB = require('../config/database');

// Load config
const config = require('../config/config');

// Connect to database
connectDB();

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

// Apply rate limiting
app.use('/api/', limiter);

// Set security headers
app.use(helmet());

// Enable CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

// Mount routers
app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/cart', cart);
app.use('/api/orders', orders);
app.use('/api/contact', contact);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
const errorHandler = require('../middleware/error');
app.use(errorHandler);

// Export for Vercel serverless function
module.exports = (req, res) => {
  app(req, res);
};

// For local development
if (require.main === module) {
  const PORT = config.PORT || 5000;
  const server = app.listen(
    PORT,
    console.log(`Server running in ${config.NODE_ENV} mode on port ${PORT}`)
  );

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  });
}

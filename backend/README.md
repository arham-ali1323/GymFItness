# German Fitness Backend API

Complete backend system for German Fitness gym website with authentication, product management, cart, and order processing.

## Features

- **Authentication**: JWT-based auth with role-based access
- **Product Management**: Full CRUD operations for gym equipment
- **Shopping Cart**: Add, remove, and update cart items
- **Order Processing**: Complete checkout flow with order tracking
- **Contact Management**: Handle customer inquiries
- **Admin Panel**: Role-based admin access for management
- **Security**: Password hashing, rate limiting, CORS protection

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Create .env file in backend directory
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gym-fitness
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRE=30d
NODE_ENV=development
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updatedetails` - Update user details

### Products
- `GET /api/products` - Get all products (with pagination, filtering)
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured` - Get featured products
- `GET /api/products/categories` - Get product categories
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update item quantity
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `GET /api/orders/admin` - Get all orders (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)
- `GET /api/orders/stats` - Get order statistics (Admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (Admin only)
- `GET /api/contact/:id` - Get single message (Admin only)
- `PUT /api/contact/:id` - Update message status (Admin only)
- `DELETE /api/contact/:id` - Delete message (Admin only)

## Database Models

### User
```javascript
{
  name: String,
  email: String,
  password: String (hashed),
  role: String ('user' | 'admin'),
  phone: String,
  address: Object
}
```

### Product
```javascript
{
  name: String,
  price: Number,
  originalPrice: Number,
  image: String,
  description: String,
  category: String,
  isFeatured: Boolean,
  rating: Number,
  stock: Number,
  sale: Boolean
}
```

### Cart
```javascript
{
  user: ObjectId,
  products: [{
    product: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalPrice: Number
}
```

### Order
```javascript
{
  user: ObjectId,
  orderItems: Array,
  shippingAddress: Object,
  phone: String,
  paymentMethod: String,
  totalPrice: Number,
  status: String
}
```

### Contact
```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: String
}
```

## Security Features

- JWT authentication
- Password hashing with bcrypt
- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Input validation
- Role-based access control
- Helmet.js security headers

## Error Handling

- Global error handler
- Validation error responses
- MongoDB error handling
- 404 route handler

## Development

The API includes comprehensive error handling, validation, and security features. All routes are properly documented and follow RESTful conventions.

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a secure JWT secret
3. Configure MongoDB connection string
4. Set up proper CORS origins
5. Use HTTPS in production

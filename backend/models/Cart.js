const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1'],
        default: 1
      },
      price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
    min: [0, 'Total price cannot be negative'],
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate total price before saving
cartSchema.pre('save', function(next) {
  this.totalPrice = this.products.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  this.updatedAt = Date.now();
  next();
});

// Method to add product to cart
cartSchema.methods.addProduct = function(productId, quantity, price) {
  const existingProductIndex = this.products.findIndex(
    item => item.product.toString() === productId.toString()
  );

  if (existingProductIndex !== -1) {
    // Update quantity if product already exists
    this.products[existingProductIndex].quantity += quantity;
  } else {
    // Add new product
    this.products.push({
      product: productId,
      quantity,
      price
    });
  }

  return this.save();
};

// Method to remove product from cart
cartSchema.methods.removeProduct = function(productId) {
  this.products = this.products.filter(
    item => item.product.toString() !== productId.toString()
  );
  return this.save();
};

// Method to update product quantity
cartSchema.methods.updateQuantity = function(productId, quantity) {
  const productIndex = this.products.findIndex(
    item => item.product.toString() === productId.toString()
  );

  if (productIndex !== -1) {
    if (quantity <= 0) {
      this.products.splice(productIndex, 1);
    } else {
      this.products[productIndex].quantity = quantity;
    }
  }

  return this.save();
};

module.exports = mongoose.model('Cart', cartSchema);

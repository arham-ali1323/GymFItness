const express = require('express');
const { body } = require('express-validator');
const {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart
} = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Validation middleware
const validateAddToCart = [
  body('productId')
    .isMongoId()
    .withMessage('Invalid product ID'),
  body('quantity')
    .isInt({ min: 1 })
    .withMessage('Quantity must be at least 1')
];

const validateUpdateCartItem = [
  body('quantity')
    .isInt({ min: 1 })
    .withMessage('Quantity must be at least 1')
];

router.use(protect); // All cart routes require authentication

router.get('/', getCart);
router.post('/', validateAddToCart, addToCart);
router.delete('/:productId', removeFromCart);
router.put('/:productId', validateUpdateCartItem, updateCartItem);
router.delete('/', clearCart);

module.exports = router;

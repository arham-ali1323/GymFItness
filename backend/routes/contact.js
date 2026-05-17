const express = require('express');
const { body } = require('express-validator');
const {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 50 })
    .withMessage('Name cannot be more than 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required'),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ max: 100 })
    .withMessage('Subject cannot be more than 100 characters'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 1000 })
    .withMessage('Message cannot be more than 1000 characters')
];

const validateUpdateStatus = [
  body('status')
    .isIn(['pending', 'responded', 'closed'])
    .withMessage('Invalid status')
];

router.post('/', validateContact, createContact);

// Admin routes
router.get('/', protect, authorize('admin'), getContacts);
router.get('/:id', protect, authorize('admin'), getContact);
router.put('/:id', protect, authorize('admin'), validateUpdateStatus, updateContactStatus);
router.delete('/:id', protect, authorize('admin'), deleteContact);

module.exports = router;

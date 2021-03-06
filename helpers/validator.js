// validation helpers

const { check } = require('express-validator');

// Register
exports.registerValidator = [
  check('name', 'Name is required')
    .notEmpty()
    .isLength({
      min: 4,
      max: 32,
    })
    .withMessage('name must be between 3 to 32 characters'),
  check('email').isEmail().withMessage('Must be a valid email address'),
  check('password', 'password is required').notEmpty(),
  check('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('password must contain a number'),
];

// Login
exports.loginValidator = [
  check('email').isEmail().withMessage('Must be a valid email address'),
  check('password', 'password is required').notEmpty(),
  check('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('password must contain a number'),
];

// Forgot Password
exports.forgotPasswordValidator = [
  check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Must be a valid email address'),
];

// Reset Password
exports.resetPasswordValidator = [
  check('password')
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least  6 characters long')
    .matches(/\d/)
    .withMessage('password must contain a number'),
  check('resetPasswordLink', 'resetPasswordLink is required').notEmpty(),
];

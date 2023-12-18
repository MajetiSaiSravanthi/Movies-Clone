const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /signup - User sign up
router.post('/signup', userController.signup);

// POST /login - User login
router.post('/login', userController.login);

// GET /profile - Get user profile
router.get('/profile', userController.getProfile);

// PUT /profile - Update user profile
router.put('/profile', userController.updateProfile);

// DELETE /profile - Delete user profile
router.delete('/profile', userController.deleteProfile);

module.exports = router;

const express = require('express');
const { getUsers,registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.get('/users', protect, getUsers);
router.post('/login', loginUser);

module.exports = router;
const express = require('express');
const { createUser, loginUser, editUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/edit', editUser);
router.post('/delete', deleteUser);

module.exports = router;

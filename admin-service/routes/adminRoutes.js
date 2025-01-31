const express = require('express');
const { editAdmin } = require('../controllers/adminController');
const router = express.Router();

router.post('/edit', editAdmin);

module.exports = router;

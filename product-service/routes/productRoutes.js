const express = require('express');
const { createProduct, editProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/create', createProduct);
router.post('/edit', editProduct);
router.post('/delete', deleteProduct);


module.exports = router;

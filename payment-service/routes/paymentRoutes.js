const express = require('express');
const { createPayment, editPayment, deletePayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/create', createPayment);
router.put('/edit', editPayment);
router.delete('/delete', deletePayment);

module.exports = router;

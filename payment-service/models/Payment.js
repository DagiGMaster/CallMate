const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const PaymentSchema = new mongoose.Schema(
  {
    paymentId: { type: Number, unique: true },
    paymentDesc: { type: String, required: false },
    paymentType: { type: String, required: false },
    amount: { type: Number, required: true },
    recieptNumber: { type: Number, required: false },
    creditCard: { type: String, required: false },
    creditCardType: { type: String, required: false },
    userDetail: { type: String, required: false },
    isSucceed: { type: Boolean, required: false },
    isCanceled: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

PaymentSchema.plugin(autoIncrement, { inc_field: 'paymentId' });

module.exports = mongoose.model('Payment', PaymentSchema);

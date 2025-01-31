const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
  {
    adminName: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    address: { type: String, required: false }, 
    isDenied: { type: Boolean, required: true}, 
  }
);

module.exports = mongoose.model('Admin', AdminSchema);

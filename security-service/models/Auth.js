const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true, },
    
  }
);

module.exports = mongoose.model('Auth', AuthSchema);

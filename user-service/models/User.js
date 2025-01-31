const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);


const UserSchema = new mongoose.Schema({
  userid: { type: Number, unique: true },
  username: { type: String, required: true },
  phonenumber:{ type: String, required: true },
  email: { type: String, required: false},
  password: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: Number, required: true },
  createdate: { type: Date, required: true },
  deleteamount: { type: Number, required: true },
  issubscriber: { type: Boolean, required: true },
  isguest: { type: Boolean, required: true }
});

UserSchema.plugin(autoIncrement, { inc_field: 'userid' });

module.exports = mongoose.model('User', UserSchema);

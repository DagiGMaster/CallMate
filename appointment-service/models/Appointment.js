const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const AppointmentSchema = new mongoose.Schema({
  appointmentID: { type: Number, unique: true },
  clientName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  service: { type: String, required: true },
  isDelted: { type: Boolean, required: false },
  isPayed: { type: Boolean, required: false },
});

AppointmentSchema.plugin(autoIncrement, { inc_field: "appointmentID" });

module.exports = mongoose.model("Appointment", AppointmentSchema);

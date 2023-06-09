const mongoose = require("mongoose");
const doctorSchema = require("../schemas").doctor;

module.exports = mongoose.model("doctor", doctorSchema);
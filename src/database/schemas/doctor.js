const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  emailId: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  userType: {
    type: Number,
    trim: true
  },
  countryCode: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  dob: {
    type: String,
    trim: true
  },
  anniversary: {
    type: String,
    trim: true
  },
  profilePic: {
    type: String,
    trim: true
  },
  refferalCode: {
    type: String,
    trim: true
  },
  status: {
    type: Number,
    trim: true
  },
  lastOtp: {
    type: Number,
    trim: true
  },
  createdBy: {
    type: String,
    trim: true
  },
  updatedBy: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});
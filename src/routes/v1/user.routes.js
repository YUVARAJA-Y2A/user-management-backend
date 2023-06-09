const { userController } = require("../../controllers/index");
const { verifyToken, verifySession } = require("../../middleware");

const express = require("express");
const userRoutes = express.Router();

let validator = require("express-joi-validation").createValidator({
  passError: true,
});
const {
  getOTP,
  verifyOTP,
  profile,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../../validators/user.validator");
userRoutes.get("/getAllUsers", userController.getAllUsers);

// userRoutes.post('/otp/get', validator.body(getOTP), userController.getOTP);

module.exports = userRoutes;

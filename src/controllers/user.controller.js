"use strict";

const { userService } = require("../services");
const { response } = require("../middleware");
const { messages, statusCodes } = require("../configs");
const { generateAccessToken } = require("../utils");
const { ThirdPartyServices } = require("../externalServices");
const utils = require("../utils");

const falseValues = [undefined, "undefined", null, "null"];

class UserController {}

UserController.getAllUsers = async (req, res, next) => {
  try {
    let input = { ...req.query };
    let result = await userService.getAllUsers(input);
    return response.success(req, res, result.code, result.data, result.message);
  } catch (err) {
    console.error(
      "@Controller user.controller @Method getAllUsers @Message ERROR",
      { data: err }
    );
    next(err);
  }
};

module.exports = UserController;

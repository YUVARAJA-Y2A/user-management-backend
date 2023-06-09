"use strict";

const { response } = require("../middleware");
const { messages, statusCodes } = require("../configs");
const { generateAccessToken } = require("../utils");
const { ThirdPartyServices } = require("../externalServices");
const utils = require("../utils");
const { productService } = require("../services");

const falseValues = [undefined, "undefined", null, "null"];

class ProductController {}

ProductController.getAllProducts = async (req, res, next) => {
  try {
    let input = { ...req.query };
    let result = await productService.getAllProducts(input);
    return response.success(req, res, result.code, result.data, result.message);
  } catch (err) {
    console.error(
      "@Controller user.controller @Method getAllUsers @Message ERROR",
      { data: err }
    );
    next(err);
  }
};

ProductController.createProduct = async (req, res, next) => {
  try {
    let input = req.body;
    let result = await productService.createProduct(input);
    return response.success(req, res, result.code, result.data, result.message);
  } catch (err) {
    console.error(
      "@Controller user.controller @Method getAllUsers @Message ERROR",
      { data: err }
    );
    next(err);
  }
};

module.exports = ProductController;

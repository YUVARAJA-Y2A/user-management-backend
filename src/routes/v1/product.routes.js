const { productController } = require("../../controllers/index");
const { verifyToken, verifySession } = require("../../middleware");

const express = require("express");
const { createProductSchema } = require("../../validators/product.validator");
const productRoutes = express.Router();

let validator = require("express-joi-validation").createValidator({
  passError: true,
});

productRoutes.get("/getAllProducts", productController.getAllProducts);
productRoutes.post(
  "/createProduct",
  validator.body(createProductSchema),
  productController.createProduct
);
module.exports = productRoutes;

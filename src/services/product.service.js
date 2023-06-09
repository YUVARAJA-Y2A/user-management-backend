const { statusCodes, messages, config } = require("../configs");
const { products } = require("../database/sql");
const getPagingData = require("../utils/pagination");
const { errorObjGeneator } = require("../middleware").errorHandler;

class ProductService {}

ProductService.getAllProducts = async (input) => {
  try {
    let { page, size, id } = input;

    let condition = {};
    if (id) condition.id = id;
    let { limit, offset } = getPagingData(page, size);

    let result = await products.findAll({});

    return {
      code: statusCodes.HTTP_OK,
      message: messages.success,
      data: result ? result : {},
    };
  } catch (err) {
    throw errorObjGeneator(err);
  }
};

ProductService.createProduct = async (input) => {
  try {
    let { image, title, price, description, published } = input;

    let body = {
      image: image,
      title: title,
      price: price,
      description: description,
      published: published ? published : false,
    };

    let result = await products.create(body);

    return {
      code: statusCodes.HTTP_OK,
      message: messages.success,
      data: result ? result : {},
    };
  } catch (err) {
    throw errorObjGeneator(err);
  }
};

module.exports = ProductService;

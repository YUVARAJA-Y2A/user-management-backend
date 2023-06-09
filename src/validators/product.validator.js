const Joi = require("joi");
const utils = require("../utils");

const createProductSchema = Joi.object({
  image: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.number(),
  description: Joi.string().required(),
  published: Joi.bool().required(),
});

module.exports = { createProductSchema };

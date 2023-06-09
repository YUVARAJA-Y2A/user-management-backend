const initializeRoutes = (app) => {
  app.use("/api/v1/user", require("./v1/user.routes"));
  app.use("/api/v1/product", require("./v1/product.routes"));
};

module.exports = initializeRoutes;

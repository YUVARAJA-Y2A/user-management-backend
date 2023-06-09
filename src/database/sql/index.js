const { Sequelize, DataTypes } = require("sequelize");
const { mysqlDbConfig } = require("../../configs");

const sequelize = new Sequelize(
  mysqlDbConfig.database,
  mysqlDbConfig.user,
  mysqlDbConfig.password,
  {
    host: mysqlDbConfig.host,
    dialect: mysqlDbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: mysqlDbConfig.pool.max,
      min: mysqlDbConfig.pool.min,
      acquire: mysqlDbConfig.pool.acquire,
      idle: mysqlDbConfig.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL Database Connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//   foreignKey: "product_id",
//   as: "review",
// });

// db.reviews.belongsTo(db.products, {
//   foreignKey: "product_id",
//   as: "product",
// });

module.exports = {
  products: require("./product.model")(sequelize, DataTypes),
  reviews: require("./review.model")(sequelize, DataTypes),
};

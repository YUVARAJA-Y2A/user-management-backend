let CONFIG = require("./config")(process.env.CONFIG_ARG);
const mongoose = require("mongoose");

module.exports = {
  mongoDB: async () => {
    mongoose.connect(CONFIG.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    let db = mongoose.connection;
    db.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running"
      );
      process.exit();
    });
    console.log("Database connection established.");
  },

  mySqlDB: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "user_management_schema",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const app = express();
app.enable("trust proxy");

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(
  require("morgan")("dev", {
    skip: function (req, res) {
      return res.statusCode > 500;
    },
  })
);
const args = process.argv.slice(2)[0];
if (args == undefined) {
  console.log("Error : Please provide environment");
} else {
  process.env.CONFIG_ARG = args;
  console.log(path.join(process.cwd(), `.env.dev`));
  if (!/PROD/.test(process.env.CONFIG_ARG)) {
    require("dotenv").config({ path: path.join(process.cwd(), `.env.dev`) });
  }
  let CONFIG = require("./src/configs/config")(args);
  const swaggerDocument = require("./docs/swagger.json");
  const { handler } = require("./src/middleware/errorHandler");
  // middle wares section
  const { CustomLogger } = require("./src/middleware/logger");
  let appLogger = new CustomLogger();
  //console.log = () => { }
  app.use(appLogger.requestDetails(appLogger));
  const routers = require("./src/routes");
  routers(app);
  app.use(handler);
  const opts = {
    explorer: false,
    swaggerOptions: {
      validatorUrl: null,
    },
    customSiteTitle: "User Management System",
    customfavIcon: "",
  };

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, opts));

  const port = CONFIG.PORT || 2172;

  app.listen(port, () =>
    console.log(`App listening at port http://localhost:${port}`)
  );
}

// const internalAPI = require('./internalAPI');

module.exports = {
  mongoDbConfig: require("./db.config").mongoDB,
  mysqlDbConfig: require("./db.config").mySqlDB,
  messages: require("./codeMsgs"),
  statusCodes: require("./httpCodes"),
  config: require("./config"),
  thirdPartyAPI: require("./thirdPartAPI"),
  InternalAPIs: require("./internalAPI"),
};

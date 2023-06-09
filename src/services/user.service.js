const { statusCodes, messages, config } = require("../configs");
const getPagingData = require("../utils/pagination");
const { errorObjGeneator } = require("../middleware").errorHandler;

class UserService {}

UserService.getAllUsers = async () => {
  try {
    let { page, size, id } = input;

    let condition = {};
    if (id) condition.id = id;
    let { limit, offset } = getPagingData(page, size);

    let result;

    return {
      code: statusCodes.HTTP_OK,
      message: messages.success,
      data: result ? result : {},
    };
  } catch (err) {
    throw errorObjGeneator(err);
  }
};

module.exports = UserService;

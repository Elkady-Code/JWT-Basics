const CustomAPIError = require("./custom-error");
const unAuthenticatedError = require("./unauthenticated");
const BadRequest = require("./bad-request");

module.exports = {
  CustomAPIError,
  unAuthenticatedError,
  BadRequest,
};

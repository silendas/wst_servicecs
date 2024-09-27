const { errorResponse } = require('../utils/responseHelper');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  return errorResponse(res, 'An unexpected error occurred', 500);
};

module.exports = errorHandler;
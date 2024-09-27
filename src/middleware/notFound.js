const { errorResponse } = require('../utils/responseHelper');

const notFound = (req, res, next) => {
  return errorResponse(res, 'Route not found', 404);
};

module.exports = notFound;
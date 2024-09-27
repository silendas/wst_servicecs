const createResponse = (message, status, data = null) => ({ message, status, data });

exports.successResponse = (res, message, data, status = 200) => {
  return res.status(status).json(createResponse(message, status, data));
};

exports.errorResponse = (res, message, status = 500) => {
  return res.status(status).json(createResponse(message, status));
};
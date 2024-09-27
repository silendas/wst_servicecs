const userService = require('../services/userService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return successResponse(res, 'Users retrieved successfully', users);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return successResponse(res, 'User created successfully', user, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    return successResponse(res, 'User updated successfully', user);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    return successResponse(res, 'User deleted successfully', null, 204);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getUserByEmailOrName = async (req, res) => {
  try {
    const users = await userService.getUserByEmailOrName(req.query);
    return successResponse(res, 'Users retrieved successfully', users);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
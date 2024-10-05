const roomService = require('../services/roomService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await roomService.getAllRooms();
    return successResponse(res, 'Rooms retrieved successfully', rooms);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.createRoom = async (req, res) => {
  try {
    const room = await roomService.createRoom(req.body);
    return successResponse(res, 'Room created successfully', room);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await roomService.updateRoom(req.params.id, req.body);
    return successResponse(res, 'Room updated successfully', room);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    await roomService.deleteRoom(req.params.id);
    return successResponse(res, 'Room deleted successfully', null);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
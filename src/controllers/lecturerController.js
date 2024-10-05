const lecturerService = require('../services/lecturerService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

exports.getAllLecturers = async (req, res) => {
  try {
    const lecturers = await lecturerService.getAllLecturers();
    return successResponse(res, 'Lecturers retrieved successfully', lecturers);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.createLecturer = async (req, res) => {
  try {
    const lecturer = await lecturerService.createLecturer(req.body);
    return successResponse(res, 'Lecturer created successfully', lecturer);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.updateLecturer = async (req, res) => {
  try {
    const lecturer = await lecturerService.updateLecturer(req.params.id, req.body);
    return successResponse(res, 'Lecturer updated successfully', lecturer);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.deleteLecturer = async (req, res) => {
  try {
    await lecturerService.deleteLecturer(req.params.id);
    return successResponse(res, 'Lecturer deleted successfully', null);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
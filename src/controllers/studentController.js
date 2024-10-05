const studentService = require('../services/studentService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    return successResponse(res, 'Students retrieved successfully', students);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    return successResponse(res, 'Student created successfully', student);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body);
    return successResponse(res, 'Student updated successfully', student);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    return successResponse(res, 'Student deleted successfully', null);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
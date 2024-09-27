const courseService = require('../services/courseService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    return successResponse(res, 'Courses retrieved successfully', courses);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(req.body);
    return successResponse(res, 'Course created successfully', course, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await courseService.updateCourse(req.params.id, req.body);
    return successResponse(res, 'Course updated successfully', course);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await courseService.deleteCourse(req.params.id);
    return successResponse(res, 'Course deleted successfully', null, 204);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
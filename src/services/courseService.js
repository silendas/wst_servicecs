const Course = require('../models/courseModel');

exports.getAllCourses = async () => {
  return await Course.findAll();
};

exports.createCourse = async (courseData) => {
  return await Course.create(courseData);
};

exports.updateCourse = async (id, courseData) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Course not found');
  return await course.update(courseData);
};

exports.deleteCourse = async (id) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Course not found');
  return await course.destroy();
};
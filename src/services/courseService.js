const Course = require('../models/courseModel');

exports.getAllCourses = async () => {
  return await Course.findAll({
    where: { deleted: false }
  });
};

exports.createCourse = async (courseData) => {
  return await Course.create(courseData);
};

exports.updateCourse = async (id, courseData) => {
  const course = await Course.findByPk(id);
  if (!course || course.deleted) throw new Error('Course not found'); // Tambahkan kondisi ini
  return await course.update(courseData);
};

exports.deleteCourse = async (id) => {
  const course = await Course.findByPk(id);
  if (!course || course.deleted) throw new Error('Course not found'); // Tambahkan kondisi ini
  return await course.update({ deleted: true }); // Ubah menjadi soft delete
};
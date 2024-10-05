const Student = require('../models/studentModel');

exports.getAllStudents = async () => {
  return await Student.findAll({
    where: { deleted: false }
  });
};

exports.createStudent = async (studentData) => {
  return await Student.create(studentData);
};

exports.updateStudent = async (id, studentData) => {
  const student = await Student.findByPk(id);
  if (!student || student.deleted) throw new Error('Student not found');
  return await student.update(studentData);
};

exports.deleteStudent = async (id) => {
  const student = await Student.findByPk(id);
  if (!student || student.deleted) throw new Error('Student not found');
  return await student.update({ deleted: true });
};
const Lecturer = require('../models/lecturerModel');

exports.getAllLecturers = async () => {
  return await Lecturer.findAll({
    where: { deleted: false } // Tambahkan kondisi ini
  });
};

exports.createLecturer = async (lecturerData) => {
  return await Lecturer.create(lecturerData);
};

exports.updateLecturer = async (id, lecturerData) => {
  const lecturer = await Lecturer.findByPk(id);
  if (!lecturer || lecturer.deleted) throw new Error('Lecturer not found'); // Tambahkan kondisi ini
  return await lecturer.update(lecturerData);
};

exports.deleteLecturer = async (id) => {
  const lecturer = await Lecturer.findByPk(id);
  if (!lecturer || lecturer.deleted) throw new Error('Lecturer not found'); // Tambahkan kondisi ini
  return await lecturer.update({ deleted: true }); // Ubah menjadi soft delete
};
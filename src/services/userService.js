const User = require('../models/userModel');

exports.getAllUsers = async () => {
  return await User.findAll({ where: { deleted: false } });
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.updateUser = async (id, userData) => {
  return await User.update(userData, { where: { id, deleted: false } });
};

exports.deleteUser = async (id) => {
  return await User.update({ deleted: true }, { where: { id } });
};

exports.getUserByEmailOrName = async (query) => {
  return await User.findAll({
    where: {
      deleted: false,
      [Op.or]: [
        { email: query.email },
        { name: query.name }
      ]
    }
  });
};
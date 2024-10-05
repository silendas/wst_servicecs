const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Lecturer = sequelize.define('Lecturer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deleted: { 
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Lecturer;
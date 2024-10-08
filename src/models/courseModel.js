const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Course = sequelize.define('Course', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deleted: { 
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Course;
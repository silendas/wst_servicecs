require('dotenv').config(); // Tambahkan ini di baris paling atas

module.exports = {
  db: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  port: process.env.PORT,
};
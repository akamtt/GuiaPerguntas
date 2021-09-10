const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', '08162200', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;

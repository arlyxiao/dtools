const { Sequelize } = require('sequelize');
const { connection } = require('../connection');
const db = connection();


const userModel = () => {
  return db.define('user', {
    id: { type: Sequelize.STRING, primaryKey: true},
    email: Sequelize.STRING,
    name: Sequelize.STRING
  });
};

exports.userModel = userModel;

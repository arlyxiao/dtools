const {Sequelize} = require('sequelize');


module.exports.createStore = () => {
  const db = new Sequelize('testgraph', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
  });

  const users = db.define('user', {
    id: { type: Sequelize.STRING, primaryKey: true},
    email: Sequelize.STRING,
    name: Sequelize.STRING
  });

  return { users };
};

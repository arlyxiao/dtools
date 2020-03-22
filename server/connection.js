const { Sequelize } = require('sequelize');
const env = require('./config');

const connection = () => {
  // return new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  //   host: env.DB_HOST,
  //   dialect: env.DB_DRIVE,
  
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     idle: 10000
  //   },
  
  // });
  return new Sequelize({
    dialect: 'sqlite',
    storage: `./store.sqlite`
  });
};

exports.connection = connection;

var debug = require('debug')('hoopstakes:sequelize');
const Sequelize = require('sequelize');
const connection = new Sequelize('hoopstakes', 'root', 'password', {
    host: 'db',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false,
    logging( str ) {
        if( /connection/.test( str ) ){
            debug( str );
        }
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

connection.authenticate().then(() => {
    debug('Connection has been established successfully.');
  }).catch(err => {
    debug('Unable to connect to the database: %O', err);
  });

module.exports = connection;
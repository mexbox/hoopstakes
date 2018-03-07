const debug = require('debug')('hoopstakes:sequelize');
const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};

const sequelize = new Sequelize('hoopstakes', 'root', 'password', {
    host: 'db',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false,
    socketPath: '/var/run/mysqld/mysqld.sock',
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

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
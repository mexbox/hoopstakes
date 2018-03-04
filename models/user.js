'use strict';
const Sequelize = require('sequelize');
const connection = require('../helpers/dbConnection');

var User = connection.define('User', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
}, {});

User.associate = function(models) {
  // associations can be defined here
};

module.exports = User;
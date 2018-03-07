'use strict';
const Sequelize = require('sequelize');
const connection = require('../helpers/dbConnection');

var Tournament = connection.define('User', {
  name: Sequelize.STRING,
  season: Sequelize.INTEGER
}, {});

Tournament.associate = function(models) {
  // associations can be defined here
};

module.exports = User;
'use strict';
const Sequelize = require('sequelize');
const connection = require('../helpers/dbConnection');

var Team = connection.define('Team', {
  name: Sequelize.STRING,
  conference: Sequelize.STRING,
  logo: Sequelize.STRING,
  description: Sequelize.STRING
}, {});

Team.associate = function(models) {
  // associations can be defined here
};

module.exports = Team;
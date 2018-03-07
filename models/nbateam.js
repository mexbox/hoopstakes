'use strict';
const Sequelize = require('sequelize');
const connection = require('../helpers/dbConnection');

var NbaTeam = connection.define('NbaTeam', {
  nbaStatId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  conference: Sequelize.STRING,
  logo: Sequelize.STRING,
  description: Sequelize.STRING
}, {});

NbaTeam.associate = function(models) {
  // associations can be defined here
};

module.exports = NbaTeam;
// 'use strict';
const Sequelize = require('sequelize');
const connection = require('../helpers/dbConnection');

module.exports = (sequelize, DataTypes) => {
  var Tournaments = sequelize.define('Tournaments', {
    name: DataTypes.STRING,
    season: DataTypes.INTEGER
  }, {});
  Tournaments.associate = function(models) {
    // associations can be defined here
  };
  return Tournaments;
};
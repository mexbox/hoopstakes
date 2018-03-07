'use strict';

const debug = require('debug')('hoopstakes:models:team');

module.exports = (sequelize, DataTypes) => {
  var Tournament = sequelize.define('User', {
    name: DataTypes.STRING,
    season: DataTypes.INTEGER
  }, {});

  Tournament.associate = (models) => {

  };

  return Tournament;
};
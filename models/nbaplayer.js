'use strict';
var debug = require('debug')('hoopstakes:models:player');

module.exports = (sequelize, DataTypes) => {
  var NbaPlayer = sequelize.define('NbaPlayer', {
    nbaStatId: DataTypes.INTEGER,
    nbaTeamStatId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    stats: DataTypes.JSON,
  });

  NbaPlayer.associate = (models) => {
    NbaPlayer.belongsTo(models.NbaTeam, {
      foreignKey: 'nbaTeamStatId',
      onDelete: 'CASCADE'
    });
  };

  return NbaPlayer;
};

'use strict';
var debug = require('debug')('hoopstakes:models:nbagame');

module.exports = (sequelize, DataTypes) => {
  var NbaGame = sequelize.define('NbaGame', {
    homeTeamId: DataTypes.INTEGER,
    awayTeamId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    stats: DataTypes.JSON,
    gameDate: DataTypes.DATE
  });

  NbaGame.associate = (models) => {
    NbaGame.belongsTo(models.NbaTeam, {
        foreignKey: 'homeTeamId',
        onDelete: 'CASCADE'
      });
  };

  NbaGame.associate = (models) => {
    NbaGame.belongsTo(models.NbaTeam, {
        foreignKey: 'awayTeamId',
        onDelete: 'CASCADE'
      });
  };

  NbaGame.getAllGames = async() =>
  {
    const query = {
      order: [
        ['id','ASC'],
      ],
    };

    return await NbaGame.findAll(query);
  };

  return NbaGame;
};
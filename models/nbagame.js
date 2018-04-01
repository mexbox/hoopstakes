'use strict';
var debug = require('debug')('hoopstakes:models:nbagame');

module.exports = (sequelize, DataTypes) => {
  const NbaGame = sequelize.define('NbaGame', {
    homeTeamId: DataTypes.INTEGER,
    awayTeamId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    stats: DataTypes.JSON,
    gameDate: DataTypes.DATE
  });

  NbaGame.associate = (models) => {
    NbaGame.belongsTo(models.NbaTeam, {
        as: 'homeTeam',
        foreignKey: 'homeTeamId',
        onDelete: 'CASCADE'
      });
    NbaGame.belongsTo(models.NbaTeam, {
        as: 'awayTeam',
        foreignKey: 'awayTeamId',
        onDelete: 'CASCADE'
      });
  };

  NbaGame.getAllGames = async() => {
    const query = {
      attributes: ['homeTeamId', 'awayTeamId', 'gameDate', 'status', [sequelize.fn('DATE', sequelize.col('gameDate')), 'formattedDate']],
      order: [
        ['gameDate','ASC']
      ]
    };
    return await NbaGame.findAll(query);
  };

  NbaGame.getGamesByDay = async(teams) => {
    const games = await NbaGame.getAllGames();
    const datesObj = {};
    const gamesArray = [];
    
    games.forEach((game, index) => {
      const gameDate = game.get('formattedDate')
      game.setDataValue('awayTeam', teams.find((team) => {
        return team.id === game.awayTeamId
      }));
      game.setDataValue('homeTeam', teams.find((team) => {
        return team.id === game.homeTeamId
      }));
      if(gameDate in datesObj) {
        datesObj[gameDate].push(game);
      }else{
        datesObj[gameDate] = [game];
      }
    });
    
    for (const date in datesObj) {
      gamesArray.push({
        date : date,
        games : datesObj[date]
      });
    }

    return gamesArray;
  };

  return NbaGame;
};
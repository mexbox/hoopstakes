'use strict';
var debug = require('debug')('hoopstakes:models:nbagame');

module.exports = (sequelize, DataTypes) => {
  var NbaGame = sequelize.define('NbaGame', {
    homeTeamId: DataTypes.INTEGER,
    awayTeamId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    stats: DataTypes.JSON,
    gameDate: DataTypes.DATE,
    formattedDate: DataTypes.DATE
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

  NbaGame.getAllGames = async(NbaTeams) =>
  {
    const query = {
      attributes: ['gameDate', 'status', [sequelize.fn('DATE', sequelize.col('gameDate')), 'formattedDate']],
      order: [
        ['id','ASC'],
      ],
      include: [{ model: NbaTeams, as: 'awayTeam', required: true},{ model: NbaTeams, as: 'homeTeam', required: true}],
    };

    return await NbaGame.findAll(query);
  };

  NbaGame.getGamesByDay = async(NbaTeams) =>
  {
    const games = await NbaGame.getAllGames(NbaTeams);
    const datesObj = {};
    const gamesArray = [];
    
    games.forEach((game, index) => {
      if(game.formattedDate in datesObj) {
        datesObj[game.formattedDate].push(game);
      }else{
        datesObj[game.formattedDate] = [game];
      }
    });
    
    for (let i = 0; datesObj.length < i; i++) {
      debug(datesObj);
      // debug(datesObj);
      // gamesArray.push({
      //   date : `${date}`,
      //   games : datesObj[`${date}`]
      // });
    }

    return datesObj;

  };

  return NbaGame;
};
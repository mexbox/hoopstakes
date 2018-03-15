'use strict';

const debug = require('debug')('hoopstakes:models:team');

module.exports = (sequelize, DataTypes) => {
  var Tournament = sequelize.define('User', {
    name: DataTypes.STRING,
    season: DataTypes.INTEGER,
    config: DataTypes.JSON,
  }, {});

  Tournament.associate = (models) => {
    Tournament.hasMany(models.Participants, {
      sourceKey: 'id',
      foreignKey: 'tournamentId'
    });
  };
 
  Tournament.findTourneysByUser = async (userId) => {
    const query = {
      where: {
      },
      order: [
        ['id','ASC'],
      ],
    };

    if( includePlayers ) {
      query.include =  [{ model: Participants, where: { userId : userId }, required: true}];
    }

    return await NbaTeam.findAll(query);
  }

  return Tournament;
};
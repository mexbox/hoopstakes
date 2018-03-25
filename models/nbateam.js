'use strict';

const debug = require('debug')('hoopstakes:models:team');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var NbaTeam = sequelize.define('NbaTeam', {
    nbaStatId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    conference: DataTypes.STRING,
    logo: DataTypes.STRING,
    description: DataTypes.STRING
  },{});

  NbaTeam.associate = (models) => {
    NbaTeam.hasMany(models.NbaPlayer, {
      sourceKey: 'nbaStatId',
      foreignKey: 'nbaTeamStatId'
    });
  };

  NbaTeam.associate = (models) => {
    NbaTeam.hasMany(models.NbaGame, {
      sourceKey: 'id',
      foreignKey: 'homeTeamId'
    });
  };

  NbaTeam.associate = (models) => {
    NbaTeam.hasMany(models.NbaGame, {
      sourceKey: 'id',
      foreignKey: 'awayTeamId'
    });
  };

  NbaTeam.getTeamsByConference = async (conference, includePlayers) => {
    const query = {
      where: {
        rank: {
          [Op.lte]: 8 //hardcoded to only pull playoff teams
        },
        conference: conference
      },
      order: [
        ['rank','ASC'],
      ],
    };

    if( includePlayers ) {
      query.include =  [{ model: includePlayers, required: true}];
    }

    return await NbaTeam.findAll(query);
  }

  return NbaTeam;
};
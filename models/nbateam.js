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
    NbaTeam.hasMany(models.NbaGame, {
          sourceKey: 'id',
          foreignKey: 'homeTeamId'
    });
    NbaTeam.hasMany(models.NbaGame, {
      sourceKey: 'id',
      foreignKey: 'awayTeamId'
    });
  };

  NbaTeam.getTeamsWithPlayers = async () => {
    const query = {
      where: {
        rank: {
          [Op.lte]: 8 //hardcoded to only pull playoff teams
        }
      },
      order: [
        ['rank','ASC'],
        [sequelize.fn('json_extract', sequelize.col('NbaPlayers.stats'), '$.ppg'), 'DESC']
      ],
      include:  [{
        model: sequelize.models.NbaPlayer,
        required: true,
      }]
    };

    return await NbaTeam.findAll(query);
  }

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

  NbaTeam.getAllTeams = async() =>
  {
    const query = {
      order: [
        ['id','ASC'],
      ],
    };

    return await NbaTeam.findAll(query);
  };

  return NbaTeam;
};
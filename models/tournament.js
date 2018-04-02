'use strict';

const debug = require('debug')('hoopstakes:models:tournament');

module.exports = (sequelize, DataTypes) => {
  var Tournament = sequelize.define('Tournament', {
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
        ['createdAt','DESC'],
      ],
    };
    query.include =  [{ model: sequelize.models.Participants, where:{ userId : userId }, required: true}];
    return await Tournament.findAll(query);
  }

  Tournament.newTourney = async(params) => {
    const tourney = await Tournament.create({ name : params.name, season : 1 });
    return await sequelize.models.Participants.create({ tournamentId: tourney.id, userId : params.userId, role : 1});
  };

  Tournament.isAdmin = async(params) => {
    const query = {
      where: { userId: params.userId, tournamentId : params.tournamentId, role : 1}
    }
    const adminRecord = await sequelize.models.Participants.findAll(query);
    if(adminRecord.length) { return true; }
    return false;
  };

  Tournament.updateTourney = async(params) => {
    if(await Tournament.isAdmin(params, sequelize.models.Participants)){
      return await Tournament.update( params.columns , { where: { id: params.tournamentId } });
    }
    throw new ApiError('not admin!');
  };

  return Tournament;
};

function ApiError( message = 'Default Error'){
  this.name = 'ApiError';
  this.message = message; 
}
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
 
  Tournament.findTourneysByUser = async (userId, Participants) => {
    const query = {
      where: {
      },
      order: [
        ['id','ASC'],
      ],
    };
    query.include =  [{ model: Participants, where:{ userId : userId }, required: true}];
    return await Tournament.findAll(query);
  }

  Tournament.newTourney = async(params, Participants) => {
    console.log(params);
      const tourney = await Tournament.create({ name : params.name, season : 1 });
      return await Participants.create({ tournamentId: tourney.id, userId : params.userId, role : 1});
  };

  Tournament.isAdmin = async(params, Participants) => {
    const query = {
      where: { userId: params.userId, tournamentId : params.tournamentId, role : 1}
    }
    const adminPart = await Participants.findAll(query);
    console.log('the Participants:');    
    if(adminPart.length)
    {
      console.log(adminPart);
      return true;
    }
    return false;
  };

  Tournament.updateTourney = async(params, Participants) => {
    if(await Tournament.isAdmin(params, Participants)){
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
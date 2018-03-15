'use strict';
module.exports = (sequelize, DataTypes) => {
  var Participants = sequelize.define('Participants', {
    tournamentId: DataTypes.STRING,
    userId: DataTypes.STRING,
    config: DataTypes.JSON,
    role: DataTypes.INTEGER
  }, {});

  Participants.associate = (models) => {
    Participants.belongsTo(models.Tournament, {
        foreignKey: 'tournamentId',
        onDelete: 'CASCADE'
      });
  };

  return Participants;
};
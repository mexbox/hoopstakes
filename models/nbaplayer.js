'use strict';
const Sequelize = require('sequelize');
const connection = require('../helpers/dbConnection');

var NbaPlayer = sequelize.define('NbaPlayer', {
  nbaStatId: DataType.INTEGER,
  nbaTeamStatId: DataType.INTEGER,
  name: DataTypes.STRING,
}, {});

NbaPlayer.associate = function(models) {
  NbaPlayer.belongsTo(models.NbaTeam, {
    foreignKey: 'nbaTeamStatId',
    onDelete: 'CASCADE'
  });
};

module.exports = NbaPlayer;

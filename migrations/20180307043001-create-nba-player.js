'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    try{
      return queryInterface.createTable('NbaPlayers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nbaStatId: {
          type: Sequelize.INTEGER,
        },
        nbaTeamStatId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'NbaTeams',
            key: 'nbaStatId'
          }
        },
        name: {
          type: Sequelize.STRING
        },
        imgUrl: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
      
    } catch ( e ) {
      console.log(e);
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NbaPlayers');
  }
};
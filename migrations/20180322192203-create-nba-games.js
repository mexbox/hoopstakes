'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NbaGames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeamId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'NbaTeams',
            key: 'id'
          }
      },
      awayTeamId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'NbaTeams',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.INTEGER
      },  
      stats: {
        type: Sequelize.JSON
      },
      gameDate: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.addIndex('NbaGames', ['homeTeamId']);
    await queryInterface.addIndex('NbaGames', ['awayTeamId']);
    return queryInterface.addIndex('NbaGames', ['gameDate']);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NbaGames');
  }
};
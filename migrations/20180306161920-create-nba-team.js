'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NbaTeams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nbaStatId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      conference: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      description: {
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

    return queryInterface.addIndex('NbaTeams', ['nbaStatId']);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NbaTeams');
  }
};
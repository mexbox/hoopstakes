'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Participants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tournamentId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Tournaments',
            key: 'id'
          }
      },
      userId: {
        type: Sequelize.STRING
      },
      config: {
        type: Sequelize.JSON
      },
      role: {
        type: Sequelize.INTEGER
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
    await queryInterface.addIndex('Participants', ['userId']);
    return queryInterface.addIndex('Participants', ['tournamentId']);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Participants');
  }
};
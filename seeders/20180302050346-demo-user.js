'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'Rafa',
        lastName: 'Barroso',
        email: 'rafa@mexbos.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Corey',
        lastName: 'Kepple',
        email: 'corey@mexbos.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Moves', [
      {userId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Moves', null, {});
  }
};

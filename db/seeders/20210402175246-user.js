'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {username: 'User1', email: 'user1@gmail.com', password: '$2a$10$TX.vcAoqU0cXRFGJzZU1BO.h.FhnvkBWt3FAsQFb1NfoPxbmMhg.i', wins: 0, ties: 0, losses: 0, createdAt: new Date(), updatedAt: new Date()},
      {username: 'User2', email: 'user2@gmail.com', password: '$$2a$10$Df3ZJdr9/Qg9zQ73ZHsVs.bUIZzcxfcOR3uZdHQT1gQrhEF/i7c1.', wins: 0, ties: 0, losses: 0, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

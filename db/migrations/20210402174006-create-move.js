'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      movesCount: {
        type: Sequelize.STRING(255)
      },
      rock: {
        type: Sequelize.STRING(255)
      },
      paper: {
        type: Sequelize.STRING(255)
      },
      scissors: {
        type: Sequelize.STRING(255)
      },
      lizard: {
        type: Sequelize.STRING(255)
      },
      spock: {
        type: Sequelize.STRING(255)
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Moves');
  }
};
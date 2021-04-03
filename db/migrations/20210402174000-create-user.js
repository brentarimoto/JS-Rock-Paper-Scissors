'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
        isEmail: true
      },
      wins: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      ties: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      losses: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
    await queryInterface.dropTable('Users');
  }
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define('Move', {
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: "Users"}
    },
    rock: {
      type: Sequelize.STRING(100)
    },
    paper: {
      type: Sequelize.STRING(100)
    },
    scissors: {
      type: Sequelize.STRING(100)
    },
    lizard: {
      type: Sequelize.STRING(100)
    },
    spock: {
      type: Sequelize.STRING(100)
    },
  }, {});
  Move.associate = function(models) {
    Move.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Move;
};
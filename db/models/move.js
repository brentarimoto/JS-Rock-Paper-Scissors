'use strict';
module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define('Move', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    rock: {
      type: DataTypes.STRING(100)
    },
    paper: {
      type: DataTypes.STRING(100)
    },
    scissors: {
      type: DataTypes.STRING(100)
    },
    lizard: {
      type: DataTypes.STRING(100)
    },
    spock: {
      type: DataTypes.STRING(100)
    },
  }, {});
  Move.associate = function(models) {
    Move.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Move;
};

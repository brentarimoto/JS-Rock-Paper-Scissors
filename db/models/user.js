'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING.BINARY,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(50),
      unique: true,
      isEmail: true
    },
    wins: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    ties: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    losses: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.User, {through: 'Friend', foreignKey: 'currUserId', otherKey: 'friendId'})
    User.belongsToMany(models.User, {through: 'Friend', foreignKey: 'friendId', otherKey: 'currUserId'})
    User.hasMany(models.Move, {foreignKey: 'userId'})
  };
  return User;
};
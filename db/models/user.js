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
      type: DataTypes.STRING.BINARY,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(50),
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
    User.belongsToMany(User, {as: 'friends', through: 'Friend'})
    User.hasMany(models.Move, {foreignKey: 'userId'})
  };
  return User;
};

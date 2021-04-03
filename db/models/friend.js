'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    currUserId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    friendId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};
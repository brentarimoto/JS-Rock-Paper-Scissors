'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    ties: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Record.associate = function(models) {
    Record.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Record;
};
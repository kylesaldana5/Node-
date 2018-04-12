'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    rank: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'lifeguards'});
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: "beach_id",
      onDelete: "CASCADE"
    })
  };
  return Lifeguard;
};
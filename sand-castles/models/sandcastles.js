'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sandcastles = sequelize.define('Sandcastles', {
    name: DataTypes.STRING,
    building_score: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'sandcastles'});
  Sandcastles.associate = function(models) {
    // associations can be defined here
    Sandcastles.belongsTo(models.Tools, {
      foreignKey: "tool_id",
      onDelete: "CASCADE"
    })
  };
  return Sandcastles;
};
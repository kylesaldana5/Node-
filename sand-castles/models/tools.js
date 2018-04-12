'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tools = sequelize.define('Tools', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, { timestamps: false, tableName: 'tools'});
  Tools.associate = function(models) {
    // associations can be defined here
    Tools.hasMany(models.Sandcastles, {
      foreignKey: "sandcastles_id",
      onDelete: "CASCADE"
    })
  };
  return Tools;
};
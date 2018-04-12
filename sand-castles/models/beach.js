'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'beaches'});
  Beach.associate = (models) => {
    // associations can be defined here
    // associate is defining relationships, or associations, between models
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beach_id',
      onDelete: "CASCADE"
    })
    Beach.hasMany(models.Sandcastles, {
      foreignKey: 'beach_id',
      onDelete: "CASCADE"
    })
  };
  return Beach;
};
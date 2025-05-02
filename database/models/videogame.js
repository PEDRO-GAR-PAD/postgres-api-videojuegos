'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Videogame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Videogame.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    platform: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    developer: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Videogame',
  });
  return Videogame;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  auto.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    year: DataTypes.STRING,
    estadoDisponiblidad: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'auto',
  });

  auto.associate = function (models){
    auto.hasMany(models.alquiler, {foreignKey: 'autoId'});
  }
  return auto;
};
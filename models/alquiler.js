'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  alquiler.init({
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'alquiler',
  });

  alquiler.associate = function (models) {
    alquiler.belongsTo(models.cliente, {foreignKey: "clienteId"});
    alquiler.belongsTo(models.auto, {foreignKey: "autoId"});
  }
  return alquiler;
};
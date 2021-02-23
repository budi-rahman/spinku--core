'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TerminalOutlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TerminalOutlet.hasMany(models.Outlet, {foreignKey: 'terminalOutletId'})
      TerminalOutlet.belongsTo(models.Terminal, {foreignKey: 'terminalId'})
    }
  };
  TerminalOutlet.init({
    terminalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TerminalOutlet',
  });
  return TerminalOutlet;
};
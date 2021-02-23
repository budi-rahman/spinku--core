'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Outlet.belongsToMany(models.Merchant, {foreignKey: 'merchantId', through: 'MerchantOutlets'})
      Outlet.belongsTo(models.TerminalOutlet, {foreignKey: 'terminalOutletId'})
      Outlet.belongsTo(models.UserOutlet, {foreignKey: 'userOutletId'})
    }
  };
  Outlet.init({
    outletName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Outlet name is NOT empty!'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Address is NOT empty!'
        }
      }
    },
    outletCode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Outlet code is NOT empty!'
        }
      },
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Outlet',
  });
  return Outlet;
};
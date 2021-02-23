'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MerchantOutlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MerchantOutlet.init({
    merchantId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Merchant NOT empty!'
        }
      }
    },
    outletId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Outlet NOT empty!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MerchantOutlet',
  });
  return MerchantOutlet;
};
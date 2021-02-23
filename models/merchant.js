'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.belongsToMany(models.Outlet, {foreignKey: 'merchantId', through: 'MerchantOutlets'})
    }
  };
  Merchant.init({
    merchantCode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Code of merchant is not empty'
        }
      },
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name of merchant is not empty'
        }
      }
    },
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Merchant',
    hooks: {
      beforeCreate: (merchant, options) => {
        if(merchant.name) merchant.name = merchant.name.toUpperCase();
      },
      beforeUpdate: (merchant, options) => {
        if(merchant.name) merchant.name = merchant.name.toUpperCase();
      }
    }
  });
  return Merchant;
};
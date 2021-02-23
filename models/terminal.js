'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class Terminal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Terminal.hasMany(models.TerminalOutlet, {foreignKey: 'terminalId'})
    }
  };
  Terminal.init({
    imei: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'IMEI is NOT empty!'
        }
      },
      unique: true
    },
    phone: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username is NOT empty!'
        }
      },
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email is NOT empty!'
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password is NOT empty!'
        }
      }
    },
    terminalCode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Terminal Code is NOT empty!'
        }
      },
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Terminal',
    hooks: {
      beforeCreate: (terminal, options) => {
        terminal.password = hashPassword(terminal.password)
      }
    }
  });
  return Terminal;
};
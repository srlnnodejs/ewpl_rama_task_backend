'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  employee.init({
    uuid: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dateofbirth: DataTypes.DATE,
    designaiton: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};
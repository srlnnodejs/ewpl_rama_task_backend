'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_task_mapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  employee_task_mapping.init({
    uuid: DataTypes.INTEGER,
    employeeid: DataTypes.INTEGER,
    taskid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee_task_mapping',
  });
  return employee_task_mapping;
};
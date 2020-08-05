'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  task.init({
    uuid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startdate: DataTypes.DATE,
    duedate: DataTypes.DATE,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};
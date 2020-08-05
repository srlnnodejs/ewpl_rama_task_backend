'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employee_task_mappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.INTEGER
      },
      employeeid: {
        type: Sequelize.INTEGER,
        references: { model: 'employees', key: 'id'}
      },
      taskid: {
        type: Sequelize.INTEGER,
        references: { model: 'tasks', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employee_task_mappings');
  }
};
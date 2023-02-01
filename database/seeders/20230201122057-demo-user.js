'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Have breakfast at 7 o clock in the morning',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Go to office at 11 o clock in the morning',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Do all the tasks assigned to you',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Discuss doubt among yourself after the codeacademy',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Have dinner at 8 o clock in the evening',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
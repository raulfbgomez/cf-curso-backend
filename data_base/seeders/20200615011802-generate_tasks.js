'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('tasks', [
        { id: 1, description: 'Run in a mall', createdAt: new Date(), updatedAt: new Date },
        { id: 2, description: 'Learn English', createdAt: new Date(), updatedAt: new Date },
        { id: 3, description: 'View Dark serie on Netflix', createdAt: new Date(), updatedAt: new Date },
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

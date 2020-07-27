'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Haley',
      profileurl: 'https://luglobalcitizen.files.wordpress.com/2014/08/gc.jpg',
      username: 'halestorm',
      password: '123456'
     }], 
    )
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

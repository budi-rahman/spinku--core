'use strict';

const merchant = [
  {
    "merchantCode" : "19",
    "name": "DUCK KING",
    "location" : "JAKARTA"
  },
  {
    "merchantCode" : "20",
    "name": "HYPERMART",
    "location" : "TANGERANG"
  },
  {
    "merchantCode" : "21",
    "name": "ISMAYA GROUP",
    "location" : "JAKARTA"
  },
  {
    "merchantCode" : "22",
    "name": "TAWAN",
    "location" : "JAKARTA"
  },
  {
    "merchantCode" : "23",
    "name": "ZENBU",
    "location" : "JAKARTA"
  }
]
merchant.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Merchants', merchant, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Merchants', null, {})
  }
};

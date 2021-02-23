'use strict';

const outlet = [
  {
    "outletName": "SENAYAN CITY",
    "address" : "Jakarta Pusat",
    "outletCode": "1123D"
  },
  {
    "outletName": "PLAZA BALIKPAPAN",
    "address" : "LANTAI GF, UNIT 20",
    "outletCode": "99016"
  },
  {
    "outletName": "SUSHI GROOVE",
    "address" : "JL. H.R RASUNA SAID NO.62, RT.6/RW.7, KUNINGAN",
    "outletCode": "99021"
  }
]
outlet.forEach(el => {
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
      return queryInterface.bulkInsert('Outlets', outlet, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Outlets', null, {})
  }
};

'use strict';

const bcrypt = require('bcryptjs')
let defaultPassword = "admin123"


const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(defaultPassword, salt)

  if(defaultPassword) defaultPassword = hash

const admin = [
  {
    "firstName" : "admin",
    "lastName" : "telkomsel",
    "birthDate" : new Date,
    "phone" : "082240803374",
    "email" : "admin123@mail.com",
    "password" : defaultPassword,
    "role" : "admin"
  }
]

admin.forEach(el => {
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
      return queryInterface.bulkInsert('Users', admin, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};

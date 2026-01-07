'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('airplanes', [
    {
      Model: 'Boeing 737',
      Capacity: 180,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Model: 'Airbus A320',
      Capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Model: 'Boeing 777',
      Capacity: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ],);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

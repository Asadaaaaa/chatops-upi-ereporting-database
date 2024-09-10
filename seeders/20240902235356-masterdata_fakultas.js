'use strict';

const {v4: uuidv4 } = require('uuid')
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('masterdata_fakultas' ,[
      {
        kode: 'G',
        nama: 'Kampus UPI di Cibiru'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('masterdata_fakultas', null, {});
  }
};

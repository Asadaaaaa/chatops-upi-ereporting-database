'use strict';
const {v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('masterdata_prodi', [
      {
        uuid: uuidv4(),
        fakultas_id: 1,
        kode: 'G0651',
        nama: 'Pendidikan Guru Sekolah Dasar - S1'
      },
      {
        uuid: uuidv4(),
        fakultas_id: 1,
        kode: 'G0661',
        nama: 'Pendidikan Guru Sekolah Dasar - S2'
      },
      {
        uuid: uuidv4(),
        fakultas_id: 1,
        kode: 'G0751',
        nama: 'Pendidikan Guru Anak Usia Dini - S1'
      },
      {
        uuid: uuidv4(),
        fakultas_id: 1,
        kode: 'G0951',
        nama: 'Pendidikan Multimedia - S1'
      },
      {
        uuid: uuidv4(),
        fakultas_id: 1,
        kode: 'G5051',
        nama: 'Rekayasa Perangkat Lunak - S1'
      },
      {
        uuid: uuidv4(),
        fakultas_id: 1,
        kode: 'G5151',
        nama: 'Teknik Komputer - S1'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('masterdata_prodi', null, {});
  }
};

'use strict';
const {v4: uuidv4 } = require('uuid');
const {data: iku_2 }= require('./iku/iku-2.js');
const {data: iku_2_additional }= require('./iku/iku-2-additional.js');
const {data: iku_4 }= require('./iku/iku-4.js');
const {data: iku_4_additional }= require('./iku/iku-4-additional.js');
const {data: iku_5 }= require('./iku/iku-5.js');
const {data: iku_5_additional }= require('./iku/iku-5-additional.js');
const {data: iku_7 }= require('./iku/iku-7.js');
const {data: iku_7_additional }= require('./iku/iku-7-additional.js');
const {data: iku_10 }= require('./iku/iku-10.js');
const {data: iku_10_additional }= require('./iku/iku-10-additional.js');
const {data: iku_13_15_16 }= require('./iku/iku-13-15-16.js');
const {data: iku_13_16_additional }= require('./iku/iku-13-16-additional.js');
const {data: iku_17 }= require('./iku/iku-17.js');
const {data: iku_17_additional }= require('./iku/iku-17-additional.js');
const {data: iku_18_additional }= require('./iku/iku-18-additional.js');
const {data: iku_18_21_22_23 }= require('./iku/iku-18-21-22-23.js');
const {data: iku_21_additional }= require('./iku/iku-21-additional.js');
const {data: iku_22_additional }= require('./iku/iku-22-additional.js');
const {data: iku_23_additional }= require('./iku/iku-23-additional.js');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('masterdata_iku', [
      {
        nomor: 2,
        nama: 'Mahasiswa Bersertifikat Kompetensi',
        data: JSON.stringify(iku_2),
        additional_data: JSON.stringify(iku_2_additional)
      },
      {
        nomor: 4,
        nama: 'Mahasiswa Yang Mengikuti Student Mobility',
        data: JSON.stringify(iku_4),
        additional_data: JSON.stringify(iku_4_additional),
      },
      {
        nomor: 5,
        nama: 'Mahasiswa S1 dan D4/D3/D2 Yang Menghabiskan Paling Sedikit 20 SKS di Luar Kampus',
        data: JSON.stringify(iku_5),
        additional_data: JSON.stringify(iku_5_additional),
      },
      {
        nomor: 7,
        nama: 'Dosen Yang Berkegiatan Tridarma di Luar Kampus',
        data: JSON.stringify(iku_7),
        additional_data: JSON.stringify(iku_7_additional),
      },
      {
        nomor: 10,
        nama: 'Jumlah Penelitian Yang Didanai Pihak Luar',
        data: JSON.stringify(iku_10),
        additional_data: JSON.stringify(iku_10_additional),
      },
      {
        nomor: 13,
        nama: 'Jumlah Hilirisasi Hasil Penelitian dan Pengembangan (R&D) Yang Menghasilkan Produk Inovasi dan Siap Dimanfaatkan Masyarakat dan/atau Bernilai Ekonomi',
        data: JSON.stringify(iku_13_15_16),
        additional_data: JSON.stringify(iku_13_16_additional),
      },
      {
        nomor: 15,
        nama: 'Jumlah Luaran Pengabdian Kepada Masyarakat Yang Berhasil Mendapat Rekognisi Internasional Atau Diterapkan Oleh Masyarakat Per Jumlah Dosen',
        data: JSON.stringify(iku_13_15_16),
      },
      {
        nomor: 16,
        nama: 'Jumlah Hilirisasi Hasil Pengabdian Kepada Masyarakat Yang Menghasilkan Produk Inovasi Yang Dimanfaatkan Masyarakat atau Yang Bernilai Ekonomi',
        data: JSON.stringify(iku_13_15_16),
        additional_data: JSON.stringify(iku_13_16_additional),
      },
      {
        nomor: 17,
        nama: 'Mahasiswa Yang Meraih Prestasi Minimal Tingkat Nasional',
        data: JSON.stringify(iku_17),
        additional_data: JSON.stringify(iku_17_additional),
      },
      {
        nomor: 18,
        nama: 'Dosen Membina Mahasiswa Yang Berhasil Meraih Prestasi Paling Rendah Tingkat Nasional Dalam 5 (lima) Tahun Terakhir',
        data: JSON.stringify(iku_18_21_22_23),
        additional_data: JSON.stringify(iku_18_additional),
      },
      {
        nomor: 21,
        nama: 'Dosen Tetap Yang Memiliki Sertifikat Kompetensi/Profesi Yang Diakui Oleh Industri dan Dunia Kerja',
        data: JSON.stringify(iku_18_21_22_23),
        additional_data: JSON.stringify(iku_21_additional),
      },
      {
        nomor: 22,
        nama: 'Dosen Tetap Yang Berasal Dari Kalangan Praktisi Profesional, Dunia Industri atau Dunia Kerja',
        data: JSON.stringify(iku_18_21_22_23),
        additional_data: JSON.stringify(iku_22_additional)
      },
      {
        nomor: 23,
        nama: 'Dosen dan/atau Tenaga Kependidikan Yang Memperoleh Penghargaan/Award',
        data: JSON.stringify(iku_18_21_22_23),
        additional_data: JSON.stringify(iku_23_additional)
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('masterdata_iku', null, {});
  }
};

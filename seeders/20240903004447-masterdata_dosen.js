'use strict';
const {v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('masterdata_dosen', [
      {
        prodi_id: 1,
        nip: '197111281998021000',
        nama: 'Prof. Dr. Deni Darmawan, S.Pd., M.Si., M.Kom.'
      },
      {
        prodi_id: 1,
        nip: '197001172008122001',
        nama: 'Dr. Yeni Yuniarti, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '197603052005011003',
        nama: 'Dr. Jenuri, S.Ag., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '197908172008011019',
        nama: 'Dr. H. Yunus Abidin, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '196201061986031004',
        nama: 'Dr. H. Dede Margo Irianto, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '196308141994032002',
        nama: 'Dr. Prihantini, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '197409092006042001',
        nama: 'Dr. Ai Sutini, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '198111082008012015',
        nama: 'Dr. Tita Mulyati, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200419870113101',
        nama: 'Dr. Dede Trie Kurniawan, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '196104171986032001',
        nama: 'Dra. Hj. R. Deti Rostika, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '196104051986032001',
        nama: 'Dra. Hj. Komariah, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '196008011986032001',
        nama: 'Dra. Hj. Tin Rustini, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '197906062005022015',
        nama: 'Winti Ananthia, S.Pd., M.Ed.'
      },
      {
        prodi_id: 1,
        nip: '198301132009121005',
        nama: 'Hana Yunansah, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '197708202005012017',
        nama: 'Dr. Kurniawati, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '198907292018032001',
        nama: 'Nurul Hidayah, M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '198705152019031015',
        nama: 'M. Ridwan Sutisna, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '199112172019032025',
        nama: 'Triana Lestari, S.Psi., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '197208132002121004',
        nama: 'Dr. Agus Mulyana, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200119681027201',
        nama: 'Hj. Setyaningsih Rachmania, S.Pd., M.Pd'
      },
      {
        prodi_id: 1,
        nip: '920200119910529201',
        nama: 'Yona Wahyuningsih, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200119861028201',
        nama: 'Yayang Furi Furnamasari, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200119850814101',
        nama: 'Dr. Asep Rudi Nurjaman, S.Pd., M.Pd.I.'
      },
      {
        prodi_id: 1,
        nip: '920200419890128101',
        nama: 'Muh. Husen Arifin, S.E., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200419900607101',
        nama: 'Dr. Rendi Restiana Sukardi, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200419920118201',
        nama: 'Dr. Dinie Anggraeni Dewi, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200419920501201',
        nama: 'Fully Rakhmayanti, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200419921030201',
        nama: 'S. Nailul Muna Aljamaliah, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200819751221101',
        nama: 'Uus Kusnadi, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920200819900323101',
        nama: 'Yusuf Tri Herlambang, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920230219911217101',
        nama: 'Ranu Sudarmansyah, S.Pd., M.Pd.'
      },
      {
        prodi_id: 1,
        nip: '920230219970403101',
        nama: 'Agil Nanggala, S.Pd., M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '195909011984032001',
        nama: 'Prof. Dr. Hj. Leli Halimah, M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '196302251988032001',
        nama: 'Dr. Hj. Tuti Istianti, M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '195905261988032001',
        nama: 'Dr. Nenden Ineu Herawati, M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '197712222005012002',
        nama: 'Desiani Natalina Muliasari, M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '198110312010122003',
        nama: 'Endah Silawati, S.Pd., M.Pd'
      },
      {
        prodi_id: 3,
        nip: '198012212006041005',
        nama: 'Mohamad Helmi Ismail, S.Sn., M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '198912242019032023',
        nama: 'Mirawati, S.Pd., M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '920200819920101101',
        nama: 'Kuswanto, S.Pd., M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '920230219970119101',
        nama: 'Muh. Asriadi AM, S.Pd., M.Pd.'
      },
      {
        prodi_id: 3,
        nip: '920230219881214201',
        nama: 'Ririn Despriliani, S.Pd., M.Si.'
      },
      {
        prodi_id: 3,
        nip: '197610302007011006',
        nama: 'Dr. Arif Hidayat, M.Pd.I.'
      },
      {
        prodi_id: 4,
        nip: '920171219900422101',
        nama: 'Fahmi Candra Permana , S.Si., M.T.'
      },
      {
        prodi_id: 4,
        nip: '920171219900606201',
        nama: 'Intan Permata Sari, S.ST., M.Ds.'
      },
      {
        prodi_id: 4,
        nip: '920171219890103201',
        nama: 'Maya Purnama Sari, S.Pd., M.Ds.'
      },
      {
        prodi_id: 4,
        nip: '920171219870811201',
        nama: 'Ayung Candra Padmasari, S.Pd., M.T.'
      },
      {
        prodi_id: 4,
        nip: '920171219860906201',
        nama: 'Dian Rinjani, S.Pd., M.Ds.'
      },
      {
        prodi_id: 4,
        nip: '920190219910706101',
        nama: 'Feri Hidayatullah Firmansyah, S.Pd.,M.MT.'
      },
      {
        prodi_id: 4,
        nip: '920230219940805101',
        nama: 'Agus Juhana, S.Pd., M.T.'
      },
      {
        prodi_id: 4,
        nip: '920230219890404101',
        nama: 'Nurhidayatulloh, S.Pd., M.T.'
      },
      {
        prodi_id: 5,
        nip: '920190219910328101',
        nama: 'Mochamad Iqbal Ardimansyah, S.T., M.Kom.'
      },
      {
        prodi_id: 5,
        nip: '920190219930526201',
        nama: 'Dian Anggraini, M.T.'
      },
      {
        prodi_id: 5,
        nip: '920190219920507101',
        nama: 'Raditya Muhammad, ST., M.T.'
      },
      {
        prodi_id: 5,
        nip: '920190219920423201',
        nama: 'Indira Syawanodya, M.Kom.'
      },
      {
        prodi_id: 5,
        nip: '920190219920228201',
        nama: 'Asyifa Imanda Septiana, S.Pd., M.Eng.'
      },
      {
        prodi_id: 5,
        nip: '920190219870504101',
        nama: 'Hendriyana, S.T., M.Kom.'
      },
      {
        prodi_id: 5,
        nip: '920230219960729201',
        nama: 'Yulia Retnowati, S.Pd., M.T.'
      },
      {
        prodi_id: 6,
        nip: '920200419890816101',
        nama: 'Deden Pradeka, S.T., M.Kom.'
      },
      {
        prodi_id: 6,
        nip: '920200819851205101',
        nama: 'Dr. Eng. Munawir, M.T.'
      },
      {
        prodi_id: 6,
        nip: '920200819940117101',
        nama: 'Muhammad Taufik Dwi Putra, S.Tr.Kom., M.T.I.'
      },
      {
        prodi_id: 6,
        nip: '920200819890421201',
        nama: 'Devi Aprianti Rimadhani Agustini, S.Si., M.Si.'
      },
      {
        prodi_id: 6,
        nip: '920200819900620201',
        nama: 'Ana Rahma Yuniarti, S.T., M.Eng.'
      },
      {
        prodi_id: 6,
        nip: '920200819830521101',
        nama: 'Wirmanto Suteddy, S.T., M.T.'
      },
      {
        prodi_id: 6,
        nip: '920200819880813101',
        nama: 'Anugrah Adiwilaga, S.ST., M.T.'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('masterdata_dosen', null, {});
  }
};

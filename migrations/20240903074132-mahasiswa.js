'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mahasiswa', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal(`gen_random_uuid()`)
      },
      prodi_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'masterdata_prodi',
          key: 'id'
        },
      },
      nim: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      nama: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('mahasiswa');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('masterdata_prodi', {
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
      fakultas_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'masterdata_fakultas',
          key: 'id'
        }
      },
      kode: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING(60),
        allowNull: false,
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
    await queryInterface.dropTable('masterdata_prodi');
  }
};

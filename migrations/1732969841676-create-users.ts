'use strict';

import { QueryInterface, UUIDV4 } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false, // UUIDs are not auto-incremented
        defaultValue: UUIDV4, // For PostgreSQL
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Enforcing unique emails
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true, // Allow null for soft deletes
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.dropTable('users');
  },
};

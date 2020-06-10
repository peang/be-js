'use strict';

const uuid = require('uuid');

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: () => uuid.v4(),
                type: DataTypes.STRING
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING
            },
            phone: {
                allowNull: false,
                type: DataTypes.STRING
            },
            password: {
                allowNull: false,
                type: DataTypes.TEXT
            },
            role: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            role_id: {
                allowNull: false,
                type: DataTypes.STRING
            },
            refresh_token: {
                type: DataTypes.TEXT
            },
            refresh_token_expirity: {
                type: DataTypes.DATE
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};
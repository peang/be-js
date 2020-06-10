'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
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
    }, {
        tableName: 'user',
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });

    return User;
};
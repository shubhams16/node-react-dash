const Sequelize = require("sequelize")
const db = require('../database/db')

module.exports = db.sequelize.define(
    'tap_users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        f_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        l_name: {
            type: Sequelize.STRING,
        },
        u_email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        u_password: {
            type: Sequelize.STRING(64),
            is: /^[0-9a-f]{64}$/i
          },
        date:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        flag:{
            type: Sequelize.SMALLINT
        }
    },
    {
        timestamps: false
    }
    
)

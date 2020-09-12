const Sequelize = require("sequelize")
const  db= {}
const sequelize = new Sequelize("node_dashbard_rds", "admin", "TapNode2020WltRe", {
    host: "tap-dash-node-db.csgvgsfkqcga.eu-west-2.rds.amazonaws.com",
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize= Sequelize

module.exports =db
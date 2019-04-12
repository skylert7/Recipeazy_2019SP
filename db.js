const Sequelize = require("sequelize")

const db = {}

//connect to database everytime app gets called so that the connection won't timeout
const sequelize = new Sequelize("dbteam", "dbteam", "dbpassword", {
    host: 'dbinstanceaws.cr1itmhwscoi.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,

    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

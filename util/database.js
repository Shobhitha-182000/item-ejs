const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-ejxexpense", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

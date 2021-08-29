const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgresrest", "root", "1111", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

exports.users = require("./User")(sequelize, Sequelize.DataTypes);

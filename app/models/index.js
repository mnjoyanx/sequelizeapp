const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgresrest", "postgres", "1111", {
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

const users = require("./User")(sequelize, Sequelize.DataTypes);
const posts = require("./Post")(sequelize, Sequelize.DataTypes);
const tasks = require("./Task")(sequelize, Sequelize.DataTypes);
const priorities = require("./Priority")(sequelize, Sequelize.DataTypes);
const Teachers = require("./Teacher")(sequelize, Sequelize.DataTypes);
const Schools = require("./School")(sequelize, Sequelize.DataTypes);
const Teach_school = require("./teach_school")(sequelize, Sequelize.DataTypes);

users.hasOne(posts, { foreignKey: "UserId" });
posts.belongsTo(users, { foreignKey: "UserId" });
tasks.belongsTo(priorities, { foreignKey: "prioretiId" });
priorities.hasMany(tasks, { foreignKey: "prioretiId" });
Teachers.belongsToMany(Schools, {
  through: { model: Teach_school },
  foreignKey: "teacherId",
});
Schools.belongsToMany(Teachers, {
  through: Teach_school,
  foreignKey: "schoolId",
});

module.exports = {
  users,
  posts,
  tasks,
  priorities,
  Teachers,
  Schools,
  Teach_school,
};

sequelize.sync({ alter: true }).then(() => {
  console.log("table created");
});

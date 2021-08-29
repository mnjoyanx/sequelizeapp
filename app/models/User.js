module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  sequelize.sync().then(() => {
    console.log("table created");
  });

  return User;
};

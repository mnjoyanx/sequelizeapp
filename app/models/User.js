module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue("name", val.toUpperCase());
        },

        get() {
          return this.getDataValue("name") + "!";
        },
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

  return User;
};

module.exports = (sequelize, DataTypes) => {
  const Priority = sequelize.define(
    "Priority",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  return Priority;
};

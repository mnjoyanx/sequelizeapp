module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define("School", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return School;
};

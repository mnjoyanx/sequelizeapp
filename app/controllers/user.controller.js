const { Sequelize, Op } = require("sequelize");
const user = require("../models/index");
const User = user.users;

exports.getAll = async (req, res) => {
  const all = await User.findAll({});
  // const al = await User.findAll({
  //   attributes: [
  //     "name",
  //     "email",
  //     [Sequelize.fn("COUNT", Sequelize.col("email")), "emailCount"],
  //   ],
  // });
  // const al = await User.count({ distinct: true, col: "email" }); //count distinct email
  const betweens = req.params.betweens;
  const asl = await User.findAll({
    // attributes: {
    //   exclude: ["id"],
    // },
    // where: {
    //   email: {
    //     [Op.like]: "%@gmail.com",
    //   },
    // },
    // order: [["id", "DESC"]],
    // groupBy: ["email"],
    // limit: 10,
    // offseet: 1,
  });

  const al = await User.findAndCountAll({ include: { all: true } });
  return res.status(200).json({ data: al });
};

exports.findOne = async (req, res) => {
  console.log(req.params.id, "didi");
  const user = await User.findOne({ where: { id: req.params.id } });
  return res.status(200).json({ data: user });
};

exports.create = async (req, res) => {
  console.log(req.body, "body");
  const user = await User.create(req.body);
  await user.save;

  return res.status(201).json({ data: user });
};

exports.edit = async (req, res) => {
  await User.update({ name: req.body.name }, { where: { id: req.params.id } });
  return res.status(200).json({ message: "updated" });
};

exports.remove = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  return res.status(200).json({ message: "deleted" });
};

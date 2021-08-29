const user = require("../models/index");
const User = user.users;

exports.getAll = async (req, res) => {
  const all = await User.findAll();
  return res.status(200).json({ data: all });
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

const priority = require("../models");
const Priority = priority.priorities;

exports.getAll = async (req, res) => {
  const all = await Priority.findAll({ include: [{ all: true }] });
  return res.status(200).json({ data: all });
};

exports.create = async (req, res) => {
  const task = await Priority.create(req.body);
  return res.status(201).json({ data: task });
};

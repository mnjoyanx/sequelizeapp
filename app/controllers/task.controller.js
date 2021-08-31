const task = require("../models/");
const Task = task.tasks;

exports.getAll = async (req, res) => {
  const all = await Task.findAll({ include: [{ all: true }] });
  return res.status(200).json({ data: all });
};

exports.create = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

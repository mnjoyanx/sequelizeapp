const { Schools, Teachers } = require("../models");

exports.getAll = async (req, res) => {
  const all = await Schools.findAll({ include: [{ model: Teachers }] });
  return res.status(200).json({ data: all });
};

exports.create = async (req, res) => {
  const school = await Schools.create(req.body);
  return res.status(201).json({ data: school });
};

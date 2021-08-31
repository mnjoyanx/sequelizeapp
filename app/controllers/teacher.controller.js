const { Schools, Teachers } = require("../models");

exports.getAll = async (req, res) => {
  const all = await Teachers.findAll({ include: [{ model: Schools }] });
  return res.status(200).json({ data: all });
};

exports.create = async (req, res) => {
  const teacher = await Teachers.create(req.body);
  const school = await Schools.findOne();

  await school.addTeachers([1, 2, 3]);

  return res.status(201).json({ data: teacher });
};

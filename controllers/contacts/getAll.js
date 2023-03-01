const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  const result = await Contact.find({});
  // const result = await Contact.find({}, "name email phone favorite");

  res.json(result);
};

module.exports = getAll;

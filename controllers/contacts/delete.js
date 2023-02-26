const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const removeContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: id });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Delete success",
  });
};

module.exports = removeContactById;

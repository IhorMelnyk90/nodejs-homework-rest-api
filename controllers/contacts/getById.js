const { Contact } = require("../../models");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const result = await Contact.findById(
    { _id: id, owner },
    "-createdAt -updatedAt"
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;

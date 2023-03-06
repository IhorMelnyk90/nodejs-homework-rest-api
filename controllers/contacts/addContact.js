const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const {_id: owner} = req.user;

  const result = await Contact.create({...req.body, owner});
  if (result) {
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  }
};

module.exports = addContact;

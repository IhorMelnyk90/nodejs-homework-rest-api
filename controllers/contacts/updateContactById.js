const contacts = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");
const addSchema = require("../../schemas/contacts");

const updateContactById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const id = req.params.contactId;
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = updateContactById;
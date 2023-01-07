const getAll = require("./getAll");
const getById = require("./getById");
const addContact = require("./addContact");
const removeContactById = require("./delete");
const updateContactById = require("./updateContactById");



module.exports = {
  getAll,
  getById,
  addContact,
  removeContactById,
  updateContactById,
}
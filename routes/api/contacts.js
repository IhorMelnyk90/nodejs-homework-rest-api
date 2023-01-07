const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.removeContactById);

router.put("/:contactId", ctrl.updateContactById);

module.exports = router;

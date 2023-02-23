const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const {validationBody} = require("../../middlewares");

const schemas = require("../../schemas/contacts");



const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

// router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validationBody(schemas.add), ctrlWrapper(ctrl.addContact));

// router.delete("/:contactId", ctrlWrapper(ctrl.removeContactById));

// router.put("/:contactId", ctrlWrapper(ctrl.updateContactById));

module.exports = router;

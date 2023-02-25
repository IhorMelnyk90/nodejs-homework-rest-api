const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();




router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));
router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContactById));
router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContactById));
router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router;

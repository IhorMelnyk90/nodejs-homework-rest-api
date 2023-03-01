const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");
const { contactSchemas } = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
router.post(
  "/",
  validateBody(contactSchemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);
router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContactById));
router.put(
  "/:id",
  isValidId,
  validateBody(contactSchemas.addSchema),
  ctrlWrapper(ctrl.updateContactById)
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;

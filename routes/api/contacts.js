const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { contactSchemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));
router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getById));
router.post(
  "/", authenticate,
  validateBody(contactSchemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);
router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContactById));
router.put(
  "/:id", authenticate,
  isValidId,
  validateBody(contactSchemas.addSchema),
  ctrlWrapper(ctrl.updateContactById)
);
router.patch(
  "/:id/favorite", authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;

const express = require("express");
const { validateBody } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/register", validateBody(userSchemas.registerSchema), ctrlWrapper(ctrl.register));


module.exports = router;

const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/users");

const router = express.Router();


router.post("/register", validateBody(userSchemas.registerSchema), ctrlWrapper(ctrl.register));

router.post("/login", validateBody(userSchemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.current));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));



module.exports = router;

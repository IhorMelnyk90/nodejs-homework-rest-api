const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get("/verify/:verificationCode", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", validateBody(userSchemas.emailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

router.post(
  "/login",
  validateBody(userSchemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.current));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;

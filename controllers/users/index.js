const register = require("./registerUser");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendEmail");

module.exports = {
  register,
  login,
  current,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};

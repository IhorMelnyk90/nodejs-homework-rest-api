const { User } = require("../../models/users");

const current = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });
  const { subscription } = user;
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = current;

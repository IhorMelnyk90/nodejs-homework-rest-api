const { User } = require("../../models");
const {HttpError} = require("../../helpers")

const register = async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({email});
  if(user){
    throw HttpError(409, "Email in use")
  }
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      email: newUser.email,
      password: newUser.password
    },
  });
};

module.exports = register;

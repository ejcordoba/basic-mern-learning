const userController = {};

const User = require("../models/User");

userController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userController.createUser = async (req, res) => {
  const { name, lastName, age, phone, email } = req.body;
  const newUser = new User({
    name: name,
    lastName: lastName,
    age: age,
    phone: phone,
    email: email,
  });
  await newUser.save();
  res.json({ message: "User created" });
};

userController.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

userController.updateUser = async (req, res) => {
  const { name, lastName, age, phone, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    name,
    lastName,
    age,
    phone,
    email,
  });
  res.json({ message: "User updated" });
};

userController.deleteUser = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
// Missing try,catch and validations with express
module.exports = userController;

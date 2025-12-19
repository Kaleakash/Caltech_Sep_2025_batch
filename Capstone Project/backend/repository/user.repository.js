const User = require("../model/user.model");

const findUserByEmail = (emailId) => {
  return User.findOne({ emailId });
};

const createUser = (userData) => {
  return User.create(userData);
};

module.exports = {
  findUserByEmail,
  createUser
};

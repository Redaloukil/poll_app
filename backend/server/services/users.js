const { Users } = require('../models');

module.exports = {
  getAllUsers: async () => {
    const users = await Users.findAll();
    return users;
  },
  getUserById: async id => {
    const user = await Users.findOne({ where: { id } });
    return user;
  },
  getUserByUsername: async username => {
    const user = await Users.findOne({ where: { username } });
    return user;
  },
  createUser: async ({ username, password }) => {
    const user = await Users.findOrCreate({ username, password });
    return user;
  },
  deleteUserById: async id => {
    await Users.destroy({ where: { id } });
    return;
  },
  updateUser: async user => {
    const updatedUser = await Users.findOne({ where: { id: user.id } });
    return updatedUser;
  },
};

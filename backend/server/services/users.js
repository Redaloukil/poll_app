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
  createUser: async user => {
    const createdUser = await Users.create(user);
    if (createdUser) {
      return createdUser;
    }
    return null;
  },
  updateUser: async user => {
    await Users.destroy({ where: { id: user.id } });
    return;
  }
};

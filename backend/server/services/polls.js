const { Polls } = require('../models');

module.exports = {
  getAllPolls: async () => {
    const users = await Polls.findAll();

    return users;
  },
  getPollById: async id => {
    const user = await Polls.findOne({ where: { id } });

    return user;
  },
  createPoll: async ({ title, description }) => {
    const user = await Polls.findOrCreate({ title, description });

    return user;
  },
  deletePollById: async id => {
    await Polls.destroy({ where: { id } });

    return;
  },
  updatePoll: async poll => {
    const updatedUser = await Polls.findOne({ where: { id: poll.id } });
    updatedUser.title = poll.title || updatedUser.title;
    updatedUser.description = poll.description || updatedUser.description;

    return updatedUser;
  },
};

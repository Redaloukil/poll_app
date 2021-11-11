const { Polls } = require('../models');

module.exports = {
  getAllPolls: async () => {
    const polls = await Polls.findAll();
    return polls;
  },
  getPollById: async id => {
    const poll = await Polls.findOne({ where: { id } });
    return poll;
  },
  createPoll: async ({ title, description }) => {
    const poll = await Polls.findOrCreate({
      title,
      description,
      user_id: user
    });
    return poll;
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
  }
};

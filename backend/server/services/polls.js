const { Polls } = require('../models');

module.exports = {
  getAllPolls: async () => {
    const polls = await Polls.findAll({});
    return polls;
  },
  getPollById: async id => {
    const poll = await Polls.findOne({ where: { id } });
    return poll;
  },
  createPoll: async ({ title, description, userId }) => {
    const poll = await Polls.findOrCreate({
      title,
      description,
      user_id: userId
    });
    return poll;
  },
  deletePollById: async id => {
    await Polls.destroy({ where: { id } });
    return;
  },
  updatePoll: async poll => {
    const updatedPoll = await Polls.findOne({ where: { id: poll.id } });
    updatedPoll.title = poll.title || updatedPoll.title;
    updatedPoll.description = poll.description || updatedPoll.description;
    return updatedPoll;
  }
};

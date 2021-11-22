const { Choices } = require('../models/choices');

module.exports = {
  getAllChoices: async () => {
    const choices = await Choices.findAll({});
    return choices;
  },
  getChoicesByPollId: async pollId => {
    const choices = await Choices.findAll({ where: { id: pollId } });
    return choices;
  },
  createChoiceByPollId: async (pollId, choice) => {
    const createdChoice = await Choices.create({
      title: choice.title,
      description: choice.description,
      poll_id: pollId
    });
    return createdChoice;
  },
  deleteChoiceByPollId: async choiceId => {
    await Choices.findOne({ id: choiceId });
    return;
  }
};

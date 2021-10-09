const { Choices } = require('../models/choices');

module.exports = {
  getChoicesByPollId: async pollId => {
    const choices = await Choices.findAll({ where: { poll_id: pollId } });
    return choices;
  },
  getChoiceById: async id => {
    const choice = await Choices.findOne({
      where: {
        id,
      },
    });
    return choice;
  },
  createChoice: async choice => {
    const createdChoice = await Choices.create(choice);
    return createdChoice;
  },
};

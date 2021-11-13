const { Sequelize } = require('sequelize');
const { sequelize } = require('../helpers/database');
const { Polls } = require('../models/polls');

const Choices = sequelize.define('Choices', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Choices.belongsTo(Polls, { foreignKey: 'poll_id' });

module.exports = {
  Choices
};

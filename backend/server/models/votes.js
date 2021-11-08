const { Choices } = require('./choices');
const { Users } = require('./users');
const { Sequelize } = require('sequelize');
const { sequelize } = require('../helpers/database');

const Votes = sequelize.define('Votes', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Votes.belongsTo(Users, { foreignKey: 'user_id' });
Votes.belongsTo(Choices, { foreignKey: 'choice_id' });

module.exports = {
  Votes,
};

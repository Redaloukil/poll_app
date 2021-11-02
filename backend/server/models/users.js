const { Sequelize } = require('sequelize');
const { sequelize } = require('../helpers/database');

const Users = sequelize.define('Users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Users.beforeCreate('beforeCreating', async user => {
  const { password } = user;
  user.password = 'hashed_password' + password;
  return user;
});

module.exports = {
  Users,
};

const { Sequelize } = require("sequelize");
const { sequelize } = require("../helpers/database");
const { Users } = require("../models/users");

const Polls = sequelize.define("Polls", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Polls.belongsTo(Users, { foreignKey: "user_id" });

module.exports = {
  Polls,
};

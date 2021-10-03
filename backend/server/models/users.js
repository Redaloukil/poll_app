const { Sequelize } = require('sequelize');
const { sequelize } = require('../helpers/database');

const Users = sequelize.define('Users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
});


module.exports = {
    Users,
}
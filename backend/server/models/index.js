const { Polls } = require('./server/models/polls');
const { Users } = require('./server/models/users');
const { Choices } = require('./server/models/choices');
const { Votes } = require('./server/models/votes');


module.exports = {
    Polls,
    Users,
    Choices,
    Votes,
}
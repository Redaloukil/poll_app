const express = require('express');
const { usersRouter } = require('./users');
const { pollsRouter } = require('./polls');

const router = express.Router();

router.use('/users', usersRouter);
router.use('/polls', pollsRouter);

module.exports = {
  router
};

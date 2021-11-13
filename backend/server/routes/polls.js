const express = require('express');
const { authenticated } = require('../middlewares/authenticated');
const pollsController = require('../controllers/polls');

const pollsRouter = express.Router();

pollsRouter.get('/', pollsController.getAllPolls);
pollsRouter.get('/:id', pollsController.getPollById);
pollsRouter.post('/', authenticated, pollsController.createPoll);

module.exports = {
  pollsRouter
};

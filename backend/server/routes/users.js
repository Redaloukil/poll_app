const express = require('express');
const { userController } = require('../controllers');
const { authenticated } = require('../middlewares/authenticated');

const usersRouter = express.Router();

usersRouter.get('/', authenticated, userController.getAllUser);
usersRouter.get('/:id', authenticated, userController.getOneUser);
usersRouter.post('/signup', userController.createUser);
usersRouter.post('/login', userController.login);

module.exports = {
  usersRouter
};

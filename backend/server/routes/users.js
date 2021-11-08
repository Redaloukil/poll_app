const express = require('express');
const { userController } = require('../controllers');
const { authenticated } = require('../middlewares/authenticated');

const userRouter = express.Router();

userRouter.get('/', authenticated, userController.getAllUser);
userRouter.get('/:id', authenticated, userController.getOneUser);
userRouter.post('/signup', userController.createUser);
userRouter.post('/login', userController.login);

module.exports = {
  userRouter,
};

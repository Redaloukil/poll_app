const express = require('express');
const { userController } = require('../controllers');

const userRouter = express.Router();

userRouter.get('', userController.getAllUser);
userRouter.get('/:id', userController.getOneUser);
userRouter.post('/signup', userController.createUser);
userRouter.post('/login', userController.login);

module.exports = {
  userRouter,
};

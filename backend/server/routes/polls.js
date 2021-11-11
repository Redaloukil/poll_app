const express = require('express');

const pollRouter = express.Router();

pollRouter.get('/', authenticated, userController.getAllUser);
pollRouter.get('/:id', authenticated, userController.getOneUser);
pollRouter.post('/', userController.createUser);

module.exports = {
  router
};
